---
layout: carouselLayout
---

<script>
  import { CarouselTransition, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import { quartInOut, sineInOut, bounceInOut, quintOut } from 'svelte/easing';
  import { images } from './imageData';
  // import componentProps from '../props/Carousel.json'
  // // Props table
  // let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let showThumbs=false
  let showIndicators=false
  let showCaptions=false
  let slideControls=false

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Carousels',
      href:'/carousels/'
    },
    {
      label:'Carousel default',
      href:'/carousels/default'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Carousel transition</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Slide example</h2>

<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <div class="max-w-4xl">
    <CarouselTransition {images} transitionType="fade" transitionParams="{{delay: 300, duration: 500}}"/>
  </div>
</div>

```html
<script>
  import { CarouselTransition } from 'flowbite-svelte';
</script>

<CarouselTransition {images} transitionType="slide" transitionParams="{{delay: 300, duration: 500}}"/>
```


<h2 class="text-2xl w-full dark:text-white py-4" id="Loop">Loop</h2>

<p>Use `loop` prop to loop the carousel. Use `duration=number` to set the interval</p>

<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
	<div class="max-w-4xl">
		<CarouselTransition {images} loop transitionType="fade" transitionParams="{{ duration: 1000 }}" {showCaptions} {showThumbs} duration="5000" />
	</div>
</div>

```html
<script>
  let showThumbs=false
  let showCaptions=false
</script>

<CarouselTransition {images} loop transitionType="fade" transitionParams="{{ duration: 1000 }}" {showCaptions} {showThumbs} duration="5000" />
```


<h2 class="text-2xl w-full dark:text-white py-4">Fly example</h2>

<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <div class="max-w-4xl">
    <CarouselTransition {images} transitionType="fly" transitionParams="{{delay: 250, duration: 300, x: 100}}" />
  </div>
</div>

```html
<CarouselTransition {images} transitionType="fly" transitionParams="{{delay: 250, duration: 300, x: 100}}" />
```

<h2 class="text-2xl w-full dark:text-white py-4">Slide example</h2>

<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <div class="max-w-4xl">
    <CarouselTransition {images} transitionType="slide" transitionParams="{{duration: 1500, easing: bounceInOut}}"/>
  </div>
</div>

```html
<script>
  import { CarouselTransition } from 'flowbite-svelte';
  import { bounceInOut } from 'svelte/easing';
</script>

<CarouselTransition {images} transitionType="slide" transitionParams="{{duration: 1500, easing: bounceInOut}}"/>
```
