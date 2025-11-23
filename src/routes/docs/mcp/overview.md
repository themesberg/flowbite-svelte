---
layout: componentLayout
title: Flowbite-Svelte MCP Overview
breadcrumb_title: Overview
component_title: Overview
dir: MCP
description: The Flowbite-Svelte MCP (Model Context Protocol) server helps your LLM or agent write better Flowbite-Svelte code by providing component documentation and usage examples.
---

## Overview

The Flowbite-Svelte MCP (__Model Context Protocol__) server can help your LLM or agent of choice write better Flowbite-Svelte code. It works by providing comprehensive component documentation, usage examples, and best practices for all Flowbite-Svelte components.

## Usage

To get the most out of the MCP server we recommend including the following prompt in your `AGENTS.md` (or `CLAUDE.md`, if using Claude Code. Or `GEMINI.md`, if using Gemini). Place this file in the **root of your project directory** so it's automatically loaded by your AI coding assistant. This will tell the LLM which tools are available and when it's appropriate to use them.

```md
You are able to use the Flowbite-Svelte MCP server, where you have access to comprehensive Flowbite-Svelte component documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. findComponent

Use this FIRST to discover components by name or category. Returns component information including the documentation path.
When asked about Flowbite-Svelte components, ALWAYS use this tool to locate the correct component before fetching documentation.
Example queries: 'Button', 'CardPlaceholder', 'form checkbox'

### 2. getComponentList

Lists all available Flowbite-Svelte components with their categories.
Use this to discover what components are available or to help users explore component options.

### 3. getComponentDoc

Retrieves full documentation content for a specific component. Accepts the component path found using findComponent.
After calling findComponent, use this tool to fetch the complete documentation including usage examples, props, and best practices.

### 4. searchDocs

Performs full-text search across all Flowbite-Svelte documentation.
Use this when you need to find specific information that might span multiple components or when the user asks about features or patterns.
```
