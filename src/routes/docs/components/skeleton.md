---
layout: componentLayout
title: Svelte Skeleton - Flowbite
breadcrumb_title: Svelte Skeleton
component_title: Skeleton
dir: Components
description: The skeleton component can be used as an alternative loading indicator to the spinner by mimicking the content that will be loaded such as text, images, or video
thumnailSize: w-40
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

Use the skeleton component to indicate a loading status with placeholder elements that look very similar to the type of content that is being loaded such as paragraphs, images, videos, and more.

## Setup

```svelte example hideOutput
<script>
  import { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder } from 'flowbite-svelte';
</script>
```

## Default skeleton

```svelte example
<script>
  import { Skeleton } from 'flowbite-svelte';
</script>

<Skeleton size="sm" class="my-8" />
<Skeleton size="md" class="my-8" />
<Skeleton size="lg" class="my-8" />
<Skeleton size="xl" class="my-8" />
<Skeleton size="xxl" class="mt-8 mb-2.5" />
```

## Image placeholder

To display image placeholder without text, use `imgOnly` prop as seen in the following examples.

```svelte example
<script>
  import { ImagePlaceholder } from 'flowbite-svelte';
</script>

<ImagePlaceholder />
<ImagePlaceholder imgHeight="60" class="mt-8" />
<ImagePlaceholder imgOnly class="mt-8" />
```

## Video placeholder

```svelte example
<script>
  import { VideoPlaceholder } from 'flowbite-svelte';
</script>

<VideoPlaceholder />
<VideoPlaceholder size="md" class="mt-8" />
<VideoPlaceholder size="lg" class="mt-8" />
<VideoPlaceholder size="xl" class="mt-8" />
<VideoPlaceholder size="xxl" class="mt-8" />
```

## Text placeholder

```svelte example
<script>
  import { TextPlaceholder } from 'flowbite-svelte';
</script>

<TextPlaceholder />
<TextPlaceholder size="md" class="mt-8" />
<TextPlaceholder size="lg" class="mt-8" />
<TextPlaceholder size="xl" class="mt-8" />
<TextPlaceholder size="xxl" class="mt-8" />
```

## Card placeholder

```svelte example
<script>
  import { CardPlaceholder } from 'flowbite-svelte';
</script>

<CardPlaceholder />
<CardPlaceholder size="md" class="mt-8" />
<CardPlaceholder size="lg" class="mt-8" />
<CardPlaceholder size="xl" class="mt-8" />
<CardPlaceholder size="xxl" class="mt-8" />
```

## Widget placeholder

```svelte example
<script>
  import { WidgetPlaceholder } from 'flowbite-svelte';
</script>

<WidgetPlaceholder />
```

## List placeholder

```svelte example
<script>
  import { ListPlaceholder } from 'flowbite-svelte';
</script>

<ListPlaceholder />
```

## Testimonial placeholder

```svelte example
<script>
  import { TestimonialPlaceholder } from 'flowbite-svelte';
</script>

<TestimonialPlaceholder />
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### CardPlaceholder styling

- Use the `class` prop to overwrite `divClass`.

### ImagePlaceholder styling

- Use the `class` prop to overwrite `divClass`.

### ListPlaceholder styling

- Use the `class` prop to overwrite `divClass`.

### Skeleton styling

- Use the `class` prop to overwrite `divClass`.

### TestimonialPlaceholder styling

- Use the `class` prop to overwrite `divClass`.

### TextPlaceholder styling

- Use the `class` prop to overwrite `divClass`.

### VideoPlaceholder styling

- Use the `class` prop to overwrite `divClass`.

### WidgetPlaceholder styling

- Use the `class` prop to overwrite `divClass`.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Skeleton](https://flowbite.com/docs/components/sidebar/)

<GitHubCompoLinks />
