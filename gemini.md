---
title: "Using eBay MCP with Google Gemini"
description: "Complete guide to integrating eBay MCP Server with Google Gemini AI"
icon: "google"
---

# Using eBay MCP Server with Google Gemini

This guide shows you how to connect the eBay MCP Server to Google Gemini AI for AI-powered eBay automation.

<Note>
  **Prerequisites:**
  - eBay MCP Server [installed](/installation) and [configured](/configuration)
  - Google Gemini API access
  - Basic understanding of MCP (Model Context Protocol)
</Note>

## Overview

Google Gemini can interact with the eBay MCP Server through the Model Context Protocol, giving you:

- **230+ eBay Tools** - Full access to eBay's Sell APIs
- **AI-Powered Automation** - Natural language commands for eBay operations
- **Multi-Modal Capabilities** - Process images, text, and structured data
- **Advanced Reasoning** - Gemini's powerful analysis for business decisions

## Quick Start

### Step 1: Get Gemini API Access

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Get API Key"**
4. Create a new API key or use an existing one
5. Copy your API key securely

<Warning>
  Keep your Gemini API key secure. Never commit it to version control or share publicly.
</Warning>

### Step 2: Install MCP Client for Gemini

There are several ways to connect Gemini to MCP servers:

<Tabs>
  <Tab title="MCP Bridge (Recommended)">
    Use the MCP Bridge tool to connect Gemini to your eBay MCP Server:

    ```bash
    # Install MCP Bridge
    npm install -g @modelcontextprotocol/bridge

    # Configure for eBay MCP Server
    mcp-bridge configure
    ```

    When prompted:
    - **Server Type:** Local STDIO
    - **Command:** `node`
    - **Args:** `["/path/to/ebay-mcp-server/build/index.js"]`
    - **Environment Variables:**
      ```json
      {
        "EBAY_CLIENT_ID": "your_client_id",
        "EBAY_CLIENT_SECRET": "your_client_secret",
        "EBAY_ENVIRONMENT": "sandbox"
      }
      ```
  </Tab>

  <Tab title="Google AI SDK">
    Use the official Google AI SDK with MCP support:

    ```bash
    npm install @google/generative-ai
    npm install @modelcontextprotocol/sdk
    ```

    Create a connection script:

    ```javascript
    import { GoogleGenerativeAI } from '@google/generative-ai';
    import { MCPClient } from '@modelcontextprotocol/sdk/client/index.js';
    import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Connect to eBay MCP Server
    const transport = new StdioClientTransport({
      command: 'node',
      args: ['/path/to/ebay-mcp-server/build/index.js'],
      env: {
        EBAY_CLIENT_ID: process.env.EBAY_CLIENT_ID,
        EBAY_CLIENT_SECRET: process.env.EBAY_CLIENT_SECRET,
        EBAY_ENVIRONMENT: 'sandbox'
      }
    });

    const client = new MCPClient({
      name: 'gemini-ebay-client',
      version: '1.0.0'
    }, {
      capabilities: {}
    });

    await client.connect(transport);
    ```
  </Tab>

  <Tab title="Custom Integration">
    Build a custom integration using the MCP specification:

    ```python
    import google.generativeai as genai
    from mcp import Client, StdioTransport
    import os

    # Configure Gemini
    genai.configure(api_key=os.environ['GEMINI_API_KEY'])
    model = genai.GenerativeModel('gemini-pro')

    # Connect to eBay MCP Server
    transport = StdioTransport(
        command='node',
        args=['/path/to/ebay-mcp-server/build/index.js'],
        env={
            'EBAY_CLIENT_ID': os.environ['EBAY_CLIENT_ID'],
            'EBAY_CLIENT_SECRET': os.environ['EBAY_CLIENT_SECRET'],
            'EBAY_ENVIRONMENT': 'sandbox'
        }
    )

    client = Client('gemini-ebay', '1.0.0')
    await client.connect(transport)
    ```
  </Tab>
</Tabs>

### Step 3: Test the Connection

Try a simple query to verify everything works:

```javascript
// List available tools
const tools = await client.listTools();
console.log(`Connected! ${tools.length} eBay tools available`);

// Test with a simple operation
const prompt = "List my eBay fulfillment policies";
const result = await model.generateContent(prompt);
console.log(result.response.text());
```

