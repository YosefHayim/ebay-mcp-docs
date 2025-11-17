# Repository Guidelines

## Project Structure & Organization
- Documentation content lives in `*.mdx` files at the root (`index.mdx`, `quickstart.mdx`, etc.) and in topic folders like `authentication/`, `features/`, `guides/`, `mcp/`, `api-reference/`, `advanced/`, and `support/`.
- Mintlify configuration is defined in `docs.json`; site-wide styles are in `styles.css`.
- Branding, contribution, security, and deployment information live in `BRANDING.md`, `CONTRIBUTING.md`, `SECURITY.md`, and `DEPLOYMENT.md`.

## Build, Test, and Development Commands
- `mintlify dev` — Run the docs site locally at `http://localhost:3000`. Requires the Mintlify CLI (`npm install -g mintlify`).
- `bash validate-local.sh` — Run local validation (JSON syntax, `docs.json` structure, MDX frontmatter, code blocks, and optional broken links).
- Prefer running `bash validate-local.sh` before opening a pull request.

## Coding Style & Naming Conventions
- Follow `.editorconfig`: LF line endings, UTF-8, and 2-space indentation for MDX, JSON, YAML, JS/TS, CSS, and shell scripts.
- Use clear, descriptive file names in `kebab-case` (for example, `order-fulfillment.mdx`, `testing.mdx`).
- Keep headings concise and hierarchical; favor short paragraphs, bullet lists, and Mintlify components where appropriate.

## Testing Guidelines
- Treat `bash validate-local.sh` as the primary “test suite” for docs changes.
- Ensure all new `*.mdx` files include frontmatter with at least `title` and `description`.
- Label all fenced code blocks with a language (for example, ```ts, ```bash).

## Commit & Pull Request Guidelines
- Write descriptive commit messages (e.g., `docs: clarify quickstart auth flow`).
- For pull requests, include a short summary, list of key changes, and links to affected pages (for example, `quickstart.mdx`, `authentication/oauth-setup.mdx`).
- Note any validation steps performed (for example, `bash validate-local.sh`) and add screenshots only when visual changes are significant.

## Architecture Overview

The eBay MCP documentation is built on Mintlify's documentation platform:

```
┌─────────────────────────────────────────┐
│         Mintlify Platform               │
│  (docs.json, MDX files, components)     │
└─────────────────────────────────────────┘
           │
           ├─ MDX Content Layer
           │  ├─ Root pages (index.mdx, quickstart.mdx)
           │  ├─ Feature guides (authentication/, features/, guides/)
           │  ├─ API Reference (api-reference/*)
           │  └─ Advanced topics (advanced/, support/)
           │
           ├─ Configuration Layer
           │  ├─ docs.json (navigation, theme, settings)
           │  ├─ styles.css (custom styling)
           │  └─ .editorconfig (formatting rules)
           │
           └─ Infrastructure Layer
              ├─ Mintlify CLI (local dev server)
              ├─ validate-local.sh (quality checks)
              └─ GitHub Actions (CI/CD)
```

For detailed architecture information, see [advanced/architecture.mdx](/advanced/architecture).

## Development Workflows

### Local Development Setup

1. **Install Mintlify CLI globally:**
   ```bash
   npm install -g mintlify
   ```

2. **Clone the repository and navigate to docs:**
   ```bash
   git clone https://github.com/YosefHayim/ebay-mcp-server.git
   cd ebay-mcp-docs
   ```

3. **Start local dev server:**
   ```bash
   mintlify dev
   ```
   Opens at `http://localhost:3000` with hot-reload enabled.

4. **Verify changes before committing:**
   ```bash
   bash validate-local.sh
   ```

### Testing Workflow

Before every commit:
1. Run `bash validate-local.sh` to check:
   - JSON syntax validation
   - `docs.json` structure validation
   - MDX frontmatter completeness
   - Code block language tags
   - Optional: broken internal links
2. Fix any reported issues
3. Test changes in browser at `localhost:3000`
4. Commit with descriptive message

### Common Development Tasks

**Add a new documentation page:**
1. Create `new-page.mdx` in appropriate directory
2. Add required frontmatter (title, description)
3. Write content using MDX and Mintlify components
4. Add page path to `docs.json` navigation
5. Run `bash validate-local.sh`
6. Verify in browser

**Update navigation:**
1. Edit `docs.json`
2. Find relevant `"group"` section
3. Add page path to `"pages"` array (without `.mdx` extension)
4. Save and test with `mintlify dev`

**Use Mintlify components:**
- Import not required (auto-available in MDX)
- Common components: `<Card>`, `<Steps>`, `<Accordion>`, `<Note>`, `<Warning>`, `<Tip>`
- See examples in existing MDX files

