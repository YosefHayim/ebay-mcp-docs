# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the documentation repository. The current version is always supported.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Reporting a Vulnerability

The eBay MCP Server Documentation team takes security bugs seriously. We appreciate your efforts to responsibly disclose your findings.

### Documentation Security Issues

For security issues related to the **documentation website** (not the eBay MCP Server itself):

1. **Do NOT** open a public GitHub issue
2. Email the maintainers privately (check repository for contact)
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### eBay MCP Server Security Issues

For security issues in the **eBay MCP Server** itself, please report to:
- https://github.com/YosefHayim/ebay-mcp-server/security

### What We Commit To

- Acknowledge your report within 48 hours
- Provide an estimated timeline for a fix
- Keep you informed of our progress
- Credit you in the fix (unless you prefer to remain anonymous)

## Security Best Practices for Users

### Protecting Your Credentials

When using the documentation examples:

**DO:**
- Use environment variables for sensitive data
- Store `.env` files securely (never commit to git)
- Use separate credentials for Sandbox and Production
- Rotate credentials regularly
- Use strong, unique passwords

**DON'T:**
- Hardcode credentials in examples you share
- Share your `.env` files publicly
- Use production credentials for testing
- Commit secrets to version control
- Share screenshots containing credentials

### Reporting Security Issues in Examples

If you find code examples in our documentation that:
- Expose credentials
- Demonstrate insecure practices
- Could lead to security vulnerabilities

Please report them immediately using the process above.

## Scope

This security policy covers:
- Documentation website vulnerabilities (XSS, injection, etc.)
- Insecure code examples
- Exposed credentials or secrets
- Authentication/authorization issues

This policy does NOT cover:
- eBay MCP Server code (report to server repository)
- eBay platform issues (report to eBay directly)
- Third-party dependencies (report to respective projects)

## Recognition

We maintain a Security Hall of Fame to recognize researchers who help us keep our documentation secure. If you'd like to be listed, please let us know when you submit your report.

Thank you for helping keep the eBay MCP Server Documentation safe!
