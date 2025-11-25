---
layout: componentLayout
title: Flowbite-Svelte MCP Local Setup
breadcrumb_title: Local Setup
component_title: Local Setup
dir: MCP
description: Learn how to install and configure the Flowbite-Svelte MCP server locally on your machine for use with Claude Desktop and other MCP clients.
---

## Local Setup

The local (or stdio) version of the Flowbite-Svelte MCP server runs directly on your machine. You'll need to clone the repository and build it locally before configuring it with your MCP client.

### Installation

```bash
git clone git@github.com:shinokada/flowbite-svelte-mcp.git
cd flowbite-svelte-mcp
pnpm install
pnpm run copy:llm  # Fetch latest Flowbite-Svelte docs
pnpm run build
```

### Configuration

Here's how to set it up in common MCP clients:

#### Claude Desktop

1. In the Settings > Developer section, click on **Edit Config**
2. This opens the folder containing `claude_desktop_config.json`
3. Edit the file to include:

```json
{
  "mcpServers": {
    "flowbite-svelte": {
      "command": "node",
      "args": ["/absolute/path/to/flowbite-svelte-mcp/build/server.js"]
    }
  }
}
```

**Important:** Replace `/absolute/path/to/` with the actual path where you cloned the repository.

4. Restart Claude Desktop

#### Testing

After setup, test the installation by asking Claude:

- "Search the flowbite-svelte docs for how to use an Accordion"
- "What components are available in flowbite-svelte?"
- "Show me how to use the Button component"

### Troubleshooting

**Tools not working:**
1. Verify the path in your config is absolute and correct
2. Ensure you ran `pnpm run build` after cloning
3. Restart your MCP client after configuration changes
4. Check the client's logs for error messages
