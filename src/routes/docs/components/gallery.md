---
layout: componentLayout
title: Svelte Gallery (Masonry) - Flowbite
breadcrumb_title: Svelte Gallery (Masonry)
component_title: Gallery
dir: Components
description: Use the image gallery component based on a masonry grid layout using flex and grid classes from Tailwind CSS to show multiple pictures based on various styles
thumbnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The gallery component can be used to show multiple images inside a masonry grid layout styles with the utility-first classes from Tailwind CSS to show a collection of pictures to your users based on various layouts, styles, sizes, and colors.

This component is recommended for usage within marketing UI interfaces and website sections when you want to show pictures of your team members, office pictures, or even case study images.

## Set up

Import `Gallery` in the script tag.

```svelte example hideOutput
<script lang="ts">
  import { Gallery } from "flowbite-svelte";
</script>
```

## Default gallery

Use this component to show a collection of images inside a gallery.

Number of rows in the gallery is set by passing the `grid-cols-{n}` Tailwind class (including the reactive prefix). Spacing between images is set by `gap-{n}` class. If you don't set them it behaves like `grid-cols-1` and `gap:inherit`.

Example below show a gallery with three pictures on a row.

```svelte example class="flex flex-wrap gap-2"
{#include Default.svelte}
```

## Masonry grid

This example can be used to show the images inside a masonry grid layouts with four columns.

```svelte example class="flex flex-wrap gap-2"
{#include Masonry.svelte}
```

## Featured image

This example can be used to feature the most important image and show a row of five pictures below.

```svelte example class="flex flex-wrap gap-2"
{#include Featured.svelte}
```

## Quad gallery

Use this example to show four larger images with two items on a row.

```svelte example class="flex flex-wrap gap-2"
{#include Quad.svelte}
```

## Gallery with tag filters

Use this example to show a list of tags and filter the images below based on the activately selected tag.

```svelte example class="flex flex-wrap gap-2"
{#include Filters.svelte}
```

## Heterogeneous gallery

Gallery items don't have to be all the same but then you need to list them manually - don't set the `items` property.

```svelte example class="flex flex-wrap gap-2" hideScript
{#include Heterogeneous.svelte}
```

## Custom image rendering

This example shows how to get a complete control over the gallery images look and feel.

```svelte example class="flex flex-wrap gap-2"
{#include Custom.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Gallery](https://flowbite.com/docs/components/gallery/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
