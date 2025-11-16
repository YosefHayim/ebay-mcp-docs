# Support

Thank you for using the eBay MCP Server! This document provides guidance on how to get help and support.

## 📚 Documentation

Before asking for help, please check our comprehensive documentation:

- **[Documentation Site](https://ebaymcp.com)** - Complete documentation with search functionality
- **[Quickstart Guide](https://ebaymcp.com/quickstart)** - Get started in 10 minutes
- **[FAQ](https://ebaymcp.com/support/faq)** - Frequently asked questions
- **[Troubleshooting](https://ebaymcp.com/support/troubleshooting)** - Common issues and solutions
- **[API Reference](https://ebaymcp.com/api-reference/introduction)** - Complete tool documentation

## 🐛 Reporting Issues

### Bug Reports

If you've found a bug, please help us fix it by:

1. **Search existing issues** - Check if it's already reported
2. **Use the bug report template** - [Create a bug report](https://github.com/YosefHayim/ebay-mcp-server/issues/new?template=bug_report.md)
3. **Provide details:**
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs. actual behavior
   - Your environment (OS, Node.js version, MCP client)
   - Relevant logs or error messages
   - Screenshots if applicable

**Important:** Never include sensitive information like API keys, tokens, or personal data in bug reports.

### Documentation Issues

Found a problem with the documentation?

1. Check the [documentation repository](https://github.com/YosefHayim/ebay-mcp-docs)
2. Use the [documentation request template](https://github.com/YosefHayim/ebay-mcp-docs/issues/new?template=documentation_request.md)
3. Or suggest edits directly via the "Suggest Edits" button on any docs page

## 💡 Feature Requests

Have an idea for a new feature?

1. **Check existing requests** - See if someone already suggested it
2. **Create a feature request** - [Request a feature](https://github.com/YosefHayim/ebay-mcp-server/issues/new?template=feature_request.md)
3. **Describe:**
   - The problem you're trying to solve
   - Your proposed solution
   - Alternative solutions you've considered
   - Why this would benefit other users

## 💬 Community Support

### GitHub Discussions

For questions, ideas, and general discussion:

- **[GitHub Discussions](https://github.com/YosefHayim/ebay-mcp-server/discussions)** - Ask questions, share tips, discuss ideas
- **[Show and Tell](https://github.com/YosefHayim/ebay-mcp-server/discussions/categories/show-and-tell)** - Share what you've built
- **[Q&A](https://github.com/YosefHayim/ebay-mcp-server/discussions/categories/q-a)** - Get help from the community

### Best Practices for Asking Questions

To get the best help:

1. **Be specific** - Describe what you're trying to accomplish
2. **Show what you've tried** - Include code snippets, commands, or configurations
3. **Include context** - Your setup, environment, and relevant details
4. **Be patient** - This is a community project maintained by volunteers
5. **Give back** - Help others when you can!

## 🔒 Security Issues

**DO NOT** report security vulnerabilities through public GitHub issues.

Instead:

1. Review our [Security Policy](SECURITY.md)
2. Report security issues privately to the maintainers
3. See [SECURITY.md](SECURITY.md) for detailed instructions

We take security seriously and will respond promptly to legitimate security concerns.

## 📧 Direct Contact

For sensitive matters that can't be discussed publicly:

- **Security issues:** Follow the process in [SECURITY.md](SECURITY.md)
- **Private inquiries:** Use GitHub's private vulnerability reporting feature

**Note:** For general questions, please use GitHub Discussions or Issues so the community can benefit from the answers.

## 🚀 Getting Help Quickly

### Quick Troubleshooting Steps

Before asking for help, try these steps:

1. **Check your version:**
   ```bash
   cd ebay-mcp-server
   cat package.json | grep version
   ```

2. **Update to the latest version:**
   ```bash
   git pull origin main
   npm install
   npm run build
   ```

3. **Verify your configuration:**
   ```bash
   npm run validate-config
   ```

4. **Check the logs:**
   - Look for error messages in your MCP client
   - Review the server output for issues

5. **Test with Sandbox:**
   - Always test in eBay's Sandbox environment first
   - Verify credentials are correct for the environment

### Common Issues

Check these resources for quick solutions:

- **[Rate Limits](https://ebaymcp.com/advanced/rate-limits)** - Understanding and handling rate limits
- **[OAuth Setup](https://ebaymcp.com/authentication/oauth-setup)** - Complete OAuth configuration guide
- **[Environment Configuration](https://ebaymcp.com/configuration)** - Setting up your environment

## 🤝 Contributing

Want to help improve the project?

- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute code or documentation
- **[Code of Conduct](CODE_OF_CONDUCT.md)** - Community guidelines
- **[Development Setup](https://ebaymcp.com/advanced/contributing)** - Getting started with development

## 📖 Additional Resources

### eBay Developer Resources

- **[eBay Developer Portal](https://developer.ebay.com)** - Official eBay API documentation
- **[eBay API Support](https://developer.ebay.com/support)** - eBay's official support
- **[eBay Developer Program](https://developer.ebay.com/develop/get-started)** - Getting started with eBay APIs

### MCP Resources

- **[Model Context Protocol](https://modelcontextprotocol.io)** - MCP specification and documentation
- **[MCP Servers](https://github.com/modelcontextprotocol/servers)** - Official MCP server examples

## 🙏 Thank You

Thank you for using the eBay MCP Server and being part of our community! Your feedback, bug reports, and contributions help make this project better for everyone.

---

**Quick Links:**
- [Documentation](https://ebaymcp.com) | [GitHub](https://github.com/YosefHayim/ebay-mcp-server) | [Discussions](https://github.com/YosefHayim/ebay-mcp-server/discussions) | [Issues](https://github.com/YosefHayim/ebay-mcp-server/issues)
