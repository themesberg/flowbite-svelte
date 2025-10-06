---
layout: componentLayout
title: Svelte Images - Flowbite
breadcrumb_title: Svelte Images
component_title: Image
dir: Typography
description: The image component can be used to embed images inside the web page in articles and sections based on multiple styles, sizes, layouts and hover animations
thumnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { A, Heading, Span } from '$lib'

  const components = 'Img'
</script>

Get started with a collection of responsive image components coded with the utility classes from Tailwind CSS that you can use inside articles, cards, sections, and other components based on multiple styles, sizes, layouts, and hover animations.

## Setup

```html
<script lang="ts">
  import { Img } from "flowbite-svelte";
</script>
```

## Default image

Use this example to show the a responsive image that won’t grow beyond the maximum original width.

```svelte example class="flex justify-center" hideScript
{#include Default.svelte}
```

## Image caption

This example can be used to add a caption for the image often used inside articles. <Span underline class="decoration-primary-500">Warning: the caption is using @html.</Span>

```svelte example class="flex justify-center" hideScript
{#include Caption.svelte}
```

## Rounded corners

Apply rounded corners to the image by using the specific utility classes from Tailwind CSS.

### Border radius

Use this example to apply rounded corners to the image by using the rounded-size class where the size can be anything from small to extra large.

```svelte example class="flex justify-center" hideScript
{#include BorderRadius.svelte}
```

### Full circle

Use this example to mask the image inside a circle using the rounded-full utility class from Tailwind CSS.

```svelte example class="flex justify-center" hideScript
{#include FullCircle.svelte}
```

## Image shadow

This example can be used to show a shadow effect for the image using the shadow-size utility class.

```svelte example class="flex justify-center" hideScript
{#include Shadow.svelte}
```

## Retina-ready

Use the srcset attribute to set Retina-ready images with double resolution.

```svelte example class="flex justify-center" hideScript
{#include Retina.svelte}
```

## Image card

Use this example to make the image a card item with a link and a short text description.

```svelte example class="flex justify-center" hideScript
{#include Card.svelte}
```

## Image effects

Use `effect="grayscale"|"blur"|"invert"|"sepia"|"saturate"|"hue-rotate"` props to change the appearances of the image when being hovered.

```svelte example class="flex justify-center"
{#include Effects.svelte}
```

## Alignment

Align the image component to the left, center or right side of the document page using the `align="left"|"center"|"right"` props.

By default, the image component will be aligned to the left side of the page.

```svelte example hideScript
{#include Alignments.svelte}
```

## Sizes

Set the `size="xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"full"|"none"` props to change the size of image.

```svelte example class="flex justify-center" hideScript
{#include Sizes.svelte}
```

## Enhanced image

**Warning: ** Since `@sveltejs/enhanced-img` uses pre-1.0 versioning and may introduce breaking changes with every minor version release.

Please follow how to set up `@sveltejs/enhanced-img` at https://svelte.dev/docs/kit/images#sveltejs-enhanced-img and install `v0.6.1`.

Use this example for an enhanced image. In this example an image is stored in `src/images` directory.

```svelte example
{#include Enhanced.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

## GitHub Links

<GitHubCompoLinks {components}/>

## LLM Link

<LlmLink />
