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
  import { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder } from "flowbite-svelte";
</script>
```

## Default skeleton

```svelte example
<script>
  import { Skeleton } from "flowbite-svelte";
</script>

<Skeleton size="sm" class="my-8" />
<Skeleton size="md" class="my-8" />
<Skeleton size="lg" class="my-8" />
<Skeleton size="xl" class="my-8" />
<Skeleton size="2xl" class="mt-8 mb-2.5" />
```

## Image placeholder

To display image placeholder without text, use `imgOnly` prop as seen in the following examples.

```svelte example class="flex flex-col gap-8"
<script>
  import { ImagePlaceholder } from "flowbite-svelte";
</script>

<ImagePlaceholder size="sm" />
<ImagePlaceholder imgOnly />
<ImagePlaceholder size="md" />
<ImagePlaceholder size="lg" />
```

## Video placeholder

```svelte example
<script>
  import { VideoPlaceholder } from "flowbite-svelte";
</script>

<VideoPlaceholder />
<VideoPlaceholder size="md" class="mt-8" />
<VideoPlaceholder size="lg" class="mt-8" />
<VideoPlaceholder size="xl" class="mt-8" />
<VideoPlaceholder size="2xl" class="mt-8" />
```

## Text placeholder

```svelte example
<script>
  import { TextPlaceholder } from "flowbite-svelte";
</script>

<TextPlaceholder />
<TextPlaceholder size="md" class="mt-8" />
<TextPlaceholder size="lg" class="mt-8" />
<TextPlaceholder size="xl" class="mt-8" />
<TextPlaceholder size="2xl" class="mt-8" />
```

## Card placeholder

```svelte example
<script>
  import { CardPlaceholder } from "flowbite-svelte";
</script>

<CardPlaceholder />
<CardPlaceholder size="md" class="mt-8" />
<CardPlaceholder size="lg" class="mt-8" />
<CardPlaceholder size="xl" class="mt-8" />
<CardPlaceholder size="2xl" class="mt-8" />
```

## Widget placeholder

```svelte example
<script>
  import { WidgetPlaceholder } from "flowbite-svelte";
</script>

<WidgetPlaceholder />
```

## List placeholder

```svelte example
<script>
  import { ListPlaceholder } from "flowbite-svelte";
</script>

<ListPlaceholder />
```

## Testimonial placeholder

```svelte example
<script>
  import { TestimonialPlaceholder } from "flowbite-svelte";
</script>

<TestimonialPlaceholder />
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Skeleton](https://flowbite.com/docs/components/sidebar/)

<GitHubCompoLinks />
