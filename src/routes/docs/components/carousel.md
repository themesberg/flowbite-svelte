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
  import { TableProp, TableDefaultRow, } from '../../utils'
  // import { props as items } from '../../props/Carousel.json'
  // import { props as items2 } from '../../props/Indicators.json'
  // import { props as items3 } from '../../props/Controls.json'
  // import { props as items4 } from '../../props/ControlButton.json'
  // import { props as items5 } from '../../props/Thumbnails.json'
  // import { props as items6 } from '../../props/Thumbnail.json'
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
  import { images } from './imageData/+server.js';
</script>

<div class="max-w-4xl">
  <Carousel {images} duration=3000 />
</div>
```

## Controls

Use the internal `Controls` component to listen to click events which will trigger the slide event from the carousel component to each direction.

You can customize the control elements with the `class` property.

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte';
  import { images } from './imageData/+server.js';
</script>

<div class="max-w-4xl">
  <Carousel {images} let:Controls>
    <Controls />
  </Carousel>
</div>
```

## Indicators

Show the carousel indicators by adding the internal `Indicators` component.

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte';
  import { images } from './imageData/+server.js';
</script>

<div class="max-w-4xl">
  <Carousel {images} let:Indicators>
    <Indicators />
  </Carousel>
</div>
```

## Thumbnails

You can control the `Carousel` component externally by the `index` prop. Here is an example how to use the `Thumbnails` component to achieve that.

```svelte example
<script>
  import { Carousel, Thumbnails } from 'flowbite-svelte';
  import { images } from './imageData/+server.js';

  let index = 0;
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} let:Indicators let:Controls bind:index >
    <Controls />
    <Indicators  />
  </Carousel>
  <Thumbnails {images} bind:index/>
</div>
```

## Caption

The `Carousel` exposes the `change` event containing info about the currently displayed image. You can use it to build custom caption for the carousel.

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte';
  import { images } from './imageData/+server.js';

  let index = 0;
  let image;
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} let:Indicators let:Controls on:change={({detail})=> image=detail}>
    <Controls />
    <Indicators />
  </Carousel>

  <div class='rounded h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center'>
    {image?.alt}
  </div>
</div>
```

## Customization

### Basic customization 

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte';
  import { images } from './imageData/+server.js';
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} let:Indicators let:Controls class="rounded-none ring-4 ring-green-500 border-4 border-white dark:border-gray-800">
    <Indicators class="border border-white rounded-md p-2" />
    <Controls class="items-start text-red-400 dark:text-green-400 pt-4" />
  </Carousel>
</div>
```

### Advanced customization

```svelte example
<script>
  import { Carousel, Thumbnails, Button, Indicator } from 'flowbite-svelte';
  import { images } from './imageData/+server.js';
  let index = 0;
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} let:Indicators let:Controls bind:index>
    <Indicators let:selected let:index >
      <Indicator color={selected? 'red': 'green'} class="w-5 h-5  text-white border border-white {selected? 'opacity-100': 'opacity-80'}">
        {index}
      </Indicator>
    </Indicators>
    <Controls let:changeSlide let:ControlButton>
      <ControlButton name="Previous" forward={false} on:click={changeSlide(false)} class="bg-red-300/50 dark:bg-red-400/50" />
      <Button pill class="py-2 px-3 absolute top-1/2 -translate-y-1/2 right-4 font-bold" on:click={changeSlide(true)}>+</Button>
    </Controls>
  </Carousel>
  <Thumbnails class="bg-transparent gap-3" let:Thumbnail let:image let:selected {images} bind:index>
    <Thumbnail {...image} {selected} class="rounded-md shadow-xl hover:outline hover:outline-primary-500" />
  </Thumbnails>
</div>
```



### Carousel transition

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte';
  import { images } from './imageData/+server.js';
  import { fly } from 'svelte/transition';

  const myFly = (x) => fly(x, { delay: 250, duration: 900, x: 700 });
</script>

<div class="max-w-4xl">
  <Carousel {images} transition={myFly} let:Controls let:Indicators>
    <Controls />
    <Indicators />
  </Carousel>
</div>
```


## Props

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<!-- 
### Carousel

<TableProp>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

### Indicators

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

### Controls

<TableProp>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

### ControlButton

<TableProp>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

### Thumbnails

<TableProp>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

### Thumbnail

<TableProp>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>
-->

## References

- [Flowbite Carousel](https://flowbite.com/docs/components/carousel/)
