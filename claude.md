---
title: "Using eBay MCP with Claude"
description: "Complete guide to integrating eBay MCP Server with Claude AI"
icon: "message"
---

# Using eBay MCP Server with Claude

This guide shows you how to connect the eBay MCP Server to Claude for AI-powered eBay automation with Anthropic's most capable AI assistant.

<Note>
  **Prerequisites:**
  - eBay MCP Server [installed](/installation) and [configured](/configuration)
  - Claude subscription (Pro, Max, or API access)
  - Claude Desktop app OR API access
</Note>

## Overview

Claude has **native MCP support**, making it the easiest AI assistant to connect with the eBay MCP Server:

- **230+ eBay Tools** - Full access to eBay's Sell APIs
- **Native Integration** - Built-in MCP protocol support
- **200K Context Window** - Handle large product catalogs and complex operations
- **Advanced Reasoning** - Claude's exceptional analysis for business decisions
- **Tool Use** - Industry-leading function calling accuracy

## Quick Start

### Method 1: Claude Desktop (Recommended)

The easiest way to use eBay MCP with Claude.

<Steps>
  <Step title="Install Claude Desktop">
    Download Claude Desktop from [claude.ai/download](https://claude.ai/download)

    Available for:
    - macOS
    - Windows
    - Linux
  </Step>

  <Step title="Locate Configuration File">
    Find your Claude Desktop config file:

    **macOS:**
    ```
    ~/Library/Application Support/Claude/claude_desktop_config.json
    ```

    **Windows:**
    ```
    %APPDATA%\Claude\claude_desktop_config.json
    ```

    **Linux:**
    ```
    ~/.config/Claude/claude_desktop_config.json
    ```
  </Step>

  <Step title="Add eBay MCP Server">
    Edit `claude_desktop_config.json`:

    ```json
    {
      "mcpServers": {
        "ebay": {
          "command": "node",
          "args": ["/absolute/path/to/ebay-mcp-server/build/index.js"],
          "env": {
            "EBAY_CLIENT_ID": "your_client_id_here",
            "EBAY_CLIENT_SECRET": "your_client_secret_here",
            "EBAY_ENVIRONMENT": "sandbox",
            "EBAY_REDIRECT_URI": "http://localhost:3000/callback"
          }
        }
      }
    }
    ```

    <Warning>
      Replace `/absolute/path/to/ebay-mcp-server` with the actual path where you cloned the repository.
      Use an **absolute path**, not a relative path.
    </Warning>
  </Step>

  <Step title="Restart Claude Desktop">
    1. Quit Claude Desktop completely
    2. Reopen Claude Desktop
    3. Look for the 🔨 tools icon in the interface
    4. You should see eBay tools available!
  </Step>

  <Step title="Test the Connection">
    In Claude Desktop, try:

    > "Can you list my eBay fulfillment policies?"

    Claude will use the `getFulfillmentPolicies` tool and show your configured policies.

    <Check>
      **Success!** You now have 230+ eBay tools available in Claude Desktop.
    </Check>
  </Step>
</Steps>

### Method 2: Claude API

For programmatic access or custom integrations.

<Tabs>
  <Tab title="Python">
    ```python
    import anthropic
    from mcp import Client, StdioTransport
    import os

    # Initialize Claude
    client = anthropic.Anthropic(
        api_key=os.environ.get("ANTHROPIC_API_KEY")
    )

    # Connect to eBay MCP Server
    mcp_transport = StdioTransport(
        command='node',
        args=['/path/to/ebay-mcp-server/build/index.js'],
        env={
            'EBAY_CLIENT_ID': os.environ['EBAY_CLIENT_ID'],
            'EBAY_CLIENT_SECRET': os.environ['EBAY_CLIENT_SECRET'],
            'EBAY_ENVIRONMENT': 'sandbox'
        }
    )

    mcp_client = Client('claude-ebay', '1.0.0')
    await mcp_client.connect(mcp_transport)

    # List available tools
    tools = await mcp_client.list_tools()
    print(f"Connected! {len(tools)} eBay tools available")

    # Use Claude with eBay tools
    message = client.messages.create(
        model="claude-sonnet-4",
        max_tokens=4096,
        tools=[{
            "name": tool.name,
            "description": tool.description,
            "input_schema": tool.inputSchema
        } for tool in tools],
        messages=[{
            "role": "user",
            "content": "List my eBay inventory items"
        }]
    )

    print(message.content)
    ```
  </Tab>

  <Tab title="TypeScript">
    ```typescript
    import Anthropic from '@anthropic-ai/sdk';
    import { MCPClient } from '@modelcontextprotocol/sdk/client/index.js';
    import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

    // Initialize Claude
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    });

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
      name: 'claude-ebay-client',
      version: '1.0.0'
    }, {
      capabilities: {}
    });

    await client.connect(transport);

    // List available tools
    const { tools } = await client.listTools();
    console.log(`Connected! ${tools.length} eBay tools available`);

    // Use Claude with eBay tools
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4',
      max_tokens: 4096,
      tools: tools.map(tool => ({
        name: tool.name,
        description: tool.description,
        input_schema: tool.inputSchema
      })),
      messages: [{
        role: 'user',
        content: 'Show me my recent eBay orders'
      }]
    });

    console.log(message.content);
    ```
  </Tab>
</Tabs>

## Common Use Cases

### 1. Natural Language Inventory Management

Claude excels at understanding complex inventory operations:

```
"I need to create a new listing for a vintage Canon AE-1 camera.
It's in excellent condition, include all relevant specs, price it
competitively based on similar listings, and use the appropriate eBay category."
```

Claude will:
1. Extract structured data from your description
2. Research competitive pricing patterns
3. Select the correct eBay category
4. Create the inventory item with all proper fields
5. Confirm the listing details

### 2. Intelligent Order Processing

Claude can handle complex order workflows:

```
"Process all orders from the last 3 days that are awaiting shipment.
For each order, generate a shipping label and send the buyer a friendly
message with the tracking number and expected delivery date."
```

Claude executes:
- Queries orders with proper date filters
- Generates shipping labels via `createShippingFulfillment`
- Composes personalized buyer messages
- Provides summary of all actions taken

### 3. Strategic Marketing Campaigns

Claude's reasoning helps optimize promotions:

```
"Analyze my slow-moving inventory and create a marketing campaign.
Suggest which items to promote, what discount percentage to offer,
and the optimal campaign duration based on historical sales data."
```

Claude performs:
- Analyzes inventory turnover rates
- Identifies underperforming items
- Recommends data-driven discount strategies
- Creates targeted promotions
- Explains the reasoning behind recommendations

### 4. Business Analytics and Insights

Claude excels at analyzing business data:

```
"Review my seller performance metrics for the last quarter.
Identify areas where I'm underperforming, explain why, and suggest
specific actions to improve my seller rating."
```

Claude provides:
- Comprehensive metric analysis
- Root cause identification
- Actionable improvement strategies
- Timeline for implementation
- Expected impact projections

## Advanced Features

### Multi-Step Reasoning

Claude can plan and execute complex workflows:

```
User: "I'm going on vacation for 2 weeks. Prepare my account."

Claude: "I'll help you prepare your eBay account for your vacation. Here's my plan:

1. Pause all active listings temporarily
2. Set up an out-of-office auto-responder for messages
3. Review pending orders and ensure all shipments are scheduled
4. Create a summary report of your account status

Should I proceed with these actions?"

User: "Yes, do it."

Claude: [Executes all steps and provides detailed confirmation]
```

### Context-Aware Assistance

With a 200K token context window, Claude remembers entire conversations:

```
User: "What were my best-selling items last month?"
Claude: [Provides analysis]

User: "Create a promotion for those items"
Claude: [Creates promotion using items from previous query]

User: "Make it 15% instead of 20%"
Claude: [Adjusts the promotion, remembering the context]
```

### Error Recovery and Validation

Claude validates operations before execution:

```
User: "Delete all my inventory items"

Claude: "I notice you're asking to delete ALL inventory items.
This is a destructive action that will:
- Remove 147 active listings
- Potentially affect 23 pending orders
- Cannot be undone

This seems unusual. Could you clarify:
1. Did you mean to delete specific items?
2. Or should I help you pause listings instead?
3. If you do want to delete everything, could you confirm by typing 'DELETE ALL ITEMS'?"
```

## Why Claude for eBay MCP?

### Advantages over Other AI Assistants

<CardGroup cols={2}>
  <Card title="Native MCP Support" icon="plug">
    Built-in protocol support - no bridges or workarounds needed
  </Card>

  <Card title="Exceptional Reasoning" icon="brain">
    Industry-leading analysis and decision-making capabilities
  </Card>

  <Card title="200K Context Window" icon="window">
    Handle massive product catalogs and long conversation histories
  </Card>

  <Card title="Honest & Safe" icon="shield-check">
    Admits uncertainty, asks clarifying questions, validates actions
  </Card>

  <Card title="Tool Use Accuracy" icon="bullseye">
    Best-in-class function calling with minimal errors
  </Card>

  <Card title="Clear Communication" icon="comments">
    Explains reasoning and decisions in accessible language
  </Card>
</CardGroup>

### Comparison Table

| Feature | Claude | Gemini | ChatGPT |
|---------|--------|--------|---------|
| **MCP Support** | Native | Via SDK | Via SDK |
| **Context Window** | 200K tokens | 32K tokens | 128K tokens |
| **Reasoning Quality** | Exceptional | Good | Good |
| **Tool Accuracy** | Industry-leading | Good | Good |
| **Safety Features** | Strong validation | Standard | Standard |
| **Desktop App** | ✅ Built-in MCP | ❌ | ❌ |
| **Best For** | Complex workflows | High-volume tasks | General purpose |

## Configuration Options

### Basic Configuration

Minimal setup for Claude Desktop:

```json
{
  "mcpServers": {
    "ebay": {
      "command": "node",
      "args": ["/path/to/ebay-mcp-server/build/index.js"],
      "env": {
        "EBAY_CLIENT_ID": "your_client_id",
        "EBAY_CLIENT_SECRET": "your_client_secret",
        "EBAY_ENVIRONMENT": "sandbox"
      }
    }
  }
}
```

### Advanced Configuration

With user tokens for full API access:

```json
{
  "mcpServers": {
    "ebay": {
      "command": "node",
      "args": ["/path/to/ebay-mcp-server/build/index.js"],
      "env": {
        "EBAY_CLIENT_ID": "your_client_id",
        "EBAY_CLIENT_SECRET": "your_client_secret",
        "EBAY_ENVIRONMENT": "production",
        "EBAY_USER_ACCESS_TOKEN": "your_access_token",
        "EBAY_USER_REFRESH_TOKEN": "your_refresh_token",
        "EBAY_USER_TOKEN_EXPIRY": "2024-12-31T23:59:59.000Z",
        "LOG_LEVEL": "info"
      }
    }
  }
}
```

### Multiple Environments

Configure both Sandbox and Production:

```json
{
  "mcpServers": {
    "ebay-sandbox": {
      "command": "node",
      "args": ["/path/to/ebay-mcp-server/build/index.js"],
      "env": {
        "EBAY_ENVIRONMENT": "sandbox",
        "EBAY_CLIENT_ID": "sandbox_client_id",
        "EBAY_CLIENT_SECRET": "sandbox_client_secret"
      }
    },
    "ebay-production": {
      "command": "node",
      "args": ["/path/to/ebay-mcp-server/build/index.js"],
      "env": {
        "EBAY_ENVIRONMENT": "production",
        "EBAY_CLIENT_ID": "production_client_id",
        "EBAY_CLIENT_SECRET": "production_client_secret",
        "EBAY_USER_ACCESS_TOKEN": "production_token",
        "EBAY_USER_REFRESH_TOKEN": "production_refresh"
      }
    }
  }
}
```

## Best Practices

### 1. Be Specific and Clear

Claude performs best with detailed instructions:

❌ **Vague:** "Update my listings"
✅ **Clear:** "Update all electronics listings to include free shipping and a 30-day return policy"

### 2. Use Claude's Reasoning

Ask Claude to explain its approach:

```
"Before creating this promotion, explain your strategy and why you think
these are the right items to promote. Then proceed if it makes sense."
```

### 3. Leverage Context Memory

Build on previous conversations:

```
Session 1: "Analyze my top 10 selling items"
Session 2: "Create similar listings for new inventory"
Claude remembers the top items from Session 1
```

### 4. Validate Important Actions

For critical operations:

```
"I want to change all my prices. First, show me a preview of the changes,
then ask for my confirmation before making any updates."
```

## Troubleshooting

<AccordionGroup>
  <Accordion title="Tools Not Appearing in Claude Desktop">
    **Problem:** The 🔨 tools icon doesn't show eBay tools

    **Solutions:**
    1. **Check config file location** - Must be exact path for your OS
    2. **Verify JSON syntax** - Use a JSON validator
    3. **Use absolute paths** - Not relative paths in config
    4. **Restart Claude Desktop** - Fully quit and reopen
    5. **Check server path** - Ensure the path exists:
       ```bash
       ls /path/to/ebay-mcp-server/build/index.js
       ```
    6. **Test server directly**:
       ```bash
       node /path/to/ebay-mcp-server/build/index.js
       ```
  </Accordion>

  <Accordion title="Authentication Errors">
    **Problem:** eBay API authentication fails

    **Solutions:**
    1. **Verify credentials** in eBay Developer Portal
    2. **Check environment** - Sandbox vs Production mismatch
    3. **Regenerate tokens** if expired:
       ```bash
       cd /path/to/ebay-mcp-server
       npm run setup
       ```
    4. **Update config** with new tokens
    5. **Restart Claude Desktop**
  </Accordion>

  <Accordion title="Claude Can't Execute Tools">
    **Problem:** Claude sees tools but can't use them

    **Solutions:**
    1. **Check server is running** - Should start automatically
    2. **Review error messages** in Claude's response
    3. **Verify eBay credentials** are valid
    4. **Test with simple command**: "List my eBay user account details"
    5. **Check logs** in the MCP server output
  </Accordion>

  <Accordion title="Slow Performance">
    **Problem:** Tool calls take a long time

    **Possible causes:**
    - Network latency to eBay APIs
    - Large data sets being retrieved
    - Rate limiting delays

    **Solutions:**
    1. **Use user tokens** for higher rate limits
    2. **Filter queries** to reduce data transfer
    3. **Batch operations** when possible
    4. **Check internet connection**
  </Accordion>
</AccordionGroup>

## Example Workflows

### Complete Listing Creation

```
User: "I have a vintage Nikon F3 camera in mint condition with original box and manual. Create a compelling listing."

Claude: "I'll create a comprehensive listing for your Nikon F3. Let me:

1. Research similar listings to set competitive pricing
2. Write a detailed description highlighting the mint condition and accessories
3. Select the correct eBay category for vintage cameras
4. Add all relevant item specifics
5. Set appropriate shipping options

Proceeding with creation..."

[Claude creates the listing and provides confirmation with listing ID and preview URL]
```

### Inventory Audit

```
User: "Audit my inventory and identify any issues"

Claude: "I'll perform a complete inventory audit. Checking:

✓ 147 active listings analyzed
! Found 3 items with quantity = 0 (should be paused)
! Found 12 items missing images
! Found 5 items with pricing below cost
✓ All items have proper categories
✓ Shipping policies correctly assigned

Would you like me to:
1. Pause the out-of-stock items?
2. Generate a report of items needing images?
3. Review the underpriced items together?"
```

### Automated Reporting

```
User: "Generate my weekly sales report"

Claude: "Here's your sales summary for the week:

📊 Overview:
- Total Sales: $1,247.83 (↑ 15% vs last week)
- Orders: 23 (↑ 3 vs last week)
- Avg Order Value: $54.25

🏆 Top Performers:
1. Vintage Camera Accessories - $312.45 (6 sales)
2. Electronics Bundle - $189.99 (3 sales)
3. Collectible Items - $156.78 (4 sales)

⚠️ Action Items:
- 2 orders need shipping labels
- 1 buyer message awaiting response
- 3 items low on inventory

Would you like me to handle any of these action items?"
```

## Resources

- **Claude Desktop:** https://claude.ai/download
- **Claude API Docs:** https://docs.anthropic.com
- **MCP Documentation:** https://modelcontextprotocol.io
- **eBay MCP Server:** https://github.com/YosefHayim/ebay-mcp-server
- **Claude in the IDE:** Use Cursor or other MCP-compatible editors

## Next Steps

<CardGroup cols={2}>
  <Card title="Explore All Tools" icon="tools" href="/api-reference/introduction">
    Browse all 230+ eBay tools available
  </Card>

  <Card title="Best Practices Guide" icon="lightbulb" href="/guides/best-practices">
    Optimize your Claude + eBay workflow
  </Card>

  <Card title="Advanced Workflows" icon="diagram-project" href="/guides/bulk-operations">
    Master complex automation tasks
  </Card>

  <Card title="Compare AI Assistants" icon="scale-balanced" href="/gemini">
    See how Gemini integration compares
  </Card>
</CardGroup>

---

**Need Help?** Visit our [support page](/support/troubleshooting) or ask in [GitHub Discussions](https://github.com/YosefHayim/ebay-mcp-server/discussions).
