# Deployment Guide

This document explains how to deploy the eBay MCP Server documentation and troubleshoot common issues.

## 🚀 Quick Deployment

The documentation is configured to deploy automatically to **https://ebaymcp.com** via Mintlify's GitHub integration.

### Prerequisites

1. **Mintlify Account** - Sign up at [mintlify.com](https://mintlify.com)
2. **GitHub App Installed** - Install from [Mintlify Dashboard](https://dashboard.mintlify.com/settings/organization/github-app)
3. **Domain Configured** - Point ebaymcp.com to Mintlify (see below)

### Automatic Deployment

1. Push changes to `main` branch
2. Mintlify automatically detects changes
3. Validates `docs.json`
4. Builds and deploys documentation
5. Live at https://ebaymcp.com within minutes

## 🔍 Pre-Deployment Validation

**Always validate locally before pushing** to avoid deployment failures.

### Option 1: Local Validation Script (Recommended)

```bash
# Make script executable (first time only)
chmod +x validate-local.sh

# Run validation
./validate-local.sh
```

**What it checks:**
- ✅ JSON syntax in `docs.json`
- ✅ Mintlify schema compliance
- ✅ MDX frontmatter (title, description)
- ✅ Code blocks have language tags
- ✅ Broken links (if Mintlify CLI installed)

**Output:**
- 🟢 Green = Success
- 🟡 Yellow = Warnings (won't block deployment)
- 🔴 Red = Errors (will block deployment)

### Option 2: GitHub Actions

Validation runs automatically on:
- Every push to `main`
- Every push to `claude/**` branches
- Every pull request

View results in the **Actions** tab on GitHub.

## ⚙️ Domain Configuration

### DNS Setup

Point your domain to Mintlify:

1. Go to [Mintlify Dashboard](https://dashboard.mintlify.com)
2. Navigate to **Settings** → **Custom Domain**
3. Add `ebaymcp.com`
4. Follow DNS configuration instructions:
   - **CNAME Record:** `ebaymcp.com` → `cname.mintlify.com`
   - **Or A Record:** Point to Mintlify IP addresses

5. Wait for DNS propagation (up to 48 hours, usually minutes)

### Verify Domain

```bash
# Check DNS propagation
dig ebaymcp.com

# Check if site is live
curl -I https://ebaymcp.com
```

## 🐛 Common Deployment Errors

### Error: Invalid docs.json

**Error Message:**
```
#.colors: Unrecognized key(s) in object: 'background', 'anchors'
```

**Cause:** Nested objects in `colors` (not supported by Mintlify)

**Fix:**
```json
{
  "colors": {
    "primary": "#E53238",
    "light": "#F5AF02",
    "dark": "#0064D2"
    // ❌ DON'T add: background, anchors, or other nested objects
  }
}
```

Only `primary`, `light`, and `dark` are supported.

---

**Error Message:**
```
#.navbar.primary.href: Must be a valid url
```

**Cause:** Relative URL in navbar

**Fix:**
```json
{
  "navbar": {
    "primary": {
      "href": "https://ebaymcp.com/quickstart"  // ✅ Absolute URL
      // ❌ NOT: "/quickstart"
    }
  }
}
```

---

**Error Message:**
```
#.theme: Invalid discriminator value. Expected 'mint' | 'maple' | 'palm'...
```

**Cause:** Invalid theme name

**Fix:**
```json
{
  "theme": "mint"  // ✅ Valid Mintlify theme
  // ❌ NOT: "venus" or custom themes
}
```

Valid themes: `mint`, `maple`, `palm`, `willow`, `linden`, `almond`, `aspen`

### Error: Missing Frontmatter

**Error Message:**
```
Page has no title
```

**Cause:** MDX file missing frontmatter

**Fix:**
```mdx
---
title: "Page Title Here"
description: "Page description for SEO (50-160 characters)"
---

# Your Content Here
```

**Every MDX file must have:**
- `title` - Page title
- `description` - SEO description

### Error: Broken Links

**Error Message:**
```
Broken link: /path/to/page
```

**Cause:** Link to non-existent page

**Fix:**
1. Check the page exists
2. Verify the path is correct
3. Use relative paths for internal links: `/quickstart` not `https://ebaymcp.com/quickstart`
4. Check `docs.json` navigation includes the page

**Detect broken links:**
```bash
# Install Mintlify CLI
npm install -g mintlify

# Check for broken links
mintlify broken-links
```

## 🔧 Troubleshooting

### Deployment Stuck/Failed

**Check deployment logs:**
1. Go to [Mintlify Dashboard](https://dashboard.mintlify.com)
2. Click on your project
3. View **Deployments** tab
4. Click on failed deployment for details

**Common fixes:**
1. **Validate locally first:**
   ```bash
   ./validate-local.sh
   ```

2. **Check GitHub Actions:**
   - View the **Actions** tab
   - Look for validation errors

3. **Re-trigger deployment:**
   ```bash
   git commit --allow-empty -m "Trigger deployment"
   git push origin main
   ```

### Changes Not Appearing

**Possible causes:**

1. **Cache:** Clear browser cache or try incognito mode
2. **CDN Delay:** Wait 2-5 minutes for CDN to update
3. **Deployment Failed:** Check Mintlify dashboard
4. **Wrong Branch:** Ensure you pushed to `main` branch

**Force refresh:**
- **Chrome/Firefox:** `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- **Safari:** `Cmd+Option+R`

### Preview Not Working Locally

**Error: `mintlify: command not found`**

**Fix:**
```bash
npm install -g mintlify
```

**Error: `Port 3000 already in use`**

**Fix:**
```bash
# Use different port
mintlify dev --port 3001

# Or kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Error: `Could not load the "sharp" module`**

**Fix:**
```bash
# Remove and reinstall Mintlify
npm remove -g mintlify
npm install -g mintlify
```

## 📝 Best Practices

### Before Every Deploy

1. ✅ **Validate locally:**
   ```bash
   ./validate-local.sh
   ```

2. ✅ **Preview locally:**
   ```bash
   mintlify dev
   ```

3. ✅ **Test navigation:**
   - Click through all links
   - Verify all pages load
   - Check mobile responsiveness

4. ✅ **Review changes:**
   ```bash
   git diff
   ```

5. ✅ **Write clear commit message:**
   ```bash
   git commit -m "docs: clear description of changes"
   ```

### After Deploy

1. ✅ **Verify live site:**
   - Visit https://ebaymcp.com
   - Test search functionality
   - Check all modified pages

2. ✅ **Check deployment status:**
   - View Mintlify dashboard
   - Confirm successful deployment

3. ✅ **Monitor for errors:**
   - Check browser console
   - Test on different devices/browsers

## 🚦 Deployment Checklist

Before deploying major changes:

- [ ] All validation checks pass (`./validate-local.sh`)
- [ ] Preview works locally (`mintlify dev`)
- [ ] No broken links (`mintlify broken-links`)
- [ ] All frontmatter complete
- [ ] Code examples tested
- [ ] Screenshots updated (if applicable)
- [ ] CHANGELOG.md updated
- [ ] Version number bumped (if applicable)
- [ ] Team reviewed changes
- [ ] Staging tested (if available)

## 🔗 Useful Links

- **Mintlify Dashboard:** https://dashboard.mintlify.com
- **Mintlify Documentation:** https://mintlify.com/docs
- **Live Docs:** https://ebaymcp.com
- **GitHub Repository:** https://github.com/YosefHayim/ebay-mcp-docs
- **Issue Tracker:** https://github.com/YosefHayim/ebay-mcp-docs/issues

## 🆘 Getting Help

### Documentation Issues

1. **Search existing issues:** [GitHub Issues](https://github.com/YosefHayim/ebay-mcp-docs/issues)
2. **Ask in discussions:** [GitHub Discussions](https://github.com/YosefHayim/ebay-mcp-docs/discussions)
3. **Create new issue:** Use our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)

### Mintlify Support

- **Documentation:** https://mintlify.com/docs
- **Community:** https://mintlify.com/community
- **Support:** Contact via Mintlify dashboard

## 📊 Monitoring

### Analytics

View documentation analytics:
1. Configure Google Analytics in `docs.json`:
   ```json
   {
     "analytics": {
       "ga4": {
         "measurementId": "G-XXXXXXXXXX"
       }
     }
   }
   ```

2. View reports in Google Analytics dashboard

### Performance

Monitor performance:
- **Mintlify Dashboard:** Built-in analytics
- **Google PageSpeed Insights:** https://pagespeed.web.dev
- **GTmetrix:** https://gtmetrix.com

## 🔄 Rollback

If deployment causes issues:

1. **Revert commit:**
   ```bash
   git revert HEAD
   git push origin main
   ```

2. **Or reset to previous commit:**
   ```bash
   git reset --hard <previous-commit-hash>
   git push origin main --force
   ```

3. **Wait for automatic redeployment**

## ✅ Success Indicators

Your deployment is successful when:

- ✅ Mintlify shows "Deployment Successful" in dashboard
- ✅ https://ebaymcp.com loads without errors
- ✅ All pages are accessible
- ✅ Search works
- ✅ No console errors
- ✅ Mobile view works
- ✅ Dark mode works

---

**Last Updated:** 2025-01-16

For questions or issues, please open a [GitHub Discussion](https://github.com/YosefHayim/ebay-mcp-docs/discussions).
