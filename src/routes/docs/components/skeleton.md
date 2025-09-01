---
layout: componentLayout
title: Svelte Skeleton - Flowbite
breadcrumb_title: Svelte Skeleton
component_title: Skeleton
dir: Components
description: The skeleton component can be used as an alternative loading indicator to the spinner by mimicking the content that will be loaded such as text, images, or video
thumnailSize: w-40
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

Use the skeleton component to indicate a loading status with placeholder elements that look very similar to the type of content that is being loaded such as paragraphs, images, videos, and more.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder } from "flowbite-svelte";
</script>
```

## Default skeleton

```svelte example
{#include Default.svelte}
```

## Image placeholder

To display image placeholder without text, use `imgOnly` prop as seen in the following examples.

```svelte example class="flex flex-col gap-8"
{#include Image.svelte}
```

## Video placeholder

```svelte example
{#include Video.svelte}
```

## Text placeholder

```svelte example
{#include Text.svelte}
```

## Card placeholder

```svelte example
{#include Card.svelte}
```

## Widget placeholder

```svelte example
{#include Widget.svelte}
```

## List placeholder

```svelte example
{#include List.svelte}
```

## Testimonial placeholder

```svelte example
{#include Testimonial.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Skeleton](https://flowbite.com/docs/components/sidebar/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
