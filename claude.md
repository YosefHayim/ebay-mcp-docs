# eBay MCP Server Documentation

## Working Relationship
- You can push back on ideas - this can lead to better documentation. Cite sources and explain your reasoning when you do so
- ALWAYS ask for clarification rather than making assumptions
- NEVER lie, guess, or make up information
- When uncertain about eBay API behavior or MCP specifications, acknowledge it and suggest verification

## Project Context

### What This Is
Documentation for the eBay MCP Server - a comprehensive Model Context Protocol implementation that provides AI assistants with full access to eBay's Sell APIs through 230+ tools.

### Project Characteristics
- **Technology:** TypeScript, Node.js 18+, MCP SDK 1.21.1
- **API Coverage:** 99.1% (110/111 eBay Sell API endpoints)
- **Testing:** 870+ tests with 99%+ function coverage
- **License:** Apache 2.0
- **Repository:** https://github.com/YosefHayim/ebay-mcp-server

### Documentation Format
- **Format:** MDX files with YAML frontmatter
- **Build System:** Mintlify documentation platform
- **Config:** docs.json for navigation, theme, and settings
- **Components:** Mintlify React components (Card, Steps, Accordion, etc.)
- **Theme:** Venus theme with eBay brand colors (primary: #E53238, light: #F5A623, dark: #0064D2)

## Audience

### Primary Audiences
1. **New developers:** Need step-by-step guides, clear explanations, minimal jargon
2. **Experienced developers:** Want API references, architecture details, advanced topics
3. **AI assistant users:** Need practical guides for using MCP tools with Claude, Cursor, etc.
4. **Contributors:** Need development setup, testing, and contribution guidelines

### Assumed Knowledge
- Basic understanding of APIs and REST concepts
- Familiarity with Node.js and npm
- General command-line proficiency
- For advanced docs: TypeScript, OAuth 2.0, testing frameworks

## Content Strategy

### Guiding Principles
- Document just enough for user success - not too much, not too little
- Prioritize accuracy and usability of information
- Make content evergreen when possible (avoid version-specific details unless necessary)
- Search for existing information before adding new content
- Avoid duplication unless done for a strategic reason (e.g., different audience levels)
- Check existing patterns for consistency
- Start by making the smallest reasonable changes

### Content Organization
1. **Getting Started:** Quick wins, immediate value (quickstart, installation, configuration)
2. **Core Concepts:** Authentication, MCP integration, API overview
3. **Features:** Detailed guides for each API category (inventory, orders, marketing, analytics)
4. **Practical Guides:** Real-world scenarios and workflows
5. **API Reference:** Complete tool documentation
6. **Advanced:** Architecture, testing, contributing
7. **Support:** Troubleshooting, FAQ, changelog

### Technical Accuracy
- All eBay API endpoint counts, coverage percentages, and capabilities must match the actual implementation
- Rate limits (10,000-50,000 for user tokens, 1,000 for client credentials) are accurate
- Code examples must be tested and working
- Tool names and parameters must match the actual MCP server implementation
- Environment variables must match the server's `.env` schema

## Frontmatter Requirements

Every MDX page MUST include:
```yaml
---
title: "Clear, descriptive page title"
description: "Concise summary for SEO/navigation (50-160 characters ideal)"
---
```

Optional frontmatter:
```yaml
icon: "icon-name"  # For navigation
sidebarTitle: "Shorter title for sidebar"
mode: "wide"  # For pages needing more width
```

## Writing Standards

### Voice and Tone
- **Second-person voice:** "you" not "we" or "users"
- **Active voice:** "Configure your credentials" not "Credentials should be configured"
- **Conversational but professional:** Helpful guide, not academic paper
- **Encouraging:** "You can do this" attitude, especially for new developers

### Structure
- **Prerequisites at start** of procedural content (use `<Note>` or `<Info>` callouts)
- **Progressive disclosure:** Simple first, complexity later
- **Clear headings:** Descriptive, action-oriented when appropriate
- **Short paragraphs:** 2-4 sentences max
- **Lists for scanability:** Bullet points and numbered steps

### Code and Examples
- **Test all code examples** before publishing
- **Match style** of existing examples in the project
- **Include both basic and advanced** use cases where relevant
- **Language tags on ALL code blocks:** ```bash, ```typescript, ```json, etc.
- **Comment complex code:** Explain non-obvious parts
- **Show realistic examples:** Use plausible values, not "foo" and "bar"

### Visual Content
- **Alt text on ALL images:** Descriptive, not "image" or "screenshot"
- **Relative paths for internal links:** `/quickstart` not `https://docs.example.com/quickstart`
- **External links:** Use full URLs with descriptive text
- **Screenshots:** Keep up-to-date, use consistent window sizing

### Mintlify Components

#### Use Frequently
- `<Card>` and `<CardGroup>`: For navigation and feature showcases
- `<Steps>` and `<Step>`: For sequential procedures
- `<Accordion>` and `<AccordionGroup>`: For optional/supplementary content
- `<Tabs>` and `<Tab>`: For alternative approaches or platforms
- `<Note>`, `<Tip>`, `<Warning>`, `<Info>`, `<Check>`: For callouts

#### Use Appropriately
- `<CodeGroup>`: For showing same operation in multiple languages
- `<Frame>`: For image borders and styling
- `<Columns>`: For side-by-side content

#### Example Usage
```mdx
<Steps>
  <Step title="Install Dependencies">
    Run the installation command:
    ```bash
    npm install
    ```
  </Step>

  <Step title="Configure Environment">
    Create your `.env` file with credentials.
  </Step>
</Steps>

<Warning>
  Never commit your `.env` file to version control
</Warning>
```

## Git Workflow

### Commit Guidelines
- **NEVER use --no-verify** when committing
- **Ask how to handle uncommitted changes** before starting work
- **Create a new branch** when no clear branch exists for changes
- **Commit frequently** throughout development with clear messages
- **NEVER skip or disable pre-commit hooks**

### Commit Message Format
```
<type>: <subject>

<body>

<footer>
```

Types: `docs`, `fix`, `feat`, `chore`, `style`, `refactor`

Examples:
- `docs: add OAuth setup guide`
- `fix: correct rate limit values in quickstart`
- `docs: improve troubleshooting section clarity`

## Do Not

- Skip frontmatter on any MDX file
- Use absolute URLs for internal links
- Include untested code examples
- Make assumptions - always ask for clarification
- Add content without checking for duplication
- Use first-person plural ("we") when second person ("you") is more direct
- Over-promise features that don't exist
- Copy-paste from other docs without verifying accuracy for this project
- Use emojis except in code comments or when explicitly requested

## Common Patterns

### Installation Instructions
Always include:
1. System requirements
2. Step-by-step installation
3. Verification step
4. Common troubleshooting
5. Next steps

### API Documentation
Structure:
1. Overview and purpose
2. Prerequisites
3. Available operations (tools)
4. Code examples
5. Common use cases
6. Error handling
7. Related topics

### Troubleshooting Sections
Format:
- **Problem:** Clear description
- **Cause:** Why it happens
- **Solution:** Step-by-step fix
- Use `<Accordion>` for multiple issues

### Cross-References
- Link to related content generously
- Use descriptive link text: "See the [OAuth setup guide](/authentication/oauth-setup)" not "click here"
- Provide context: why should they visit that link?

## Style Reference

### eBay-Specific Terms
- **eBay Sell APIs** (not "eBay API" or "Sell API")
- **eBay Developer Portal** (capitalize properly)
- **Sandbox** and **Production** (capitalize when referring to environments)
- **Client ID** and **Client Secret** (not "client id" or "client_id" in prose)
- **OAuth 2.0** (not "OAuth" or "OAuth2")
- **MCP server** (lowercase "server" unless at start of sentence)
- **Model Context Protocol (MCP)** (full name on first use, MCP thereafter)

### Technical Terms
- **user tokens** (lowercase in general text)
- **client credentials** (lowercase in general text)
- **rate limits** (not "rate limiting" when referring to the limits themselves)
- **tools** (lowercase when referring to MCP tools)

### Code Elements in Prose
- Use backticks for: `npm install`, `EBAY_CLIENT_ID`, `getFulfillmentPolicies`
- Use **bold** for: UI elements, button names, emphasis
- Use _italics_ for: introducing new terms (first use only)

## Mintlify-Specific Features

### AI Optimization (2025)
- **llms.txt file:** Defines priority pages and key concepts for AI ingestion
- **Model Context Protocol support:** Auto-generated MCP servers for API docs
- **Contextual options:** Copy, view, ChatGPT, Claude, Perplexity, MCP, Cursor, VSCode

### Modern Features to Use
- **Update component:** For changelog with filterable tags
- **Search customization:** `"prompt": "Search eBay MCP documentation..."`
- **Feedback options:** Thumbs rating, suggest edits, raise issues
- **Code block features:** Focus mode, expandable blocks, theme-aware

### Accessibility
- ARIA attributes handled by Mintlify components
- Ensure all interactive elements are keyboard-accessible
- Provide text alternatives for visual content
- Use semantic HTML through MDX

## Quality Checklist

Before finalizing any documentation page:

- [ ] Frontmatter complete (title, description)
- [ ] No broken links (internal or external)
- [ ] All code examples tested and working
- [ ] Code blocks have language tags
- [ ] Images have descriptive alt text
- [ ] Callouts used appropriately (Note, Warning, Tip, etc.)
- [ ] Content matches existing style and tone
- [ ] No assumptions made - everything verified
- [ ] Cross-references to related topics included
- [ ] Next steps or related resources provided
- [ ] Mintlify components used correctly
- [ ] No typos or grammatical errors
- [ ] Technical accuracy verified against source code
- [ ] Appropriate for target audience (new vs. experienced)

## Common Questions

### When should I create a new page vs. expand an existing one?
- New page: Distinct topic, different audience level, or would make existing page too long (>1000 lines)
- Expand existing: Closely related topic, same audience, adds valuable context

### How much detail in code examples?
- Enough to be useful and correct
- Not so much it becomes overwhelming
- Provide "basic" and "advanced" examples when there's a clear distinction

### How to handle version-specific information?
- Make it evergreen when possible
- If version-specific, clearly state which version
- Use versioning features (coming to Mintlify) when available
- Prefer: "As of version X.Y" over "Currently"

### What if information conflicts with the source repository?
- Trust the source code over documentation
- Update docs to match reality
- If uncertain, verify with repository owner
- Never guess or make assumptions

## Project-Specific Notes

### Rate Limits Are Critical
Users frequently hit rate limits. Documentation must:
- Clearly distinguish user token limits (10K-50K/day) from client credentials (1K/day)
- Emphasize importance of user tokens for production
- Provide troubleshooting for rate limit errors

### OAuth Setup Is a Common Pain Point
- Step-by-step instructions must be crystal clear
- Screenshots or detailed descriptions of eBay Developer Portal
- Common errors (redirect URI mismatch, wrong environment)
- Both automated and manual setup methods

### Multiple MCP Clients
- Don't assume Claude Desktop
- Provide config for Claude, Cursor, and generic MCP clients
- Path configurations vary by OS (macOS, Windows, Linux)

### Sandbox vs. Production
- Always recommend starting with Sandbox
- Clear warnings about Production affecting real transactions
- Switching process must be documented

## Resources

- **Mintlify Docs:** https://mintlify.com/docs
- **eBay Developer Portal:** https://developer.ebay.com
- **MCP Specification:** https://modelcontextprotocol.io
- **Source Repository:** https://github.com/YosefHayim/ebay-mcp-server
- **MDX Documentation:** https://mdxjs.com/
