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
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../../utils'
  import { P, A } from '$lib'
  import componentData1 from '../../component-data/CardPlaceholder.json'
  import componentData2 from '../../component-data/ImagePlaceholder.json'
  import componentData3 from '../../component-data/ListPlaceholder.json'
  import componentData4 from '../../component-data/Skeleton.json'
  import componentData5 from '../../component-data/TestimonialPlaceholder.json'
  import componentData6 from '../../component-data/TextPlaceholder.json'
  import componentData7 from '../../component-data/VideoPlaceholder.json'
  import componentData8 from '../../component-data/WidgetPlaceholder.json'
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

```svelte example
<script>
  import { ImagePlaceholder } from 'flowbite-svelte';
</script>

<ImagePlaceholder />
<ImagePlaceholder imgHeight={60} class="mt-8" />
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

### CardPlaceholder

- Use the `class` prop to overwrite `divClass`.

<CompoAttributesViewer componentData={componentData1}/>

### ImagePlaceholder

- Use the `class` prop to overwrite `divClass`.

<CompoAttributesViewer componentData={componentData2}/>

### ListPlaceholder

- Use the `class` prop to overwrite `divClass`.

<CompoAttributesViewer componentData={componentData3}/>

### Skeleton

- Use the `class` prop to overwrite `divClass`.

<CompoAttributesViewer componentData={componentData4}/>

### TestimonialPlaceholder

- Use the `class` prop to overwrite `divClass`.

<CompoAttributesViewer componentData={componentData5}/>

### TextPlaceholder

- Use the `class` prop to overwrite `divClass`.

<CompoAttributesViewer componentData={componentData6}/>

### VideoPlaceholder

- Use the `class` prop to overwrite `divClass`.

<CompoAttributesViewer componentData={componentData7}/>

### WidgetPlaceholder

- Use the `class` prop to overwrite `divClass`.

<CompoAttributesViewer componentData={componentData8}/>

## References

- [Flowbite Skeleton](https://flowbite.com/docs/components/sidebar/)
