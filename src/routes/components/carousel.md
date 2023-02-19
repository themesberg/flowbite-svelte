---
layout: componentLayout
title: Svelte Carousel - Flowbite
breadcrumb_title: Carousel
dir: Components
description: Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow, MetaTag } from '../utils'
  
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  // Props table
  import { props as items } from '../props/Carousel.json'
  import { props as items2 } from '../props/CarouselTransition.json'
	let propHeader = ['Name', 'Type', 'Default']
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<ExampleDiv>
<GitHubSource href="carousels/Carousel.svelte">Carousel</GitHubSource>
<GitHubSource href="carousels/CarouselTransition.svelte">CarouselTransition</GitHubSource>
</ExampleDiv>

The carousel component can be used to cycle through a set of elements using custom options, controls, and indicators.

<Htwo label="Setup" />

```html
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

<Htwo label="Default Carousel" />

```svelte example
<script>
  import { Carousel } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
</script>

<div class="max-w-4xl">
  <Carousel {images} />
</div>
```

<Htwo label="Loop" />

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

<Htwo label="Without thumbnails"/>

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

<Htwo label="Without caption" />

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

<Htwo label="Without indicators" />

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

<Htwo label="Without slide controllers" />

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

<Htwo label="Custom slide controllers" />

<p>You can add custom slide controllers using <a href="/icons/heroicons">Svelte-Heros icons</a>. Change the size using the `iconSize` prop and style with the `iconClass` prop.</p>

```html
<script>
  import {ChevronDoubleLeft, ChevronDoubleRight } from 'svelte-heros-v2'
  let icons={
    next: ChevronDoubleRight,
    prev: ChevronDoubleLeft,
  }
  let iconSize =20
  let iconClass = 'text-white dark:text-red-500';
</script>

<div class="max-w-4xl">
  <Carousel {images} {showThumbs} {showCaptions} {icons} {iconSize} {iconClass}/>
</div>
```

<Htwo label="Carousel transition" />

```svelte example
<script>
  import { CarouselTransition } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
</script>

<div class="max-w-4xl">
  <CarouselTransition {images} transitionType="fade" transitionParams="{{delay: 300, duration: 500}}"/>
</div>
```

<Htwo label="Loop" />

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

<Htwo label="Fly example" />

```svelte example
<script>
  import { CarouselTransition } from 'flowbite-svelte'
  import { images } from './imageData/+server.js';
</script>
<div class="max-w-4xl">
  <CarouselTransition {images} transitionType="fly" transitionParams="{{delay: 250, duration: 300, x: 100}}" showCaptions={false} showThumbs={false} />
</div>
```

<Htwo label="Slide example" />

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

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <A href="/pages/types">types 
 page</A> for type information.</p>

<h3 class='text-xl w-full dark:text-white py-4'>Carousel</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>CarouselTransition</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/carousel/" target="_blank" rel="noreferrer" class="link"
    >Flowbite carousel</A
  >
</P>
