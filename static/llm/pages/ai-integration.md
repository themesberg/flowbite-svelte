# AI and LLM Integration with Flowbite Svelte


Flowbite-Svelte integrates with Large Language Models (LLMs) like Claude to provide AI-powered documentation, component discovery, and code snippets. This seamless integration leverages the tmcp server to offer interactive, natural language assistance for developers.

## Flowbite-Svelte MCP Server

This **Model Context Protocol (MCP) server** for Flowbite-Svelte documentation enables **AI-powered component discovery and documentation querying**. It exposes tools to find components, query documentation, list components, and perform full-text search, all communicated via **stdio transport**.

### Getting Started

To set up and build the server:

```bash
git clone git@github.com:shinokada/flowbite-svelte-mcp.git
cd flowbite-svelte-mcp
pnpm install
pnpm run build
pnpm run start
```

### Usage
This server uses stdio transport, making it compatible with MCP clients that launch servers via stdin/stdout (e.g., Claude Desktop, ChatGPT Desktop, MCP Inspector).

#### Claude Desktop
1. Locate your configuration file:

- macOS: ~/Library/Application Support/Claude/claude_desktop_config.json

- Windows: %APPDATA%\Claude\claude_desktop_config.json

2. Edit the file. If the file doesn't exist, create it. Add your server like this (using the absolute path to your built server.js):

```json
{
  "mcpServers": {
    "flowbite-svelte": {
      "command": "node",
      "args": [
        "/Users/your-user-name/path/to/flowbite-svelte-mcp/build/server.js"
      ]
    }
  }
}
```

Note: For Windows, use the appropriate path format, e.g., "C:\\Users\\your-user-name\\..."

3. Restart Claude Desktop for the configuration changes to take effect.

4. Ask Claude:

- Search the flowbite-svelte docs for how to use an Accordion, then give me the component details.

- How do I use the flowbite-svelte accordion component?

- What components are available in flowbite-svelte?

Tip: The LLM uses these tools to precisely and instantly answer questions about Flowbite-Svelte components, avoiding generalized or outdated information.

#### Tools

| Tool name          | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| `findComponent`    | Find a Flowbite-Svelte component and its documentation path.         |
| `getComponentList` | Returns a list of component names + filename                         |
| `getComponentDoc`  | Returns the documentation (markdown / text) for a specific component |
| `searchDocs`       | Full-text search over the `context-full.txt` of Flowbite-Svelte      |

### Notes
#### MCP Client Integration

- Once built (pnpm build), you run the server (pnpm start).

- In a client like Claude Desktop, you configure it to execute your server process.

- Because it uses stdio transport, the client communicates with your server via its standard input/output streams.


## AI-Friendly Documentation Formats

Flowbite Svelte follows the [llms.txt standard](https://llmstxt.org/), a community-driven proposal initiated by Jeremy Howard that standardizes how websites provide LLM-friendly information.

Our implementation helps address the fundamental challenge that language models face: context windows are too small to process entire websites, and HTML content with navigation, ads, and JavaScript is difficult to convert to LLM-friendly formats.

By adopting this standard, Flowbite Svelte ensures that AI assistants can efficiently access our documentation without struggling with complex HTML or excessive content.

## Machine-Readable Routes

### llms.txt

The `llms.txt` file is a **manifest** that tells large language models (LLMs) where to find your AI-friendly Markdown documentation.  
It works like a `robots.txt` or `sitemap.xml`, but is specifically designed for LLMs to efficiently discover and consume your docs.  
You can access it at [https://flowbite-svelte.com/llms.txt](https://flowbite-svelte.com/llms.txt).

### context-full.txt

The `context-full.txt` file is a **complete bundle** of all your documentation, combined into one large text file.  
It includes full explanations, code examples, and details, making it ideal for LLMs with large context windows.  
You can access the full text at [https://flowbite-svelte.com/llm/context-full.txt](https://flowbite-svelte.com/llm/context-full.txt).

### Markdown API Access

All documentation pages can be accessed in pure markdown format by simply replacing `docs` with `llm` and appending `.md` to their URLs. For example:

- [https://flowbite-svelte.com/llm/pages/introduction.md](https://flowbite-svelte.com/llm/pages/introduction.md)
- [https://flowbite-svelte.com/llm/components/buttons.md](https://flowbite-svelte.com/llm/components/buttons.md)
- [https://flowbite-svelte.com/llm/extend/progressradial.md](https://flowbite-svelte.com/llm/extend/progressradial.md)

## Implementation Examples

Here's how you might leverage these features in your AI integration:

```ts
// Accessing component documentation in markdown format
const buttonDocs = await fetch("https://flowbite-svelte.com/llm/components/buttons.md").then((res) => res.text());

// Using markdown documentation in a ChatGPT prompt
const chatGptPrompt = `Based on this Flowbite Svelte Button component documentation:
${buttonDocs}

Generate a code example for a primary button with  a link to '/about'.`;
```

These features make it easy to integrate Flowbite Svelte's documentation with modern AI systems, creating powerful, intelligent tools to enhance developer experience and productivity.
