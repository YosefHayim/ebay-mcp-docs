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
