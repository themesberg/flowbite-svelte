---
layout: componentLayout
title: Svelte Typography - Flowbite
breadcrumb_title: Svelte Typography
component_title: Typography
dir: Components
description: Use the typography and the utility classes from Tailwind CSS to style text with Flowbite
thumbnailSize: w-36
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, LlmLink } from '../../utils'
  import { A } from '$lib';
  const components = 'A, Blockquote, DescriptionList, Heading, Hr, Img, Layout, Li, List, Mark, P, Secondary, Span';
</script>

The typography for FlowBite is completely based on the utility classes from Tailwind CSS.

We have listed some of the commonly used typography classes that we use throughout the FlowBite UI, however, you can also check out all of the utility classes on the <a class="link" href="https://tailwindcss.com/docs/font-family">Tailwind CSS documentation</a> directly.

## Font Size

Use the following text-size utility classes from Tailwind to set the font size for any text element.

```svelte example hideResponsiveButtons
{#include FontSize.svelte}
```

## Font Weight

Use the following font-weight utility classes to set the font weight for any text element.

```svelte example hideResponsiveButtons
{#include FontWeight.svelte}
```

## Line Height

Use the following leading-type utility classes to set the line height for any text element.

```svelte example hideResponsiveButtons
{#include LineHeight.svelte}
```

## Lists

Use the following code to create list items with ordered and unordered lists.

```svelte example hideResponsiveButtons
{#include Lists.svelte}
```

## List position

Use the `position="inside"` and `position="outside"` props to set the list item position inside or outside of a list component.

```svelte example hideResponsiveButtons
{#include ListPosition.svelte}
```

## Text Decoration

You can use the following classes to set the text decoration for any inline text element.

```svelte example hideResponsiveButtons
{#include TextDecoration.svelte}
```

## Component data

<CompoAttributesViewer {components}/>

## References

- [Flowbite Typography](https://flowbite.com/docs/components/typography/)

## GitHub Links

<GitHubCompoLinks {components}/>

## LLM Link

<LlmLink />