## Key Technologies

### Mintlify Documentation Platform
- **Purpose:** Static site generator optimized for technical documentation
- **Features:** Hot-reload, search, analytics, versioning, contextual AI features
- **Config:** All settings in `docs.json` (navigation, theme, metadata)

### MDX File Format
- **What:** Markdown + JSX components
- **Syntax:** Standard markdown plus `<Component>` usage
- **Extension:** `.mdx` for all documentation pages

### YAML Frontmatter (Required)
Every MDX file must start with:
```yaml
---
title: "Clear, descriptive page title"
description: "Concise summary for SEO/navigation (50-160 characters)"
---
```

Optional fields: `icon`, `sidebarTitle`, `mode`

### Mintlify Components

**Frequently Used:**
- `<Card>` and `<CardGroup>` — Feature showcases, navigation
- `<Steps>` and `<Step>` — Sequential procedures
- `<Accordion>` and `<AccordionGroup>` — Collapsible content
- `<Note>`, `<Tip>`, `<Warning>`, `<Info>` — Callout boxes
- `<Tabs>` and `<Tab>` — Alternative approaches

**Example:**
```mdx
<Steps>
  <Step title="Install">
    Run `npm install`
  </Step>
  <Step title="Configure">
    Create `.env` file
  </Step>
</Steps>
```

## Quality Standards

### Documentation Standards (from CLAUDE.md)

**Voice and Tone:**
- Second-person ("you"), not "we" or "users"
- Active voice ("Configure your credentials" not "Credentials should be configured")
- Conversational but professional
- Encouraging and helpful

**Structure:**
- Prerequisites at start (use callouts)
- Progressive disclosure (simple → complex)
- Clear, descriptive headings
- Short paragraphs (2-4 sentences)
- Lists for scannability

**Code Examples:**
- Test all code before publishing
- Match project style
- Include basic and advanced examples
- Always add language tags
- Comment complex code
- Use realistic values (not "foo", "bar")

### Frontmatter Requirements
- **Required:** `title`, `description`
- **Description:** 50-160 characters ideal, specific and descriptive
- **Format:** YAML between `---` markers
- **Validation:** Checked by `bash validate-local.sh`

### Code Block Language Tags
All code blocks MUST have language identifiers:
- ✅ Good: ` ```bash`, ` ```typescript`, ` ```json`
- ❌ Bad: ` ``` ` (no language tag)

Common tags: `bash`, `typescript`, `javascript`, `json`, `yaml`, `python`, `mdx`, `plaintext`

## Common Tasks Quick Reference

### Add New Documentation Page

```bash
# 1. Create file with frontmatter
cat > new-feature.mdx << 'EOF'
---
title: "New Feature Guide"
description: "Learn how to use the new feature in eBay MCP Server"
---

# New Feature Guide

Your content here...
EOF

# 2. Add to docs.json navigation
# Edit docs.json → find appropriate "group" → add "new-feature" to "pages" array

# 3. Validate
bash validate-local.sh

# 4. Test locally
mintlify dev
```

### Update Navigation (docs.json)

1. Open `docs.json`
2. Find the appropriate tab and group:
   - Getting Started, Authentication, Core Features, Guides, MCP Integration, Advanced, Support
   - Or API Reference → Overview, Account, Inventory, Fulfillment, Marketing, Analytics
3. Add page path (without `.mdx`) to `"pages"` array
4. Save and reload `mintlify dev`

### Use Mintlify Components

**Cards for features:**
```mdx
<CardGroup cols={2}>
  <Card title="Feature One" icon="rocket" href="/features/one">
    Description of feature one
  </Card>
  <Card title="Feature Two" icon="star" href="/features/two">
    Description of feature two
  </Card>
</CardGroup>
```

**Steps for procedures:**
```mdx
<Steps>
  <Step title="First Step">
    Do this first
  </Step>
  <Step title="Second Step">
    Then do this
  </Step>
</Steps>
```

**Callouts for important info:**
```mdx
<Note>Helpful information</Note>
<Tip>Pro tip for users</Tip>
<Warning>Important warning</Warning>
<Info>Additional context</Info>
```

### Validate Changes Locally

```bash
# Run all checks
bash validate-local.sh

# Check specific issues:
# - JSON syntax
# - docs.json structure
# - MDX frontmatter (title, description)
# - Code block language tags
# - Internal links (optional)
```

## Troubleshooting

### Mintlify CLI Issues

**Problem:** `mintlify: command not found`
- **Cause:** Mintlify CLI not installed globally
- **Solution:** `npm install -g mintlify`

