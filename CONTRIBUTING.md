# Contributing to eBay MCP Server Documentation

Thank you for your interest in contributing to the eBay MCP Server documentation! This guide will help you get started.

## 🌟 Ways to Contribute

We welcome all types of contributions:

- 📝 **Documentation improvements** - Fix typos, clarify explanations, add examples
- 🐛 **Bug reports** - Report broken links, errors, or outdated information
- 💡 **Feature requests** - Suggest new documentation sections or improvements
- 🌍 **Translations** - Help translate documentation to other languages
- 🎨 **Design improvements** - Enhance UI/UX, accessibility, or visual design
- 📚 **Code examples** - Add practical examples and use cases

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Git installed
- Familiarity with Markdown/MDX
- Basic understanding of documentation best practices

### Local Setup

1. **Fork the repository**
   ```bash
   # Visit https://github.com/YosefHayim/ebay-mcp-docs
   # Click the "Fork" button
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ebay-mcp-docs.git
   cd ebay-mcp-docs
   ```

3. **Install Mintlify CLI**
   ```bash
   npm install -g mintlify
   ```

4. **Preview locally**
   ```bash
   mintlify dev
   ```

   Open http://localhost:3000 to see your changes live!

5. **Make your changes**
   - Edit MDX files in your favorite editor
   - Changes appear instantly in the browser
   - Follow the style guide in CLAUDE.md

6. **Test your changes**
   ```bash
   # Check for broken links
   mintlify broken-links

   # Ensure all pages load correctly
   # Navigate through all sections in the browser
   ```

## 📝 Documentation Standards

### Writing Guidelines

**Voice and Style:**
- Use **second person** ("you") not "we" or "users"
- Write in **active voice** - "Configure your credentials" not "Credentials should be configured"
- Be **conversational but professional** - helpful guide, not academic paper
- **Short paragraphs** - 2-4 sentences maximum
- Use **lists** for scannability

**Structure:**
- **Prerequisites at the start** using `<Note>` or `<Info>` callouts
- **Progressive disclosure** - simple concepts first, complexity later
- **Clear, descriptive headings** - action-oriented when appropriate
- **Visual hierarchy** - use headings, lists, callouts appropriately

**Code Examples:**
- **Test all code examples** before submitting
- Add **language tags** to all code blocks: ```bash, ```typescript, ```json
- Use **realistic values** - not "foo" and "bar"
- Include **comments** for complex code
- Show both **basic and advanced** examples when relevant

**Visual Content:**
- Add **descriptive alt text** to all images
- Use **relative paths** for internal links: `/quickstart` not full URLs
- Keep screenshots **up-to-date**
- Use consistent **window sizing** for screenshots

### MDX Frontmatter (Required)

Every MDX file must include frontmatter:

```yaml
---
title: "Clear, descriptive page title"
description: "Concise summary for SEO/navigation (50-160 characters)"
---
```

Optional frontmatter:
```yaml
icon: "icon-name"
sidebarTitle: "Shorter title"
mode: "wide"
```

### Mintlify Components

Use these components appropriately:

**Common Components:**
```mdx
<Card title="Title" icon="icon-name" href="/path">
  Description text
</Card>

<Steps>
  <Step title="First Step">
    Instructions here
  </Step>
</Steps>

<Accordion title="Expandable Content">
  Additional details
</Accordion>

<Tabs>
  <Tab title="Option 1">
    Content for option 1
  </Tab>
</Tabs>

<Note>Important information</Note>
<Tip>Helpful tip</Tip>
<Warning>Warning message</Warning>
<Info>Informational note</Info>
```

See [CLAUDE.md](CLAUDE.md) for complete component guidelines.

## 🎨 Brand Guidelines

### Colors

Use official eBay brand colors:
- **Primary Red:** `#E53238`
- **Blue:** `#0064D2`
- **Yellow:** `#F5AF02`
- **Green:** `#86B817`

See [BRANDING.md](BRANDING.md) for complete color palette and usage guidelines.

### eBay-Specific Terms

- **eBay Sell APIs** (not "eBay API" or "Sell API")
- **eBay Developer Portal** (capitalize properly)
- **Sandbox** and **Production** (capitalize when referring to environments)
- **Client ID** and **Client Secret** (not "client id" or "client_id" in prose)
- **OAuth 2.0** (not "OAuth" or "OAuth2")
- **MCP server** (lowercase "server" unless at start of sentence)

## 🔄 Contribution Workflow

### Step 1: Choose What to Work On

**Good First Issues:**
- Look for issues labeled `good first issue` or `documentation`
- Fix typos or broken links
- Add missing code examples
- Improve clarity of existing pages

**Larger Contributions:**
- Check existing issues and discussions
- Comment on the issue to claim it
- For new features, open an issue first to discuss

### Step 2: Create a Branch

```bash
# Update your fork
git checkout main
git pull upstream main

# Create a feature branch
git checkout -b docs/your-feature-name
```

Branch naming:
- `docs/fix-typo-in-quickstart`
- `docs/add-gemini-example`
- `docs/improve-auth-guide`

### Step 3: Make Changes

Edit the relevant MDX files:

```bash
# Example: Editing the quickstart guide
vim quickstart.mdx

# Preview changes
mintlify dev
```

