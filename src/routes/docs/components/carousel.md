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
  import { Carousel } from 'flowbite-svelte';
  // ./imageData/+server.js has the following
  export const images = [
    {
      alt: 'Cosmic timetraveler',
      src: '/images/carousel/cosmic-timetraveler-pYyOZ8q7AII-unsplash.webp',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
    },
    {
      alt: 'Cristina Gottardi',
      src: '/images/carousel/cristina-gottardi-CSpjU6hYo_0-unsplash.webp',
      title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
    },
    {
      alt: 'Johannes Plenio',
      src: '/images/carousel/johannes-plenio-RwHv7LgeC7s-unsplash.webp',
      title: 'johannes-plenio-RwHv7LgeC7s-unsplash.com'
    },
    {
      alt: 'Jonatan Pie',
      src: '/images/carousel/jonatan-pie-3l3RwQdHRHg-unsplash.webp',
      title: 'jonatan-pie-3l3RwQdHRHg-unsplash.com'
    },
    {
      alt: 'Mark Harpur',
      src: '/images/carousel/mark-harpur-K2s_YE031CA-unsplash.webp',
      title: 'mark-harpur-K2s_YE031CA-unsplash'
    },
    {
      alt: 'Pietro De Grandi',
      src: '/images/carousel/pietro-de-grandi-T7K4aEPoGGk-unsplash.webp',
      title: 'pietro-de-grandi-T7K4aEPoGGk-unsplash'
    },
    {
      alt: 'Sergey Pesterev',
      src: '/images/carousel/sergey-pesterev-tMvuB9se2uQ-unsplash.webp',
      title: 'sergey-pesterev-tMvuB9se2uQ-unsplash'
    },
    {
      alt: 'Solo travel goals',
      src: '/images/carousel/solotravelgoals-7kLufxYoqWk-unsplash.webp',
      title: 'solotravelgoals-7kLufxYoqWk-unsplash'
    }
  ];
</script>
```

## Default Carousel

Set the `duration` prop to define the time interval for chaning images. Time is set in miliseconds.

The default value for `duration` is set to zero that means no autochange of images. In that case you can control which image is displayed by the `index` prop.

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte';
  import images from './imageData/images.json';
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
  import { Carousel, Controls } from 'flowbite-svelte';
  import images from './imageData/images.json';
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
  import { Carousel, Indicators } from 'flowbite-svelte';
  import images from './imageData/images.json';
</script>

<div class="max-w-4xl">
  <Carousel {images} >
    <Indicators />
  </Carousel>
</div>
```

## Thumbnails

You can control the `Carousel` component externally by the `index` prop. Here is an example how to use the `Thumbnails` component to achieve that.

```svelte example
<script>
  import { Carousel, Controls, Indicators, Thumbnails } from 'flowbite-svelte';
  import images from './imageData/images.json';

  let index = $state(0);
  let forward = true; // sync animation direction between Thumbnails and Carousel
  $inspect(index)
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} {forward} bind:index>
    <Controls />
    <Indicators />
  </Carousel>
  <Thumbnails {images} {forward} bind:index />
</div>
```

## Caption

The `Carousel` exposes the `change` event containing info about the currently displayed image. You can use it to build custom caption for the carousel.

```svelte example
<script>
  import { Carousel, Controls, Indicators } from 'flowbite-svelte';
  import images from './imageData/images.json';

  let index = 0;
  let image;
</script>

<div class="max-w-4xl space-y-4">

  <Carousel {images} onchange={(detail) => (image = detail)}>
    <Controls />
    <Indicators />
  </Carousel>

  <div class="rounded-sm h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center">
    {image?.alt}
  </div>
</div>
```

## Carousel with links

You can use `slide` snippet and internal component `Slide` to control the image display. Here's an example how to wrap images with the anchor element.

```svelte example
<script>
  import { Carousel, Indicators} from 'flowbite-svelte';
  import images from './imageData/images.json';
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} duration={3900}>
    {#snippet slide({index, Slide})}
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
  import { Carousel, Controls, Indicators} from 'flowbite-svelte';
  import images from './imageData/images.json';
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} imgClass="object-contain h-full w-fit rounded-xs" class="rounded-md ring-4 ring-green-500 border-4 border-white dark:border-gray-800 min-h-[320px] bg-gray-200">
    <Indicators class="border border-white rounded-md p-2" />
    <Controls class="items-center text-red-400 dark:text-green-400 pt-4" />
  </Carousel>
</div>
```

### Advanced customization

```svelte example
<script>
  import { Button, Carousel, ControlButton, Controls, Indicator, Indicators, Thumbnails } from 'flowbite-svelte';
  import { CaretRightOutline } from 'flowbite-svelte-icons';
  import images from './imageData/images.json';
  let index = 0;
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} bind:index>
    <Indicators>
      {#snippet children(selected, index)}
      <Indicator color={selected ? 'red' : 'green'} class="w-5 h-5 text-white border border-white {selected ? 'opacity-100' : 'opacity-80'}">
        {index}
      </Indicator>
      {/snippet}
    </Indicators>
    <Controls>
      {#snippet children(changeSlide)}
      <ControlButton name="Previous" forward={false} onclick={()=>changeSlide(false)} class="bg-red-300/50 dark:bg-red-400/50" />
      <Button pill class="p-2 absolute top-1/2 -translate-y-1/2 end-4 font-bold" onclick={()=>changeSlide(true)}>
        <CaretRightOutline />
      </Button>
      {/snippet}
    </Controls>
  </Carousel>
  <Thumbnails class="bg-transparent gap-3" {images} bind:index>
    {#snippet children({image, selected, Thumbnail})}
    <Thumbnail {...image} class="rounded-md shadow-xl hover:outline hover:outline-primary-500 {selected ? 'outline-4 outline-primary-400':''}"/>
    {/snippet}
  </Thumbnails>
</div>
```

### Custom Carousel transition

```svelte example
<script>
  import { Carousel, Controls, Indicators } from 'flowbite-svelte';
  import images from './imageData/images.json';
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

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
