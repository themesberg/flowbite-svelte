# Svelte Links - Flowbite


<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { A } from '$lib'
  
  const components = 'A'
</script>

Get started with the link component to enable hyperlinks across pages and external websites applied to elements such as inline text, buttons, cards, inside paragraphs, and more.

Hyperlinks are a great way to reduce bounce rate of the current page and encourage visitors to browse your website and become a returning user.

## Setup

```html
<script lang="ts">
  import { A } from "flowbite-svelte";
</script>
```

## Default link

Use this example to set default styles to an inline link element.

```svelte
{#include Default.svelte}
```

## A Link as Button

This example can be used to use as a button.

```svelte
{#include Button.svelte}
```

## Paragraph

Use this example to set a link inside a paragraph with an underline style.

```svelte
{#include Paragraph.svelte}
```

## Icon link

This example can be used to set a custom SVG icon inside the hyperlink element.

```svelte
{#include Icon.svelte}
```

## CTA link

Use this example to set a hyperlink on a CTA element with text and a custom icon.

```svelte
{#include Cta.svelte}
```

## Card link

Use this example to set a hyperlink on a card component.

```svelte
{#include Card.svelte}
```

## Image link

This example can be used to set a hyperlink on an image inside a card component.

```svelte
{#include Image.svelte}
```

## onclick

```svelte
{#include Onclick.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

<GitHubCompoLinks {components}/>
