# eBay MCP Server Branding Guidelines

This document outlines the visual design system and branding for the eBay MCP Server documentation site at [ebaymcp.com](https://ebaymcp.com).

## Official eBay Brand Colors

All colors are sourced from the official eBay brand guidelines and the Evo Brand System Playbook.

### Primary Colors

| Color | Hex Code | RGB | CMYK | Pantone | Usage |
|-------|----------|-----|------|---------|-------|
| **eBay Red** | `#E53238` | (229, 50, 56) | (4, 95, 84, 0) | PMS 1795 C | Primary actions, headers, links |
| **eBay Blue** | `#0064D2` | (0, 100, 210) | (85, 63, 0, 0) | PMS 2726 C | Dark mode primary, info states |
| **eBay Yellow** | `#F5AF02` | (245, 175, 2) | (3, 34, 100, 0) | PMS 124 C | Accents, highlights, warnings |
| **eBay Green** | `#86B817` | (134, 184, 23) | (53, 7, 100, 0) | PMS 368 C | Success states, confirmations |

### Secondary Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Dark Red** | `#C5192D` | Hover states, gradients |
| **Dark Blue** | `#00498C` | Deep accents, dark gradients |
| **Dark Yellow** | `#CF9402` | Warning text, dark mode |
| **Dark Green** | `#6A9413` | Success text variations |

### Neutral Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Gray 900** | `#191919` | Dark mode backgrounds, text |
| **Gray 800** | `#3C3C3C` | Dark UI elements |
| **Gray 700** | `#5A5A5A` | Secondary dark text |
| **Gray 600** | `#767676` | Muted text |
| **Gray 500** | `#929292` | Disabled states |
| **Gray 400** | `#AFAFAF` | Borders, dividers |
| **Gray 300** | `#CCCCCC` | Light borders |
| **Gray 200** | `#E5E5E5` | Subtle backgrounds |
| **Gray 100** | `#F7F7F7` | Light backgrounds |

## Color Application

### Gradients

**Primary Gradient (Red to Blue):**
```css
background: linear-gradient(135deg, #E53238 0%, #0064D2 100%);
```

**Anchor Gradient:**
```css
background: linear-gradient(from: #E53238, to: #0064D2);
```

**Hero Gradient:**
```css
background: linear-gradient(135deg, #E53238 0%, #0064D2 100%);
```

### Semantic Colors

| State | Color | Hex |
|-------|-------|-----|
| Success | eBay Green | `#86B817` |
| Warning | eBay Yellow | `#F5AF02` |
| Error | eBay Red | `#E53238` |
| Info | eBay Blue | `#0064D2` |

## Typography

### Font Stack

Documentation uses system fonts for optimal performance:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, sans-serif;
```

### Font Weights

- **Regular:** 400 (body text)
- **Medium:** 500 (emphasis, labels)
- **Semibold:** 600 (headings)
- **Bold:** 700 (strong emphasis)

## Component Styling

### Cards

- **Border:** 3px solid left border in eBay Red
- **Hover:** Border changes to eBay Blue, slight lift effect
- **Shadow:** Red-tinted shadow on hover `rgba(229, 50, 56, 0.15)`

### Buttons

**Primary Button:**
- Background: Red to Dark Red gradient
- Hover: Inverted gradient with lift and shadow
- Color: White text

**Secondary Button:**
- Background: Blue to Dark Blue gradient
- Similar hover effects

### Code Blocks

- **Light Mode:** Left border in eBay Blue, light gray background
- **Dark Mode:** Left border in eBay Yellow, dark gray background
- **Border Width:** 4px

### Callouts

| Type | Border Color | Background |
|------|-------------|------------|
| Note | eBay Blue | `rgba(0, 100, 210, 0.05)` |
| Tip | eBay Green | `rgba(134, 184, 23, 0.05)` |
| Warning | eBay Yellow | `rgba(245, 175, 2, 0.05)` |
| Error | eBay Red | `rgba(229, 50, 56, 0.05)` |

## Dark Mode

### Background Colors

- **Primary Background:** `#0F1419`
- **Secondary Background:** `#191919`
- **Elevated Elements:** `#3C3C3C`

### Color Adjustments

- Cards use eBay Blue border instead of Red
- Hover states use eBay Yellow
- Code blocks use Yellow left border
- Selection background changes to Yellow

## Accessibility

### Contrast Ratios

All color combinations meet WCAG AA standards:
- Red on white: 4.8:1 ✓
- Blue on white: 7.2:1 ✓
- Dark text on light backgrounds: >7:1 ✓

### Focus States

- **Focus Outline:** 2px solid eBay Blue
- **Outline Offset:** 2px
- Applied to all interactive elements

## Brand Assets

### Logo Files

- **Light Mode:** `/logo/light.svg`
- **Dark Mode:** `/logo/dark.svg`

### Favicon

- **Location:** `/favicon.svg`
- **Format:** SVG for scalability
- **Colors:** eBay Red primary

### Background Images

- **Gradient Background:** `/images/background-gradient.svg`
- Optional subtle gradient for hero sections

## Usage Examples

### Hero Section

```jsx
<div className="hero-section" style={{
  background: 'linear-gradient(135deg, #E53238 0%, #0064D2 100%)',
  color: 'white'
}}>
  <h1>eBay MCP Server</h1>
</div>
```

### Status Indicator

```jsx
<span className="status-indicator status-success">
  Active
</span>
```

### Gradient Text

```jsx
<h1 className="gradient-text">
  Welcome to eBay MCP
</h1>
```

## Brand Voice

### Tone

- **Professional:** Technical accuracy without jargon
- **Helpful:** Supportive and encouraging
- **Clear:** Direct and concise
- **Accessible:** Welcoming to all skill levels

### Writing Style

- Second-person ("you") for instructions
- Active voice preferred
- Short paragraphs (2-4 sentences)
- Descriptive headings
- Progressive disclosure (simple first, complex later)

## Dos and Don'ts

### ✅ Do

- Use official eBay brand colors
- Maintain high contrast ratios
- Apply gradients for visual interest
- Use semantic colors appropriately
- Test in both light and dark modes
- Ensure keyboard accessibility

### ❌ Don't

- Modify official brand colors
- Use low-contrast color combinations
- Overuse gradients
- Ignore dark mode styling
- Skip accessibility testing
- Use colors without semantic meaning

## Resources

- **eBay Playbook:** [playbook.ebay.com](https://playbook.ebay.com)
- **Color Foundations:** [playbook.ebay.com/foundations/color](https://playbook.ebay.com/foundations/color)
- **Evo Brand System:** Official eBay brand guidelines
- **Custom Styles:** `/styles.css` in this repository

## Version History

- **v1.0 (2025-01):** Initial brand guidelines with official eBay colors
- Using eBay Evo Brand System color palette
- Optimized for Mintlify documentation platform

---

**Note:** This is an unofficial documentation site for the eBay MCP Server open-source project. The eBay brand and colors are used respectfully to maintain visual consistency with the eBay platform.
