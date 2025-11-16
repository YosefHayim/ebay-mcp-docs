# eBay MCP Server Documentation

<div align="center">

[![Live Docs](https://img.shields.io/badge/docs-ebaymcp.com-E53238?style=for-the-badge)](https://ebaymcp.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/YosefHayim/ebay-mcp-server)
[![License](https://img.shields.io/badge/License-Apache%202.0-0064D2?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-86B817?style=for-the-badge)](CONTRIBUTING.md)

**Comprehensive documentation for the eBay MCP Server** - A Model Context Protocol implementation that provides AI assistants with full access to eBay's Sell APIs through 230+ tools.

[**View Live Docs →**](https://ebaymcp.com) | [**Quickstart**](https://ebaymcp.com/quickstart) | [**Contribute**](CONTRIBUTING.md)

</div>

---

## ⚠️ Disclaimer

> **Independent Open Source Project**
>
> This is an independent, community-driven open source project created to contribute to the eBay developer community. We do not claim ownership of eBay, its APIs, trademarks, or any related intellectual property. All eBay-related trademarks, service marks, and intellectual property belong to eBay Inc.
>
> This project is **not affiliated with, endorsed by, or officially connected to eBay Inc.** in any way. We are developers who built this tool to help the community interact with eBay's publicly available APIs using the Model Context Protocol.
>
> Use of eBay's APIs is subject to eBay's [Developer Program Terms](https://developer.ebay.com/join/api_license_agreement) and [API License Agreement](https://developer.ebay.com/join/api_license_agreement).

---

## 📖 View the Documentation

### 🌐 Online (Recommended)

Visit **[ebaymcp.com](https://ebaymcp.com)** to browse the complete documentation with:
- ✅ Full search functionality
- ✅ Dark/light mode
- ✅ Mobile-optimized layout
- ✅ AI-powered contextual help
- ✅ Interactive code examples

### 💻 Locally

Preview the documentation on your machine:

```bash
# Install Mintlify CLI
npm install -g mintlify

# Clone this repository
git clone https://github.com/YosefHayim/ebay-mcp-docs.git
cd ebay-mcp-docs

# Start local server
mintlify dev
```

Open http://localhost:3000 in your browser.

## 🚀 Quick Links

| Resource | Description | Link |
|----------|-------------|------|
| **📚 Live Docs** | Complete documentation site | [ebaymcp.com](https://ebaymcp.com) |
| **🚀 Quickstart** | Get started in 10 minutes | [View Guide](https://ebaymcp.com/quickstart) |
| **💻 Server Repo** | eBay MCP Server source code | [GitHub](https://github.com/YosefHayim/ebay-mcp-server) |
| **🤝 Contribute** | Help improve the docs | [Contributing Guide](CONTRIBUTING.md) |
| **🛡️ Security** | Report security issues | [Security Policy](SECURITY.md) |
| **📜 Code of Conduct** | Community guidelines | [View Code of Conduct](CODE_OF_CONDUCT.md) |

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

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

- 📝 **Fix typos or improve clarity** - Small improvements make a big difference
- 🐛 **Report bugs** - Found broken links or errors? Let us know
- ✨ **Add examples** - Share your use cases and code examples
- 🌍 **Translate** - Help make docs accessible in other languages
- 🎨 **Improve design** - Enhance UI/UX or accessibility
- 📚 **Write new content** - Add missing documentation

### Quick Start for Contributors

1. **Fork this repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ebay-mcp-docs.git
   cd ebay-mcp-docs
   ```
3. **Install Mintlify** and preview locally:
   ```bash
   npm install -g mintlify
   mintlify dev
   ```
4. **Make your changes** and test locally
5. **Submit a Pull Request** with a clear description

### Documentation Guidelines

📖 **Read our guides before contributing:**
- [**CONTRIBUTING.md**](CONTRIBUTING.md) - Complete contribution guide
- [**CLAUDE.md**](CLAUDE.md) - Detailed writing and style guidelines
- [**BRANDING.md**](BRANDING.md) - Brand colors and design system
- [**CODE_OF_CONDUCT.md**](CODE_OF_CONDUCT.md) - Community standards

### Quality Checklist

Before submitting your PR:

- [ ] Followed style guide in [CLAUDE.md](CLAUDE.md)
- [ ] Added/updated frontmatter (title, description)
- [ ] Tested all code examples
- [ ] Checked for broken links (`mintlify broken-links`)
- [ ] Previewed changes locally
- [ ] Added screenshots for visual changes
- [ ] Spell-checked and proofread

### Issue Templates

Use our templates when reporting issues:
- [🐛 Bug Report](.github/ISSUE_TEMPLATE/bug_report.md)
- [📚 Documentation Request](.github/ISSUE_TEMPLATE/documentation_request.md)

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

## 🎓 AI Integration Guides

Learn how to use eBay MCP Server with popular AI assistants:

| AI Assistant | Guide | Features |
|--------------|-------|----------|
| **Claude** | [claude.md](claude.md) | Native MCP support, 200K context, exceptional reasoning |
| **Google Gemini** | [gemini.md](gemini.md) | Multi-modal, vision capabilities, cost-effective |
| **Cursor IDE** | [ebaymcp.com/mcp/cursor](https://ebaymcp.com/mcp/cursor) | AI-first code editor integration |
| **Claude Desktop** | [ebaymcp.com/mcp/claude-desktop](https://ebaymcp.com/mcp/claude-desktop) | Desktop app with built-in MCP |

## 🆘 Need Help?

### 📚 Documentation Questions

- 🌐 **Browse Docs:** [ebaymcp.com](https://ebaymcp.com)
- 🔍 **Search:** Use the search bar on the docs site
- ❓ **FAQ:** [Support FAQ](https://ebaymcp.com/support/faq)
- 🛠️ **Troubleshooting:** [Common Issues](https://ebaymcp.com/support/troubleshooting)

### 🐛 Report Issues

- **Documentation bugs:** [Create issue](.github/ISSUE_TEMPLATE/bug_report.md)
- **Feature requests:** [Create issue](.github/ISSUE_TEMPLATE/documentation_request.md)
- **Security concerns:** [Security Policy](SECURITY.md)

### 💬 Get Support

- **Documentation Questions:** [GitHub Discussions](https://github.com/YosefHayim/ebay-mcp-docs/discussions)
- **Server Issues:** [Server Repository](https://github.com/YosefHayim/ebay-mcp-server/issues)

### ⚡ Quick Fixes

- **Broken Link?** Run `mintlify broken-links`
- **Dev Server Won't Start?** Run `npm install -g mintlify@latest`
- **Page Shows 404?** Check `docs.json` navigation

### 🔗 Resources

- **Mintlify Docs:** [mintlify.com/docs](https://mintlify.com/docs)
- **MCP Specification:** [modelcontextprotocol.io](https://modelcontextprotocol.io)
- **eBay Developer Portal:** [developer.ebay.com](https://developer.ebay.com)

## 📊 Repository Stats

![GitHub Stars](https://img.shields.io/github/stars/YosefHayim/ebay-mcp-docs?style=social)
![GitHub Forks](https://img.shields.io/github/forks/YosefHayim/ebay-mcp-docs?style=social)
![GitHub Issues](https://img.shields.io/github/issues/YosefHayim/ebay-mcp-docs)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/YosefHayim/ebay-mcp-docs)
![Contributors](https://img.shields.io/github/contributors/YosefHayim/ebay-mcp-docs)

## 📄 License

This documentation is part of the eBay MCP Server project and is licensed under the **Apache License 2.0**.

See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### Built With

- **[Mintlify](https://mintlify.com)** - Modern documentation platform
- **[MDX](https://mdxjs.com/)** - Markdown with React components
- **[eBay Developer Program](https://developer.ebay.com)** - API access and support

### Contributors

Thank you to all our contributors! 🎉

<a href="https://github.com/YosefHayim/ebay-mcp-docs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=YosefHayim/ebay-mcp-docs" />
</a>

### Special Thanks

- The eBay Developer Relations team for API support
- The Model Context Protocol community
- All users who reported issues and suggested improvements

## 🌟 Star History

If you find this documentation helpful, please consider giving us a star! ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=YosefHayim/ebay-mcp-docs&type=Date)](https://star-history.com/#YosefHayim/ebay-mcp-docs&Date)

---

<div align="center">

**Made with ❤️ for the eBay developer community**

[📚 View Docs](https://ebaymcp.com) • [🐛 Report Bug](https://github.com/YosefHayim/ebay-mcp-docs/issues) • [✨ Request Feature](https://github.com/YosefHayim/ebay-mcp-docs/issues) • [🤝 Contribute](CONTRIBUTING.md)

</div>