**Problem:** Port 3000 already in use
- **Cause:** Another process using port 3000
- **Solution:** Kill existing process or use `mintlify dev --port 3001`

**Problem:** Changes not reflecting in browser
- **Cause:** Cache or build issue
- **Solution:** Hard refresh (Ctrl+Shift+R / Cmd+Shift+R) or restart `mintlify dev`

### Build Errors

**Problem:** `Invalid frontmatter in X.mdx`
- **Cause:** Missing or malformed YAML frontmatter
- **Solution:** Ensure file starts with `---`, has `title` and `description`, ends with `---`

**Problem:** `Page not found in navigation`
- **Cause:** File exists but not added to `docs.json`
- **Solution:** Add page path (without `.mdx`) to appropriate group in `docs.json`

**Problem:** Component rendering error
- **Cause:** Incorrect component syntax or unclosed tags
- **Solution:** Check component examples in existing files, ensure all tags are properly closed

### Validation Script Errors

**Problem:** `validate-local.sh: permission denied`
- **Cause:** Script not executable
- **Solution:** `chmod +x validate-local.sh`

**Problem:** Missing language tags on code blocks
- **Cause:** Code blocks using ` ``` ` without language identifier
- **Solution:** Add language: ` ```bash`, ` ```typescript`, etc.

**Problem:** Broken internal links
- **Cause:** Link points to non-existent file or wrong path
- **Solution:** Verify file exists, check path is correct (e.g., `/quickstart` → `quickstart.mdx`)

### Common Gotchas

- **Navigation paths:** Use path without `.mdx` extension in `docs.json` (e.g., `"quickstart"` not `"quickstart.mdx"`)
- **Internal links:** Use absolute paths from root (e.g., `/authentication/overview` not `../authentication/overview`)
- **Frontmatter:** Must be valid YAML between `---` markers at file start
- **Components:** Auto-available in MDX, no import needed
- **Hot-reload:** Usually works, but hard refresh may be needed for navigation changes

## Architecture Overview

This documentation site follows a three-layer structure:

```
┌─────────────────────────────────────────────┐
│         Presentation Layer (MDX)            │
│  *.mdx files with Mintlify components       │
├─────────────────────────────────────────────┤
│      Configuration Layer (JSON/CSS)         │
│  docs.json (navigation, theme, settings)    │
│  styles.css (custom styles)                 │
├─────────────────────────────────────────────┤
│       Build Layer (Mintlify CLI)            │
│  Local dev server & validation              │
└─────────────────────────────────────────────┘
```

**Key Components:**
- **Content:** MDX files with YAML frontmatter at root and in topic folders (`authentication/`, `features/`, `guides/`, `mcp/`, `api-reference/`, `advanced/`, `support/`)
- **Navigation:** Defined in `docs.json` with hierarchical structure
- **Styling:** Global styles in `styles.css`, eBay brand colors (primary: #E53238, light: #F5A623, dark: #0064D2)
- **Validation:** Local validation script (`validate-local.sh`) checks JSON, MDX, frontmatter, code blocks, and links

For detailed architecture information, see `/advanced/architecture.mdx`.

## Development Workflows

### Local Development Setup

1. **Install Mintlify CLI:**
   ```bash
   npm install -g mintlify
   ```

2. **Start Local Server:**
   ```bash
   mintlify dev
   ```
   View at `http://localhost:3000`

3. **Validate Before Committing:**
   ```bash
   bash validate-local.sh
   ```

### Testing Workflow

Run validation before every commit:
- JSON syntax validation
- `docs.json` structure checks
- MDX frontmatter validation (title, description)
- Code block language tag verification
- Optional broken link detection

### Common Development Tasks

**Add a New Documentation Page:**
1. Create `new-page.mdx` with required frontmatter
2. Add entry to `docs.json` navigation
3. Test locally with `mintlify dev`
4. Run `bash validate-local.sh`
5. Commit with descriptive message (e.g., `docs: add new page for feature X`)

**Update Navigation:**
1. Edit `docs.json` in the appropriate section
2. Verify structure with validation script
3. Check rendering locally

**Update Styling:**
1. Modify `styles.css` for global changes
2. Test across multiple pages
3. Verify theme consistency

## Key Technologies

### Mintlify Documentation Platform
- Modern documentation framework with built-in components
- Auto-generated search and navigation
- Mobile-responsive design
- AI optimization features (llms.txt, MCP support)

### MDX File Format
- Markdown with JSX component support
- YAML frontmatter for metadata
- Supports Mintlify React components inline
- File extension: `.mdx`

