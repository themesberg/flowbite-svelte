---
layout: componentLayout
title: Svelte Carousel - Flowbite
breadcrumb_title: Svelte Carousel
component_title: Carousel
dir: Components
description: Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options
thumnailSize: w-48
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  const dirName = toKebabCase(component_title)
</script>

The carousel component can be used to cycle through a set of elements using custom options, controls, and indicators.

## Setup

```svelte example hideOutput
<script>
  import { Carousel } from "flowbite-svelte-next";
  // ./imageData/+server.js has the following
  export const images = [
    {
      alt: "Cosmic timetraveler",
      src: "/images/carousel/cosmic-timetraveler-pYyOZ8q7AII-unsplash.webp",
      title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com"
    },
    {
      alt: "Cristina Gottardi",
      src: "/images/carousel/cristina-gottardi-CSpjU6hYo_0-unsplash.webp",
      title: "cristina-gottardi-CSpjU6hYo_0-unsplash.com"
    },
    {
      alt: "Johannes Plenio",
      src: "/images/carousel/johannes-plenio-RwHv7LgeC7s-unsplash.webp",
      title: "johannes-plenio-RwHv7LgeC7s-unsplash.com"
    },
    {
      alt: "Jonatan Pie",
      src: "/images/carousel/jonatan-pie-3l3RwQdHRHg-unsplash.webp",
      title: "jonatan-pie-3l3RwQdHRHg-unsplash.com"
    },
    {
      alt: "Mark Harpur",
      src: "/images/carousel/mark-harpur-K2s_YE031CA-unsplash.webp",
      title: "mark-harpur-K2s_YE031CA-unsplash"
    },
    {
      alt: "Pietro De Grandi",
      src: "/images/carousel/pietro-de-grandi-T7K4aEPoGGk-unsplash.webp",
      title: "pietro-de-grandi-T7K4aEPoGGk-unsplash"
    },
    {
      alt: "Sergey Pesterev",
      src: "/images/carousel/sergey-pesterev-tMvuB9se2uQ-unsplash.webp",
      title: "sergey-pesterev-tMvuB9se2uQ-unsplash"
    },
    {
      alt: "Solo travel goals",
      src: "/images/carousel/solotravelgoals-7kLufxYoqWk-unsplash.webp",
      title: "solotravelgoals-7kLufxYoqWk-unsplash"
    }
  ];
</script>
```

## Default Carousel

Set the `duration` prop to define the time interval for chaning images. Time is set in miliseconds.

The default value for `duration` is set to zero that means no autochange of images. In that case you can control which image is displayed by the `index` prop.

```svelte example
<script>
  import { Carousel } from "flowbite-svelte-next";
  import images from "./imageData/images.json";
</script>

<div class="max-w-4xl">
  <Carousel {images} duration="3000" />
</div>
```

## Controls

Use the internal `Controls` component to listen to click events which will trigger the slide event from the carousel component to each direction.

You can customize the control elements with the `class` property.

```svelte example
<script>
  import { Carousel, Controls } from "flowbite-svelte-next";
  import images from "./imageData/images.json";
</script>

<div class="max-w-4xl">
  <Carousel {images}>
    <Controls />
  </Carousel>
</div>
```

## Indicators

Show the carousel indicators by adding the internal `Indicators` component.

```svelte example
<script>
  import { Carousel, Indicators } from "flowbite-svelte-next";
  import images from "./imageData/images.json";
</script>

<div class="max-w-4xl">
  <Carousel {images}>
    <Indicators />
  </Carousel>
</div>
```

## Thumbnails

You can control the `Carousel` component externally by the `index` prop. Here is an example how to use the `Thumbnails` component to achieve that.

```svelte example
<script>
  import { Carousel, Controls, Indicators, Thumbnails } from "flowbite-svelte-next";
  import images from "./imageData/images.json";

  let index = $state(0);
  let forward = true; // sync animation direction between Thumbnails and Carousel
  $inspect(index);
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} {forward} bind:index>
    <Controls />
    <Indicators />
  </Carousel>
  <Thumbnails {images} bind:index />
</div>
```

## Caption

The `Carousel` exposes the `change` event containing info about the currently displayed image. You can use it to build custom caption for the carousel.

```svelte example
<script>
  import { Carousel, Controls, Indicators } from "flowbite-svelte-next";
  import images from "./imageData/images.json";

  let index = 0;
  let image;
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} onchange={(detail) => (image = detail)}>
    <Controls />
    <Indicators />
  </Carousel>

  <div class="my-2 h-10 rounded-sm bg-gray-300 p-2 text-center dark:bg-gray-700 dark:text-white">
    {image?.alt}
  </div>
</div>
```

## Carousel with links

You can use `slide` snippet and internal component `Slide` to control the image display. Here's an example how to wrap images with the anchor element.

```svelte example
<script>
  import { Carousel, Indicators } from "flowbite-svelte-next";
  import images from "./imageData/images.json";
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} duration={3900}>
    {#snippet slide({ index, Slide })}
      <a href="http://google.com/search?q={images[index]?.title}" target="_blank">
        <Slide image={images[index]} />
      </a>
    {/snippet}
    <!-- Indicators / -->
  </Carousel>
</div>
```

## Customization

### Basic customization

```svelte example
<script>
  import { Carousel, Controls, Indicators } from "flowbite-svelte-next";
  import images from "./imageData/images.json";
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} imgClass="object-contain h-full w-fit rounded-xs" class="min-h-[320px] rounded-md border-4 border-white bg-gray-200 ring-4 ring-green-500 dark:border-gray-800">
    <Indicators class="rounded-md border border-white p-2" />
    <Controls class="items-center pt-4 text-red-400 dark:text-green-400" />
  </Carousel>
</div>
```

### Advanced customization

```svelte example
<script>
  import { Button, Carousel, ControlButton, Controls, Indicator, Indicators, Thumbnails } from "flowbite-svelte-next";
  import { CaretRightOutline } from "flowbite-svelte-icons";
  import images from "./imageData/images.json";
  let index = 0;
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} bind:index>
    <Indicators>
      {#snippet children({ selected, index })}
        <Indicator color={selected ? "red" : "green"} class="h-5 w-5 border border-white text-white {selected ? 'opacity-100' : 'opacity-80'}">
          {index}
        </Indicator>
      {/snippet}
    </Indicators>
    <Controls>
      {#snippet children(changeSlide)}
        <ControlButton name="Previous" forward={false} onclick={() => changeSlide(false)} class="bg-red-300/50 dark:bg-red-400/50" />
        <Button pill class="absolute end-4 top-1/2 -translate-y-1/2 p-2 font-bold" onclick={() => changeSlide(true)}>
          <CaretRightOutline />
        </Button>
      {/snippet}
    </Controls>
  </Carousel>
  <Thumbnails class="gap-3 bg-transparent" {images} bind:index>
    {#snippet children({ image, selected, Thumbnail })}
      <Thumbnail {selected} {...image} class="hover:outline-primary-500 rounded-md shadow-xl hover:outline {selected ? 'outline-primary-400 outline-4' : ''}" />
    {/snippet}
  </Thumbnails>
</div>
```

### Custom Carousel transition

```svelte example
<script>
  import { Carousel, Controls, Indicators } from "flowbite-svelte-next";
  import images from "./imageData/images.json";
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  const scaleAnimation = (x) => scale(x, { duration: 500, easing: quintOut });
</script>

<div class="max-w-4xl">
  <Carousel {images} transition={scaleAnimation}>
    <Controls />
    <Indicators />
  </Carousel>
</div>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Carousel](https://flowbite.com/docs/components/carousel/)

<GitHubCompoLinks />
