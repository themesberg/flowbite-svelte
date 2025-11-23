---
layout: componentLayout
title: Flowbite-Svelte MCP Prompts
breadcrumb_title: Prompts
component_title: Prompts
dir: MCP
description: Best practices and prompt examples for using the Flowbite-Svelte MCP server effectively with AI assistants.
---

## Effective Prompts

To get the most out of the Flowbite-Svelte MCP server, use clear, specific prompts that help the AI understand what you need.

### Discovering Components

**Good prompts:**
- "What flowbite-svelte components are available for forms?"
- "Show me all flowbite-svelte card-related components"
- "Find flowbite-svelte components for navigation"

**Why they work:** These prompts trigger the `findComponent` or `getComponentList` tools to search the component library.

### Getting Documentation

**Good prompts:**
- "How do I use the flowbite-svelte Button component?"
- "Show me the props for the flowbite-svelte Modal component"
- "What events does the flowbite-svelte Dropdown component emit?"

**Why they work:** After finding a component, these prompts fetch full documentation including usage examples, props, events, and slots.

### Implementation Help

**Good prompts:**
- "Create a form with email and password inputs using flowbite-svelte"
- "Build a responsive navbar with a dropdown menu using flowbite-svelte"
- "Show me how to implement a data table with pagination using flowbite-svelte"

**Why they work:** The AI can use component documentation to generate accurate, working code with proper imports and props.

### Searching Documentation

**Good prompts:**
- "How do I customize colors in flowbite-svelte?"
- "Search the flowbite-svelte docs for dark mode implementation"
- "Find information about flowbite-svelte TypeScript types"

**Why they work:** These use the `searchDocs` tool for full-text search across all documentation.

### Best Practices

1. **Be specific about components** - Use exact component names when possible
2. **Ask for examples** - Request code examples to see components in action
3. **Mention your framework version** - Specify if you're using Svelte 4 or 5
4. **Request explanations** - Ask the AI to explain props or patterns you don't understand
