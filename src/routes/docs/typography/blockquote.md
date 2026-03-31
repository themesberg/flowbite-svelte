---
layout: componentLayout
title: Svelte Blockquote - Flowbite
breadcrumb_title: Svelte Blockquote
component_title: Blockquote
dir: Typography
description: The blockquote component can be used to quote text content from an external source that can be used for testimonials, reviews, and quotes inside an article
thumbnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, Seealso, LlmLink } from '../../utils'
  import { P, A, Heading } from '$lib'; 

  const components = 'Blockquote'
  const relatedLinks = ["/docs/typography/heading","/docs/typography/paragraph","/docs/typography/link","/docs/typography/list"];
</script>

Get started with Blockquote component when quoting external sources such as quotes inside an article, user reviews, and testimonials based on multiple examples of layouts, styles, and contexts.

## Default blockquote

Use this example to quote an external source inside a blockquote element.

```svelte example
{#include Default.svelte}
```

## Solid background

This example can be used as an alternative style to the default one by applying a solid background color.

```svelte example
{#include Solid.svelte}
```

## Blockquote icon

Use this example to show an icon above the blockquote text content.

```svelte example
{#include Icon.svelte}
```

## Paragraph context

Use this example to show a blockquote component between multiple paragraph elements.

```svelte example
{#include Paragraph.svelte}
```

## User testimonial

This example can be used for user testimonials by mentioning the author and occupation of the author.

```svelte example
{#include Testimonial.svelte}
```

## User Review

Use this example to show a user review with rating stars and the name and occupation of the author.

```svelte example
{#include Review.svelte}
```

## Alignment

Choose from the following examples the blockquote text alignment from starting from left, center to right based on the utility classes from Tailwind CSS.

```svelte example
{#include Alignments.svelte}
```

## Sizes

Use the `size` prop to apply different sizes for the blockquote component. You can use any size from `xs` to `9xl`. See more details in the Prop section below.

```svelte example
{#include Sizes.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

## GitHub Links

<GitHubCompoLinks {components}/>

## LLM Link

<LlmLink />
