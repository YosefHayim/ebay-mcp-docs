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

