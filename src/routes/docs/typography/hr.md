---
layout: componentLayout
title: Svelte Horizontal Line (HR) - Flowbite
breadcrumb_title: Svelte HR
component_title: HR
dir: Typography
description: Create a horizontal line using the `Hr` component to separate content such as paragraphs, blockquotes, and other elements
thumbnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { A } from '$lib';

  const components = 'Hr'
</script>

The `Hr` component can be used to separate content using a horizontal line by adding space between elements based on multiple styles, variants, and layouts.

## Setup

```html
<script lang="ts">
  import { Hr } from "flowbite-svelte";
</script>
```

## Default HR

```svelte example
{#include Default.svelte}
```

## Trimmed

Use this example to show a shorter version of the horizontal line.

```svelte example
{#include Trimmed.svelte}
```

## Icon HR

This example can be used to set a custom SVG icon in the middle of the HR element.

```svelte example
{#include Icon.svelte}
```

## HR with text

Use this example to add a text in the middle of the HR component.

```svelte example
{#include Text.svelte}
```

## HR shape

This example can be used to separate content with a HR tag as a shape instead of a line.

```svelte example
{#include Shape.svelte}
```

## Gradient

This example shows how to add gradients to `HR` component.

```svelte example
{#include Gradient.svelte}
```

## divProps and hrProps

The `restProps` will be removed in the next version. Please use `divProps` and `hrProps`.

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

## GitHub Links

<GitHubCompoLinks {components}/>

## LLM Link

<LlmLink />
