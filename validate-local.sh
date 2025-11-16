#!/bin/bash
# Local validation script for eBay MCP documentation
# Run this before committing changes to catch errors early

set -e

echo "🔍 eBay MCP Docs - Local Validation"
echo "===================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track overall status
WARNINGS=0
ERRORS=0

# 1. Validate JSON syntax
echo "1️⃣  Validating JSON syntax..."
if cat docs.json | python3 -m json.tool > /dev/null 2>&1; then
  echo -e "${GREEN}✅ JSON syntax is valid${NC}"
else
  echo -e "${RED}❌ JSON syntax is invalid${NC}"
  ERRORS=$((ERRORS + 1))
fi
echo ""

# 2. Check docs.json structure
echo "2️⃣  Validating docs.json structure..."

# Check required fields
if ! grep -q '"name"' docs.json; then
  echo -e "${RED}❌ Missing required field: name${NC}"
  ERRORS=$((ERRORS + 1))
fi

# Check colors only have valid keys (using jq for precise checking)
if command -v jq &> /dev/null; then
  color_keys=$(cat docs.json | jq -r '.colors | keys[]' 2>/dev/null || echo "")
  for key in $color_keys; do
    if [[ ! "$key" =~ ^(primary|light|dark)$ ]]; then
      echo -e "${RED}❌ Invalid color key: $key (only primary, light, dark are supported)${NC}"
      ERRORS=$((ERRORS + 1))
    fi
  done
fi

# Check navbar.primary.href is absolute
if grep -q '"primary"' docs.json; then
  href=$(grep -A 3 '"primary"' docs.json | grep '"href"' | cut -d'"' -f4)
  if [[ ! "$href" =~ ^https?:// ]]; then
    echo -e "${RED}❌ navbar.primary.href must be absolute URL, got: $href${NC}"
    ERRORS=$((ERRORS + 1))
  fi
fi

if [ $ERRORS -eq 0 ]; then
  echo -e "${GREEN}✅ docs.json structure is valid${NC}"
fi
echo ""

# 3. Check frontmatter
echo "3️⃣  Checking MDX frontmatter..."
missing_frontmatter=0
missing_title=0
missing_description=0

for file in $(find . -name "*.mdx" -not -path "./node_modules/*" -not -path "./.next/*"); do
  if ! grep -q "^---" "$file"; then
    echo -e "${RED}❌ Missing frontmatter: $file${NC}"
    missing_frontmatter=$((missing_frontmatter + 1))
    ERRORS=$((ERRORS + 1))
  else
    if ! grep -q "^title:" "$file"; then
      echo -e "${YELLOW}⚠️  Missing title: $file${NC}"
      missing_title=$((missing_title + 1))
      WARNINGS=$((WARNINGS + 1))
    fi
    if ! grep -q "^description:" "$file"; then
      echo -e "${YELLOW}⚠️  Missing description: $file${NC}"
      missing_description=$((missing_description + 1))
      WARNINGS=$((WARNINGS + 1))
    fi
  fi
done

if [ $missing_frontmatter -eq 0 ]; then
  echo -e "${GREEN}✅ All MDX files have frontmatter${NC}"
else
  echo -e "${RED}❌ $missing_frontmatter files missing frontmatter${NC}"
fi
echo ""

# 4. Check code blocks
echo "4️⃣  Checking code blocks for language tags..."
unlabeled_blocks=0

for file in $(find . -name "*.mdx" -not -path "./node_modules/*" -not -path "./.next/*"); do
  if grep -qP '```\s*$' "$file"; then
    echo -e "${YELLOW}⚠️  Unlabeled code block in: $file${NC}"
    unlabeled_blocks=$((unlabeled_blocks + 1))
    WARNINGS=$((WARNINGS + 1))
  fi
done

if [ $unlabeled_blocks -eq 0 ]; then
  echo -e "${GREEN}✅ All code blocks have language tags${NC}"
else
  echo -e "${YELLOW}⚠️  $unlabeled_blocks files have unlabeled code blocks${NC}"
fi
echo ""

# 5. Check for broken internal links (if mintlify is installed)
echo "5️⃣  Checking for broken links..."
if command -v mintlify &> /dev/null; then
  if mintlify broken-links 2>&1 | grep -q "No broken links found"; then
    echo -e "${GREEN}✅ No broken links found${NC}"
  else
    echo -e "${YELLOW}⚠️  Some links may be broken - run 'mintlify broken-links' for details${NC}"
    WARNINGS=$((WARNINGS + 1))
  fi
else
  echo -e "${YELLOW}⚠️  Mintlify CLI not installed - skipping link check${NC}"
  echo "   Install with: npm install -g mintlify"
fi
echo ""

# 6. Summary
echo "===================================="
echo "📊 Validation Summary"
echo "===================================="
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
  echo -e "${GREEN}🎉 All checks passed!${NC}"
  echo ""
  echo "Your documentation is ready to deploy."
  exit 0
elif [ $ERRORS -eq 0 ]; then
  echo -e "${YELLOW}⚠️  Validation completed with $WARNINGS warnings${NC}"
  echo ""
  echo "Review warnings above and fix if needed."
  exit 0
else
  echo -e "${RED}❌ Validation failed with $ERRORS errors and $WARNINGS warnings${NC}"
  echo ""
  echo "Please fix the errors above before deploying."
  exit 1
fi