**Before committing, check:**
- [ ] Frontmatter is complete (title, description)
- [ ] No broken links (`mintlify broken-links`)
- [ ] All code examples tested
- [ ] Code blocks have language tags
- [ ] Images have alt text
- [ ] Callouts used appropriately
- [ ] Spell-checked and proofread

### Step 4: Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "docs: improve OAuth setup clarity in quickstart

- Added step-by-step screenshots
- Clarified redirect URI configuration
- Added troubleshooting for common errors"
```

**Commit message format:**
```
<type>: <subject>

<body>
```

Types:
- `docs:` - Documentation changes
- `fix:` - Fix errors or broken links
- `feat:` - New documentation sections
- `style:` - Formatting, no content change
- `refactor:` - Reorganize content

### Step 5: Push and Create Pull Request

```bash
# Push to your fork
git push origin docs/your-feature-name

# Create pull request on GitHub
# Visit: https://github.com/YosefHayim/ebay-mcp-docs/compare
```

**Pull Request Checklist:**
- [ ] Title clearly describes the change
- [ ] Description explains what and why
- [ ] Screenshots for visual changes
- [ ] Links to related issues
- [ ] All checks passing
- [ ] Requested review if needed

### Step 6: Code Review

- Respond to feedback promptly
- Make requested changes
- Push updates to the same branch
- Be patient and respectful

## 📋 Pull Request Template

When creating a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (broken link, typo, error)
- [ ] New content (new page or section)
- [ ] Content improvement (clarity, examples)
- [ ] Design/UI improvement
- [ ] Other (please describe)

## Checklist
- [ ] Followed style guide in CLAUDE.md
- [ ] Added/updated frontmatter
- [ ] Tested all code examples
- [ ] Checked for broken links
- [ ] Previewed changes locally
- [ ] Added screenshots (if applicable)

## Screenshots (if applicable)
[Add screenshots here]

## Related Issues
Closes #123
```

## 🐛 Reporting Issues

### Before Reporting

1. **Search existing issues** - your issue may already be reported
2. **Check the documentation** - it might already be addressed
3. **Verify it's a documentation issue** - not a server issue

### Creating an Issue

Use our issue templates:

**Bug Report:**
- What's wrong (broken link, outdated info, error)
- Where it is (page URL or file path)
- Expected vs actual behavior
- Screenshots if helpful

**Documentation Request:**
- What's missing or unclear
- Why it's needed
- Who would benefit
- Suggested structure or examples

**General Questions:**
- Use GitHub Discussions instead of issues
- Link: https://github.com/YosefHayim/ebay-mcp-docs/discussions

## 🌍 Translation Contributions

We welcome translations to make documentation accessible globally!

### Process

1. **Open an issue** proposing the translation
2. **Wait for approval** - we'll create a language structure
3. **Translate files** - maintain original structure
4. **Use language codes** - `es/`, `fr/`, `ja/`, etc.
5. **Update navigation** - add language selector

### Guidelines

- Translate **meaning**, not word-for-word
- Maintain **technical accuracy**
- Keep **code examples** in English
- Preserve **Mintlify components**
- Test **locally** before submitting

## 🎯 Priority Areas

We especially need help with:

1. **Code Examples**
   - Real-world use cases
   - Integration examples
   - Troubleshooting scenarios

2. **API Reference**
   - Individual tool documentation
   - Parameter descriptions
   - Return value examples

3. **Guides**
   - Step-by-step tutorials
   - Best practices
   - Common workflows

4. **Screenshots**
   - eBay Developer Portal
   - MCP client setup
   - Configuration screens

5. **Video Tutorials**
   - Setup walkthroughs
   - Common tasks
   - Troubleshooting

## ⚡ Quick Contributions

Don't have time for a full PR? You can still help!

**One-Click Edits:**
1. Find a page on https://ebaymcp.com
2. Click "Suggest Edit" at the bottom
3. Make your changes in GitHub's editor
4. Submit as a pull request

**Small Fixes:**
- Typos - just fix and PR
- Broken links - report or fix
- Formatting issues - fix and PR

## 🏆 Recognition

Contributors are recognized:
- Listed in our Contributors section
- Mentioned in release notes
- GitHub contributor badge

## 💬 Getting Help

**Questions about contributing?**
- 💬 [GitHub Discussions](https://github.com/YosefHayim/ebay-mcp-docs/discussions)
- 🐛 [GitHub Issues](https://github.com/YosefHayim/ebay-mcp-docs/issues)
- 📖 [Read CLAUDE.md](CLAUDE.md) - detailed guidelines

**Questions about the eBay MCP Server itself?**
- 📦 [Server Repository](https://github.com/YosefHayim/ebay-mcp-server)
- 💬 [Server Discussions](https://github.com/YosefHayim/ebay-mcp-server/discussions)

## 📜 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

**In summary:**
- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy

## 📄 License

By contributing, you agree that your contributions will be licensed under the same Apache 2.0 License that covers the project.

## 🙏 Thank You!

Every contribution, no matter how small, makes a difference. Thank you for helping make the eBay MCP Server documentation better for everyone!

---

**Happy Contributing! 🚀**

Questions? Open a [discussion](https://github.com/YosefHayim/ebay-mcp-docs/discussions) - we're here to help!
