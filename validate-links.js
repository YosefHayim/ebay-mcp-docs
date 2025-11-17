#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Find all MDX files
const mdxFiles = [
  '/home/user/ebay-mcp-docs/quickstart.mdx',
  '/home/user/ebay-mcp-docs/installation.mdx',
  '/home/user/ebay-mcp-docs/configuration.mdx',
  '/home/user/ebay-mcp-docs/index.mdx',
  '/home/user/ebay-mcp-docs/support/faq.mdx',
  '/home/user/ebay-mcp-docs/support/troubleshooting.mdx',
  '/home/user/ebay-mcp-docs/support/changelog.mdx',
  '/home/user/ebay-mcp-docs/snippets/snippet-intro.mdx',
  '/home/user/ebay-mcp-docs/mcp/other-clients.mdx',
  '/home/user/ebay-mcp-docs/mcp/cursor.mdx',
  '/home/user/ebay-mcp-docs/mcp/claude-desktop.mdx',
  '/home/user/ebay-mcp-docs/guides/running-promotions.mdx',
  '/home/user/ebay-mcp-docs/guides/managing-orders.mdx',
  '/home/user/ebay-mcp-docs/guides/best-practices.mdx',
  '/home/user/ebay-mcp-docs/guides/bulk-operations.mdx',
  '/home/user/ebay-mcp-docs/guides/first-listing.mdx',
  '/home/user/ebay-mcp-docs/features/order-fulfillment.mdx',
  '/home/user/ebay-mcp-docs/features/marketing-campaigns.mdx',
  '/home/user/ebay-mcp-docs/features/inventory-management.mdx',
  '/home/user/ebay-mcp-docs/features/analytics-reporting.mdx',
  '/home/user/ebay-mcp-docs/features/account-management.mdx',
  '/home/user/ebay-mcp-docs/authentication/token-management.mdx',
  '/home/user/ebay-mcp-docs/authentication/overview.mdx',
  '/home/user/ebay-mcp-docs/authentication/oauth-setup.mdx',
  '/home/user/ebay-mcp-docs/authentication/client-credentials.mdx',
  '/home/user/ebay-mcp-docs/api-reference/introduction.mdx',
  '/home/user/ebay-mcp-docs/advanced/testing.mdx',
  '/home/user/ebay-mcp-docs/advanced/rate-limits.mdx',
  '/home/user/ebay-mcp-docs/advanced/error-handling.mdx',
  '/home/user/ebay-mcp-docs/advanced/contributing.mdx',
  '/home/user/ebay-mcp-docs/advanced/architecture.mdx',
  '/home/user/ebay-mcp-docs/api-reference/marketing/promotions.mdx',
  '/home/user/ebay-mcp-docs/api-reference/marketing/overview.mdx',
  '/home/user/ebay-mcp-docs/api-reference/marketing/campaigns.mdx',
  '/home/user/ebay-mcp-docs/api-reference/fulfillment/shipping.mdx',
  '/home/user/ebay-mcp-docs/api-reference/fulfillment/overview.mdx',
  '/home/user/ebay-mcp-docs/api-reference/fulfillment/orders.mdx',
  '/home/user/ebay-mcp-docs/api-reference/inventory/overview.mdx',
  '/home/user/ebay-mcp-docs/api-reference/inventory/offers.mdx',
  '/home/user/ebay-mcp-docs/api-reference/inventory/locations.mdx',
  '/home/user/ebay-mcp-docs/api-reference/inventory/items.mdx',
  '/home/user/ebay-mcp-docs/api-reference/analytics/overview.mdx',
  '/home/user/ebay-mcp-docs/api-reference/analytics/traffic-reports.mdx',
  '/home/user/ebay-mcp-docs/api-reference/account/programs.mdx',
  '/home/user/ebay-mcp-docs/api-reference/account/policies.mdx',
  '/home/user/ebay-mcp-docs/api-reference/account/overview.mdx'
];

const baseDir = '/home/user/ebay-mcp-docs';
const brokenLinks = [];
let totalLinks = 0;
let validLinks = 0;

// Patterns to ignore
const shouldIgnoreLink = (link) => {
  if (!link) return true;
  if (link.startsWith('http://') || link.startsWith('https://')) return true;
  if (link.startsWith('#')) return true;
  if (link.startsWith('/images/') || link.startsWith('/logo/')) return true;
  if (link.includes('/favicon.')) return true;
  if (link.startsWith('mailto:')) return true;
  return false;
};

// Extract links from content
const extractLinks = (content, filePath) => {
  const links = [];
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    // Match markdown links: [text](/path)
    const mdRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    while ((match = mdRegex.exec(line)) !== null) {
      const link = match[2];
      if (!shouldIgnoreLink(link)) {
        links.push({ link, lineNumber, filePath });
      }
    }

    // Match href attributes: href="/path"
    const hrefRegex = /href=["']([^"']+)["']/g;
    while ((match = hrefRegex.exec(line)) !== null) {
      const link = match[1];
      if (!shouldIgnoreLink(link)) {
        links.push({ link, lineNumber, filePath });
      }
    }
  });

  return links;
};

// Convert link path to file path
const linkToFilePath = (link) => {
  // Handle root path
  if (link === '/') {
    return path.join(baseDir, 'index.mdx');
  }

  // Remove leading slash
  let cleanLink = link.startsWith('/') ? link.substring(1) : link;

  // Remove query strings and anchors
  cleanLink = cleanLink.split('?')[0].split('#')[0];

  // Handle empty string after cleanup
  if (cleanLink === '') {
    return path.join(baseDir, 'index.mdx');
  }

  // Add .mdx extension if not present
  if (!cleanLink.endsWith('.mdx')) {
    cleanLink += '.mdx';
  }

  return path.join(baseDir, cleanLink);
};

// Validate all links
console.log('Scanning MDX files for internal links...\n');

mdxFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const links = extractLinks(content, filePath);

    links.forEach(({ link, lineNumber, filePath: sourceFile }) => {
      totalLinks++;
      const targetPath = linkToFilePath(link);

      if (!fs.existsSync(targetPath)) {
        brokenLinks.push({
          sourceFile,
          lineNumber,
          link,
          expectedPath: targetPath
        });
      } else {
        validLinks++;
      }
    });
  } catch (err) {
    console.error(`Error reading ${filePath}: ${err.message}`);
  }
});

// Generate report
console.log('## Link Validation Report\n');
console.log('**Summary:**');
console.log(`- Total MDX files scanned: ${mdxFiles.length}`);
console.log(`- Total internal links found: ${totalLinks}`);
console.log(`- Valid links: ${validLinks}`);
console.log(`- Broken links: ${brokenLinks.length}\n`);

if (brokenLinks.length === 0) {
  console.log('✅ All internal links are valid!\n');
} else {
  console.log('**Broken Links:**\n');
  brokenLinks.forEach(({ sourceFile, lineNumber, link, expectedPath }) => {
    const relativeSource = sourceFile.replace(baseDir + '/', '');
    const relativeExpected = expectedPath.replace(baseDir + '/', '');
    console.log(`- **${relativeSource}:${lineNumber}**`);
    console.log(`  - Link: \`${link}\``);
    console.log(`  - Expected file: \`${relativeExpected}\``);
    console.log(`  - Status: File does not exist\n`);
  });
}

// Exit with error code if broken links found
process.exit(brokenLinks.length > 0 ? 1 : 0);
