---
layout: componentLayout
title: Svelte Images - Flowbite
breadcrumb_title: Svelte Images
component_title: Image
dir: Typography
description: The image component can be used to embed images inside the web page in articles and sections based on multiple styles, sizes, layouts and hover animations
thumnailSize: w-64
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { A, Heading, Badge } from '$lib'

  const components = 'Img'
</script>

Get started with a collection of responsive image components coded with the utility classes from Tailwind CSS that you can use inside articles, cards, sections, and other components based on multiple styles, sizes, layouts, and hover animations.

## Setup

```html
<script>
  import { Img } from "flowbite-svelte";
</script>
```

## Default image

Use this example to show the a responsive image that won’t grow beyond the maximum original width.

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" alt="sample 1" />
```

## Image caption

This example can be used to add a caption for the image often used inside articles. <Badge large>Warning: the caption is using @html.</Badge>

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" alt="sample 1" caption="Image caption" />
```

## Rounded corners

Apply rounded corners to the image by using the specific utility classes from Tailwind CSS.

### Border radius

Use this example to apply rounded corners to the image by using the rounded-size class where the size can be anything from small to extra large.

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" alt="sample 1" class="max-w-lg rounded-lg" />
```

### Full circle

Use this example to mask the image inside a circle using the rounded-full utility class from Tailwind CSS.

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-4@2x.jpg" alt="sample 1" class="h-96 w-96 rounded-full" />
```

## Image shadow

This example can be used to show a shadow effect for the image using the shadow-size utility class.

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-2@2x.jpg" alt="sample 1" class="max-w-xl shadow-xl dark:shadow-gray-800" />
```

## Retina-ready

Use the srcset attribute to set Retina-ready images with double resolution.

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img srcset="/images/examples/image-1.jpg 1x, /images/examples/image-1@2x.jpg 2x" alt="sample 1" class="w-full max-w-xl rounded-lg" />
```

## Image card

Use this example to make the image a card item with a link and a short text description.

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/content-gallery-3.png" alt="sample 1" class="rounded-lg" figClass="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" captionClass="absolute bottom-6 px-4 text-lg text-white" caption="Do you want to get notified when a new component is added to Flowbite?" />
```

## Image effects

Use image effects such as grayscale or blur to change the appearances of the image when being hovered.

### Grayscale

Use the filter option and apply a grayscale to the image element using the grayscale class.

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/content-gallery-3.png" alt="My gallery" class="max-w-lg cursor-pointer rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0" />
```

### Blur

Apply a blur by using the blur-size utility class from Tailwind CSS to an image component.

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/content-gallery-3.png" alt="My gallery" class="max-w-lg rounded-lg blur-xs transition-all duration-300 hover:blur-none" />
```

## Alignment

Align the image component to the left, center or right side of the document page using margin styles.

### Left

By default, the image component will be aligned to the left side of the page.

```svelte example hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" class="max-w-lg" alt="sample 1" />
```

### Center

Horizontally align the image to the center of the page using the `mx-auto` class.

```svelte example hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" class="mx-auto max-w-lg" alt="sample 1" />
```

### Right

Use the `ms-auto` class to align the image to the right side of the page.

```svelte example hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" class="ms-auto max-w-lg" alt="sample 1" />
```

## Sizes

Set the size of the image using the w-size and h-size or max-w-size utility classes from Tailwind CSS to set the width and height of the element.

### Small

Use the `max-w-xs` class to set a small size of the image.

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" class="max-w-xs" alt="sample 1" />
```

### Medium

Use the `max-w-md` class to set a medium size of the image.

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" class="max-w-md" alt="sample 1" />
```

### Large

Use the max-w-xl class to set a large size of the image.

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" class="max-w-xl" alt="sample 1" />
```

### Full width

Use the max-w-full class to set the full width of the image as long as it doesn’t become larger than the original source.

```svelte example class="flex justify-center" hideScript
<script>
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" class="max-w-full" alt="sample 1" />
```

## Enhanced image

**Warning: ** Since `@sveltejs/enhanced-img` uses pre-1.0 versioning and may introduce breaking changes with every minor version release.

Use this example for an enhanced image. In this example an image is stored in `src/images` directory.

```svelte example
<script lang="ts">
  import { EnhancedImg } from "flowbite-svelte";
  import imagePicture from "/src/images/content-gallery-3.png?enhanced";
</script>

<EnhancedImg src={imagePicture} alt="some alt text" />
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

<GitHubCompoLinks {components}/>
