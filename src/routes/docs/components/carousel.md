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
  import { P, A } from '$lib'
  import { props as items } from '../../props/Carousel.json'
  import { props as items2 } from '../../props/CarouselTransition.json'
  import { props as items3 } from '../../props/Caption.json'
  import { props as items4 } from '../../props/Indicator.json'
  import { props as items5 } from '../../props/Slide.json'
  import { props as items6 } from '../../props/Thumbnail.json'
</script>



The carousel component can be used to cycle through a set of elements using custom options, controls, and indicators.

## Setup

```svelte example hideOutput
<script>
  import { Carousel, CarouselTransition } from 'flowbite-svelte'
  // ./imageData/+server.js has the following
  export const images = [
  {
    id: 0,
    name: "Cosmic timetraveler",
    imgurl: "/images/carousel/cosmic-timetraveler-pYyOZ8q7AII-unsplash.webp",
    attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
  },
  {
    id: 1,
    name: "Cristina Gottardi",
    imgurl: "/images/carousel/cristina-gottardi-CSpjU6hYo_0-unsplash.webp",
    attribution: "cristina-gottardi-CSpjU6hYo_0-unsplash.com",
  },
  {
    id: 2,
    name: "Johannes Plenio",
    imgurl: "/images/carousel/johannes-plenio-RwHv7LgeC7s-unsplash.webp",
    attribution: "johannes-plenio-RwHv7LgeC7s-unsplash.com",
  },
  {
    id: 3,
    name: "Jonatan Pie",
    imgurl: "/images/carousel/jonatan-pie-3l3RwQdHRHg-unsplash.webp",
    attribution: "jonatan-pie-3l3RwQdHRHg-unsplash.com",
  },
  {
    id: 4,
    name: "Mark Harpur",
    imgurl: "/images/carousel/mark-harpur-K2s_YE031CA-unsplash.webp",
    attribution: "mark-harpur-K2s_YE031CA-unsplash",
  },
  {
    id: 5,
    name: "Pietro De Grandi",
    imgurl: "/images/carousel/pietro-de-grandi-T7K4aEPoGGk-unsplash.webp",
    attribution: "pietro-de-grandi-T7K4aEPoGGk-unsplash",
  },
  {
    id: 6,
    name: "Sergey Pesterev",
    imgurl: "/images/carousel/sergey-pesterev-tMvuB9se2uQ-unsplash.webp",
    attribution: "sergey-pesterev-tMvuB9se2uQ-unsplash",
  },
  {
    id: 7,
    name: "Solo travel goals",
    imgurl: "/images/carousel/solotravelgoals-7kLufxYoqWk-unsplash.webp",
    attribution: "solotravelgoals-7kLufxYoqWk-unsplash",
  },
];
</script>
```

## Default Carousel

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
</script>

<div class="max-w-4xl">
  <Carousel {images} />
</div>
```

## Loop

<p>Use `loop` prop to loop the carousel. Use `duration=number` to set the interval</p>

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
  let showThumbs=false
  let showCaptions=false
</script>

<div class="max-w-4xl">
  <Carousel {images} loop {showCaptions} {showThumbs} duration="3000"/>
</div>
```

## Without thumbnails

<p>The `showThumbs` is set to `true`. Set it to `false` to hide it.</p>

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
  let showThumbs=false
</script>

<div class="max-w-4xl">
  <Carousel {images} {showThumbs}/>
</div>
```

## Without caption

<p>To hide the caption, set `showCaptions` to `false`.</p>

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
  let showThumbs=false
  let showCaptions=false
</script>

<div class="max-w-4xl">
  <Carousel {images} {showThumbs} {showCaptions}/>
</div>
```

## Without indicators

<p>To hide the indicators, set `showIndicators` to `false`.</p>

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
  let showThumbs=false
  let showCaptions=false
  let showIndicators=false
</script>

<div class="max-w-4xl">
  <Carousel {images} {showThumbs} {showCaptions} {showIndicators}/>
</div>
```

## Without slide controllers

<p>To hide the slide controllers, set `slideControls` to `false`.</p>

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
  let showThumbs=false
  let showCaptions=false
  let slideControls=false
</script>

<div class="max-w-4xl">
  <Carousel {images} {showThumbs} {showCaptions} {slideControls}/>
</div>
```

## Custom slide controllers

<p>You can add custom slide controllers using <a href="/icons/heroicons">Svelte-Heros icons</a>. Change the size using the `iconSize` prop and style with the `iconClass` prop.</p>

```svelte example hideOutput
<script>
  import { Carousel, ChevronLeft, ChevronRight } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';

  let icons={
    next: ChevronRight,
    prev: ChevronLeft,
  }
  let iconSize =20
  let iconClass = 'text-white dark:text-red-500';
  let showThumbs = false;
  let showCaptions = false;
</script>

<div class="max-w-4xl">
  <Carousel {images} {showThumbs} {showCaptions} {icons} {iconSize} {iconClass}/>
</div>
```

## Carousel transition

```svelte example
<script>
  import { CarouselTransition } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
</script>

<div class="max-w-4xl">
  <CarouselTransition {images} transitionType="fade" transitionParams="{{delay: 300, duration: 500}}"/>
</div>
```

## Loop

<p>Use `loop` prop to loop the carousel. Use `duration=number` to set the interval</p>

```svelte example
<script>
  import { CarouselTransition } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
</script>

<div class="max-w-4xl">
  <CarouselTransition {images} loop transitionType="fade" transitionParams="{{ duration: 1000 }}" showCaptions={false} showThumbs={false} duration="5000" />
</div>
```

## Fly example

```svelte example
<script>
  import { CarouselTransition } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
</script>
<div class="max-w-4xl">
  <CarouselTransition {images} transitionType="fly" transitionParams="{{delay: 250, duration: 300, x: 100}}" showCaptions={false} showThumbs={false} />
</div>
```

## Slide example

```svelte example
<script>
  import { CarouselTransition } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
  import { bounceInOut } from 'svelte/easing';
</script>
<div class="max-w-4xl">
  <CarouselTransition {images} transitionType="slide" transitionParams="{{duration: 1500, easing: bounceInOut}}" showCaptions={false} showThumbs={false}/>
</div>
```

## Props

<p>The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.</p>

### Carousel

<TableProp>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

### CarouselTransition

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

### Caption

<TableProp>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

### Indicator

<TableProp>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

### Slide

<TableProp>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

### Thumbnail

<TableProp>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/carousel/" target="_blank" rel="noreferrer" class="link"
    >Flowbite carousel</A
  >
</P>
