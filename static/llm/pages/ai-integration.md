# AI and LLM Integration with Flowbite Svelte

Flowbite Svelte provides powerful, built-in support for AI and Large Language Model (LLM) integration through specialized routes that expose documentation in machine-readable formats. These features enable seamless integration with ChatGPT, Claude, and other AI assistants.

## Compliance

Flowbite Svelte follows the [llms.txt standard](https://llmstxt.org/), a community-driven proposal initiated by Jeremy Howard that standardizes how websites provide LLM-friendly information.

Our implementation helps address the fundamental challenge that language models face: context windows are too small to process entire websites, and HTML content with navigation, ads, and JavaScript is difficult to convert to LLM-friendly formats.

By adopting this standard, Flowbite Svelte ensures that AI assistants can efficiently access our documentation without struggling with complex HTML or excessive content.

## Machine-Readable Routes

### Markdown API Access

All documentation pages can be accessed in pure markdown format by simply replacing `docs` with `llm` and appending `.md` to their URLs. For example:

- `https://flowbite-svelte.com/llm/pages/introduction.md`
- `https://flowbite-svelte.com/llm/components/buttons.md`
- `https://flowbite-svelte.com/llm/extend/progressradial.md`

## Implementation Examples

Here's how you might leverage these features in your AI integration:

```ts
// Accessing component documentation in markdown format
const buttonDocs = await fetch("https://flowbite-svelte.com/docs/components/buttons.md").then((res) => res.text());

// Using markdown documentation in a ChatGPT prompt
const chatGptPrompt = `Based on this Flowbite Svelte Button component documentation:
${buttonDocs}

Generate a code example for a primary button with  a link to '/about'.`;
```

These features make it easy to integrate Flowbite Svelte's documentation with modern AI systems, creating powerful, intelligent tools to enhance developer experience and productivity.