### YAML Frontmatter Requirements
Every MDX page MUST include:
```yaml
---
title: "Clear, descriptive page title"
description: "Concise summary for SEO/navigation (50-160 characters ideal)"
---
```

Optional fields:
```yaml
icon: "icon-name"
sidebarTitle: "Shorter sidebar title"
mode: "wide"
```

### Mintlify Components
Frequently used components:
- `<Card>` and `<CardGroup>` — Navigation and feature showcases
- `<Steps>` and `<Step>` — Sequential procedures
- `<Accordion>` and `<AccordionGroup>` — Optional/supplementary content
- `<Tabs>` and `<Tab>` — Alternative approaches
- `<Note>`, `<Tip>`, `<Warning>`, `<Info>`, `<Check>` — Callouts

## Quality Standards

### Documentation Standards
- **Voice:** Second-person ("you"), active voice
- **Tone:** Conversational but professional, encouraging
- **Paragraphs:** 2-4 sentences max
- **Structure:** Progressive disclosure (simple first, complexity later)

### Required Elements
- **Frontmatter:** Title and description on every MDX file
- **Code Blocks:** Language tags required (```bash, ```typescript, ```json, etc.)
- **Links:** Use relative paths for internal links (`/quickstart` not absolute URLs)
- **Images:** Descriptive alt text required

### Code Examples
- Test all code examples before publishing
- Include both basic and advanced examples where relevant
- Use realistic values, not "foo" and "bar"
- Comment complex code

### Cross-References
- Link to related content generously
- Use descriptive link text: "See the [OAuth setup guide](/authentication/oauth-setup)" not "click here"
- Provide context for why readers should visit the link

## Common Tasks Quick Reference

### Add a New Page

1. Create file with frontmatter:
   ```mdx
   ---
   title: "Your Page Title"
   description: "Brief description for SEO (50-160 chars)"
   ---

   # Your Page Title

   Your content here...
   ```

2. Update `docs.json`:
   ```json
   {
     "group": "Section Name",
     "pages": [
       "existing-page",
       "your-new-page"
     ]
   }
   ```

3. Validate and test:
   ```bash
   mintlify dev
   bash validate-local.sh
   ```

### Use Mintlify Components

**Sequential Steps:**
```mdx
<Steps>
  <Step title="First Step">
    Do this first.
  </Step>
  <Step title="Second Step">
    Then do this.
  </Step>
</Steps>
```

**Callouts:**
```mdx
<Warning>
  Important warning message here
</Warning>

<Tip>
  Helpful tip for users
</Tip>
```

**Cards:**
```mdx
<CardGroup cols={2}>
  <Card title="Card One" icon="rocket" href="/link-one">
    Description here
  </Card>
  <Card title="Card Two" icon="book" href="/link-two">
    Description here
  </Card>
</CardGroup>
```

### Validate Changes Locally

Run the full validation suite:
```bash
bash validate-local.sh
```

Check specific aspects:
- **JSON syntax:** Automatic in validation script
- **Frontmatter:** Checks title/description presence
- **Code blocks:** Verifies language tags
- **Links:** Optional broken link detection

## Troubleshooting

### Mintlify CLI Won't Start

**Problem:** `mintlify dev` fails or doesn't start
**Solutions:**
- Reinstall CLI: `npm install -g mintlify`
- Check Node.js version (18+ required)
- Clear npm cache: `npm cache clean --force`
- Check for port conflicts (default: 3000)

### Validation Script Errors

**Problem:** `validate-local.sh` reports errors
**Solutions:**
- **JSON errors:** Check `docs.json` syntax with a JSON validator
- **Frontmatter missing:** Add `title` and `description` to MDX files
- **Code blocks:** Add language tags (```bash, ```typescript, etc.)
- **Broken links:** Fix or update links flagged in optional link check

### Build Errors

**Problem:** Local build fails or pages don't render
**Solutions:**
- Check MDX syntax (unclosed components, invalid nesting)
- Verify frontmatter YAML syntax
- Ensure all referenced files exist
- Check for special characters in frontmatter (use quotes)
- Review Mintlify component usage (proper opening/closing tags)

### Navigation Not Updating

**Problem:** Changes to `docs.json` don't appear
**Solutions:**
- Restart Mintlify dev server
- Clear browser cache
- Check JSON syntax in `docs.json`
- Verify file paths match actual files

### Common MDX Issues

**Problem:** Components not rendering correctly
**Solutions:**
- Ensure proper spacing around components (blank lines before/after)
- Check component capitalization (e.g., `<Steps>` not `<steps>`)
- Verify all components are properly closed
- Check for conflicting markdown syntax within components
