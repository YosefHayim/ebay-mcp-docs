# eBay MCP Server Documentation

Comprehensive documentation for the eBay MCP Server - a Model Context Protocol implementation that provides AI assistants with full access to eBay's Sell APIs through 230+ tools.

## 🚀 Quick Links

- **Live Documentation:** [ebaymcp.com](https://ebaymcp.com)
- **Source Repository:** [github.com/YosefHayim/ebay-mcp-server](https://github.com/YosefHayim/ebay-mcp-server)
- **eBay Developer Portal:** [developer.ebay.com](https://developer.ebay.com)
- **MCP Specification:** [modelcontextprotocol.io](https://modelcontextprotocol.io)

## 📚 What's Documented

This documentation covers:

- **Getting Started:** Installation, configuration, and quickstart guides
- **Authentication:** OAuth 2.0 setup, token management, and client credentials
- **Core Features:** Inventory management, order fulfillment, marketing, analytics
- **MCP Integration:** Claude Desktop, Cursor, and other MCP clients
- **API Reference:** Complete documentation of all 230+ eBay tools
- **Advanced Topics:** Architecture, testing, contributing, and best practices
- **Support:** Troubleshooting, FAQ, and changelog

## 🎯 Project Stats

- **API Coverage:** 99.1% (110/111 eBay Sell API endpoints)
- **Tools Available:** 230+ eBay API tools
- **Test Coverage:** 870+ tests with 99%+ function coverage
- **Rate Limits:** 10,000-50,000 requests/day with user tokens
- **License:** Apache 2.0
- **Technology:** TypeScript, Node.js 18+, MCP SDK 1.21.1

## 🛠️ Documentation Development

This documentation is built with [Mintlify](https://mintlify.com), a modern documentation platform optimized for developer experience and AI integration.

### Local Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify):

```bash
npm install -g mintlify
```

Preview the documentation locally:

```bash
cd ebay-mcp-docs
mintlify dev
```

The documentation will be available at `http://localhost:3000`.

### Project Structure

```
ebay-mcp-docs/
├── docs.json                  # Mintlify configuration
├── index.mdx                  # Homepage
├── quickstart.mdx             # Quick start guide
├── installation.mdx           # Installation guide
├── configuration.mdx          # Configuration guide
├── llms.txt                   # AI optimization (2025 best practice)
├── CLAUDE.md                  # Claude Code context file
├── authentication/            # Auth documentation
│   ├── overview.mdx
│   ├── oauth-setup.mdx
│   ├── token-management.mdx
│   └── client-credentials.mdx
├── features/                  # Feature guides
│   ├── inventory-management.mdx
│   ├── order-fulfillment.mdx
│   ├── marketing-campaigns.mdx
│   ├── analytics-reporting.mdx
│   └── account-management.mdx
├── guides/                    # Practical guides
│   ├── first-listing.mdx
│   ├── managing-orders.mdx
│   ├── running-promotions.mdx
│   ├── bulk-operations.mdx
│   └── best-practices.mdx
├── mcp/                       # MCP client integration
│   ├── claude-desktop.mdx
│   ├── cursor.mdx
│   └── other-clients.mdx
├── api-reference/             # API documentation
│   ├── introduction.mdx
│   ├── account/
│   ├── inventory/
│   ├── fulfillment/
│   ├── marketing/
│   └── analytics/
├── advanced/                  # Advanced topics
│   ├── architecture.mdx
│   ├── error-handling.mdx
│   ├── rate-limits.mdx
│   ├── testing.mdx
│   └── contributing.mdx
└── support/                   # Support resources
    ├── troubleshooting.mdx
    ├── faq.mdx
    └── changelog.mdx
```

## 🎨 Documentation Features

### Mintlify Components

This documentation uses Mintlify's rich component library:

- **Cards & Card Groups:** Feature showcases and navigation
- **Steps:** Sequential procedures and guides
- **Accordions:** Collapsible supplementary content
- **Tabs:** Alternative approaches or platforms
- **Callouts:** Notes, Tips, Warnings, Info boxes
- **Code Groups:** Multi-language code examples
- **Frames:** Styled images and screenshots

### AI Optimization (2025)

Following Mintlify's 2025 best practices:

- **llms.txt:** Prioritized content for AI ingestion
- **MCP Server Ready:** Auto-generated MCP servers for API docs
- **Contextual Options:** Copy, view, ChatGPT, Claude, Perplexity, MCP, Cursor, VSCode
- **Semantic Structure:** Optimized for LLM understanding

### Accessibility

- Comprehensive ARIA attributes
- Keyboard navigation support
- Screen reader optimization
- Descriptive alt text on all images
- Skip to main content functionality

## 📝 Contributing to Documentation

### Writing Guidelines

1. **Voice:** Second-person ("you"), active voice, conversational but professional
2. **Structure:** Prerequisites first, progressive disclosure, clear headings
3. **Code Examples:** Test all examples, include language tags, provide realistic values
4. **Visual Content:** Alt text on all images, relative paths for internal links
5. **Components:** Use Mintlify components appropriately (see CLAUDE.md)

### Before Submitting

- [ ] Frontmatter complete (title, description)
- [ ] No broken links
- [ ] All code examples tested
- [ ] Code blocks have language tags
- [ ] Images have alt text
- [ ] Callouts used appropriately
- [ ] Cross-references included
- [ ] Spell-checked and proofread

### Documentation Standards

See [CLAUDE.md](CLAUDE.md) for comprehensive documentation guidelines including:

- Content strategy and organization
- Writing standards and style guide
- Component usage patterns
- Git workflow and commit messages
- Quality checklist

## 🔍 Validating Documentation

### Check for Broken Links

```bash
mintlify broken-links
```

### Build Test

```bash
mintlify dev
```

Navigate through all pages to verify:
- All links work
- All images load
- All code blocks render correctly
- Navigation is intuitive

## 🚀 Deployment

This documentation is configured for automatic deployment via Mintlify's GitHub integration.

### Setup Deployment

1. Install the Mintlify GitHub app from your [dashboard](https://dashboard.mintlify.com/settings/organization/github-app)
2. Push changes to the `main` branch
3. Mintlify automatically builds and deploys

### Manual Deployment

If you prefer manual deployment:

1. Connect your repository in the [Mintlify dashboard](https://dashboard.mintlify.com)
2. Configure your deployment settings
3. Push to deploy

## 🎯 SEO & Metadata

### Search Optimization

- Clear, descriptive page titles
- Concise meta descriptions (50-160 characters)
- Keyword-rich headings
- Semantic HTML structure
- Fast page load times

### Social Sharing

Configure in `docs.json`:
- Open Graph tags
- Twitter cards
- Favicon and logo
- Brand colors

## 🆘 Need Help?

### Documentation Issues

- **Broken Link?** Run `mintlify broken-links`
- **Dev Server Won't Start?** Run `mintlify update`
- **Page Shows 404?** Verify `docs.json` navigation

### Resources

- **Mintlify Documentation:** [mintlify.com/docs](https://mintlify.com/docs)
- **Mintlify Community:** [mintlify.com/community](https://mintlify.com/community)
- **Report Documentation Issues:** [GitHub Issues](https://github.com/YosefHayim/ebay-mcp-docs/issues)

### eBay MCP Server Questions

For questions about the eBay MCP Server itself (not the documentation):

- **GitHub Issues:** [github.com/YosefHayim/ebay-mcp-server/issues](https://github.com/YosefHayim/ebay-mcp-server/issues)
- **Discussions:** [github.com/YosefHayim/ebay-mcp-server/discussions](https://github.com/YosefHayim/ebay-mcp-server/discussions)

## 📄 License

This documentation is part of the eBay MCP Server project and is licensed under Apache 2.0.

## 🙏 Acknowledgments

Built with:
- [Mintlify](https://mintlify.com) - Documentation platform
- [MDX](https://mdxjs.com/) - Markdown with React components
- [eBay Developer Program](https://developer.ebay.com) - API access

---

**Made with ❤️ for the eBay developer community**