## Common Use Cases

### 1. Inventory Management

Ask Gemini to manage your eBay inventory:

```
"Create a new inventory item for a vintage camera with these details:
- Brand: Canon
- Model: AE-1 Program
- Condition: Excellent
- Price: $199.99
- Quantity: 1
- Include product specifications"
```

Gemini will:
1. Extract structured data from your description
2. Call the `createInventoryItem` tool
3. Set appropriate category and item specifics
4. Return the created item details

### 2. Order Processing

Process orders with natural language:

```
"Show me all orders from the last 7 days that need shipping labels"
```

Gemini can:
- Query orders using `getOrders` tool
- Filter by date and fulfillment status
- Generate shipping labels for unfulfilled orders
- Provide a summary of actions needed

### 3. Marketing Campaign Creation

Launch promotions with AI assistance:

```
"Create a 15% off promotion for all electronics, running for 2 weeks starting next Monday"
```

Gemini will:
- Calculate dates automatically
- Create the promotion using `createItemPromotion` tool
- Set appropriate discount and category filters
- Confirm the promotion details

### 4. Analytics and Reporting

Get business insights:

```
"Analyze my sales performance for the last month and suggest improvements"
```

Gemini can:
- Fetch traffic reports using analytics tools
- Analyze seller standards and metrics
- Identify trends and opportunities
- Provide actionable recommendations

## Advanced Features

### Multi-Step Workflows

Gemini can chain multiple MCP tool calls:

```
"List all my items priced under $50, then create a 20% off promotion for them"
```

This triggers:
1. `getInventoryItems` - fetch all items
2. Filter by price client-side
3. `createItemPromotion` - create promotion for filtered items
4. Return summary of affected items

### Image Processing

Use Gemini's vision capabilities with eBay listings:

```javascript
// Upload product photo
const image = fs.readFileSync('product-photo.jpg');

const prompt = `
Analyze this product image and create an eBay listing with:
- Detailed description
- Appropriate category
- Competitive pricing based on similar items
- All relevant item specifics
`;

const result = await model.generateContent([
  prompt,
  { inlineData: { data: image.toString('base64'), mimeType: 'image/jpeg' } }
]);

// Gemini extracts info and creates listing via MCP tools
```

### Error Handling and Recovery

Gemini can intelligently handle errors:

```
User: "Update the price of item SKU-12345 to $99.99"

// If item doesn't exist:
Gemini: "I couldn't find item SKU-12345. Would you like me to:
1. Search for similar SKU numbers
2. List all your active items
3. Create a new item with that SKU"
```

## Configuration Options

### Environment Variables

Create a `.env` file for your Gemini integration:

```bash
# Gemini API
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-pro  # or gemini-pro-vision

# eBay MCP Server
EBAY_CLIENT_ID=your_ebay_client_id
EBAY_CLIENT_SECRET=your_ebay_client_secret
EBAY_ENVIRONMENT=sandbox
EBAY_REDIRECT_URI=http://localhost:3000/callback

# Optional: User Tokens
EBAY_USER_ACCESS_TOKEN=your_access_token
EBAY_USER_REFRESH_TOKEN=your_refresh_token
EBAY_USER_TOKEN_EXPIRY=2024-12-31T23:59:59.000Z

# MCP Configuration
MCP_SERVER_PATH=/path/to/ebay-mcp-server/build/index.js
MCP_TRANSPORT=stdio
```

### Gemini Models

Choose the right Gemini model for your needs:

| Model | Best For | Features |
|-------|----------|----------|
| **gemini-pro** | Text-based automation | Fast, cost-effective, great for APIs |
| **gemini-pro-vision** | Image + text tasks | Multi-modal, product photography |
| **gemini-ultra** | Complex reasoning | Advanced analysis, strategic decisions |

## Best Practices

### 1. Clear Instructions

Be specific in your prompts:

❌ **Vague:** "Change my listings"
✅ **Clear:** "Update all electronics listings to add a 2-year warranty in the description"

### 2. Safety and Validation

Always validate before destructive operations:

```javascript
const prompt = `
I want to delete all items with 0 inventory.
First, show me the list and ask for confirmation before deleting.
`;
```

### 3. Rate Limiting

Gemini can help manage eBay API rate limits:

