---
layout: componentLayout
title: Svelte Paragraph - Flowbite
breadcrumb_title: Svelte Paragraph
component_title: Paragraph
dir: Typography
description: Use the paragraph component to create multiple blocks of text separated by blank lines and write content based on multiple layouts and styles
thumbnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils';
  import { Layout, P, A, Heading } from '$lib';

  const components = 'P, Layout'
</script>

The paragraph element is one of the most commonly used HTML tags on a document page because it is used to write longer blocks of text separated by a blank line and can massively improve the on-page SEO of the page when used correctly. Get started with a collection of paragraph components based on multiple styles, layouts, colors and sizes to use for your website.

## Default paragraph

Use this example of a paragraph element to use inside article content or a landing page.

```svelte example
{#include Default.svelte}
```

## contenteditable

Since `P.svelte` extends `HTMLAttributes<HTMLElement>`, you can use `contenteditable` attribute.

```svelte example
{#include ContentEditable.svelte}
```

## Leading paragraph

The leading text can be used as the first paragraph inside an article content page.

```svelte example
{#include Leading.svelte}
```

## First letter

Use `firstUpper` prop to highlight the first letter of the paragraph, often used in e-books and PDF documents.

```svelte example
{#include FirstLetter.svelte}
```

## Paragraph inline styles

Use these examples to apply inline text decorations — link, bold, underline, or italic — to a part of the paragraph.

```svelte example
{#include Link.svelte}
```

## Paragraph popover

Get started with this example to show a popover with extra information inside paragraph elements.

```svelte example class="flex items-end h-96"
{#include Popover.svelte}
```

## Layout

Get started with examples of layouts for the paragraph component to separate content into multiple rows and columns.

### One column

Use this example to show multiple paragraphs on a single line.

```svelte example
{#include OneColumn.svelte}
```

### Two columns even

Use this example to separate paragraphs into two columns for better readability.

```svelte example
{#include TwoEvenColumns.svelte}
```

### Three columns even

This example can be used to separate paragraphs into three separate columns.

```svelte example
{#include ThreeEvenColumns.svelte}
```

### Two columns uneven

Use this example to separate paragraphs into two uneven columns.

```svelte example
{#include TwoUnevenColumns.svelte}
```

## Text alignment

Align the paragraph component to the left (default), center or right side of the document page using the `align` prop.

```svelte example
{#include Alignments.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

## GitHub Links

<GitHubCompoLinks {components}/>

## LLM Link

<LlmLink />