```
"I have 500 items to update. Batch them to stay under the rate limit of 5000 calls per day"
```

### 4. Error Recovery

Let Gemini handle retries:

```javascript
const config = {
  maxRetries: 3,
  retryDelay: 1000,
  errorHandling: 'graceful'
};
```

## Troubleshooting

<AccordionGroup>
  <Accordion title="Connection Fails">
    **Problem:** Can't connect Gemini to eBay MCP Server

    **Solutions:**
    1. Verify eBay MCP Server is running:
       ```bash
       node /path/to/ebay-mcp-server/build/index.js
       ```
    2. Check environment variables are set correctly
    3. Ensure Gemini API key is valid
    4. Check MCP transport configuration
  </Accordion>

  <Accordion title="Tools Not Available">
    **Problem:** Gemini says eBay tools aren't available

    **Solutions:**
    1. List available tools to verify connection:
       ```javascript
       const tools = await client.listTools();
       console.log(tools);
       ```
    2. Restart the MCP server connection
    3. Check eBay credentials are valid
    4. Verify user tokens haven't expired
  </Accordion>

  <Accordion title="API Rate Limits">
    **Problem:** Hitting eBay API rate limits

    **Solutions:**
    1. Use user tokens instead of client credentials (10x higher limits)
    2. Implement exponential backoff
    3. Batch operations when possible
    4. Ask Gemini to optimize call frequency
  </Accordion>

  <Accordion title="Unexpected Results">
    **Problem:** Gemini performs wrong actions

    **Solutions:**
    1. Be more specific in prompts
    2. Use step-by-step instructions
    3. Request confirmation before destructive operations
    4. Review tool call logs to debug
  </Accordion>
</AccordionGroup>

## Example Projects

### 1. Automated Repricing Bot

```javascript
// Monitors competitors and adjusts prices
const prompt = `
Every hour:
1. Check my electronics listings
2. Compare prices with top competitors
3. Adjust my prices to stay competitive (within 5% margin)
4. Log all price changes
5. Alert me if any item is significantly underpriced
`;
```

### 2. Smart Inventory Assistant

```python
# Gemini monitors inventory and reorders
"""
Monitor inventory levels daily.
For any item with less than 3 units:
- Check sales velocity
- If fast-moving, alert me to restock
- If slow-moving, suggest a promotion
- Automatically pause listings when out of stock
"""
```

### 3. Customer Service Automation

```javascript
// Handle common customer queries
const prompt = `
When orders have tracking questions:
1. Look up the order details
2. Get current shipping status
3. Generate a friendly update message
4. Suggest expected delivery date
`;
```

## Comparison with Other AI Assistants

| Feature | Gemini | Claude | ChatGPT |
|---------|--------|--------|---------|
| **Multi-modal** | ✅ Vision | ✅ Vision | ✅ Vision |
| **Context Window** | 32K tokens | 200K tokens | 128K tokens |
| **Speed** | Fast | Medium | Fast |
| **Cost** | Low | Medium | Medium |
| **MCP Support** | Yes (via SDK) | Native | Yes (via SDK) |
| **Best For** | High-volume automation | Complex reasoning | General purpose |

## Resources

- **Google AI Studio:** https://makersuite.google.com
- **Gemini Documentation:** https://ai.google.dev/docs
- **MCP Specification:** https://modelcontextprotocol.io
- **eBay MCP Server:** https://github.com/YosefHayim/ebay-mcp-server
- **Example Code:** https://github.com/YosefHayim/ebay-mcp-examples

## Next Steps

<CardGroup cols={2}>
  <Card title="API Reference" icon="code" href="/api-reference/introduction">
    Explore all 230+ available eBay tools
  </Card>

  <Card title="Best Practices" icon="lightbulb" href="/guides/best-practices">
    Learn optimization tips and patterns
  </Card>

  <Card title="Claude Integration" icon="message" href="/claude">
    Compare with Claude Desktop setup
  </Card>

  <Card title="Advanced Guides" icon="graduation-cap" href="/guides/bulk-operations">
    Master complex automation workflows
  </Card>
</CardGroup>

---

**Questions?** Join the discussion on [GitHub](https://github.com/YosefHayim/ebay-mcp-server/discussions) or check our [FAQ](/support/faq).
