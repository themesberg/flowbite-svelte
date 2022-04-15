---
layout: carouselLayout
---

<script>
  import { CarouselTransition, Table, TableDefaultRow } from '$lib/index';
  import { quartInOut, sineInOut, bounceInOut, quintOut } from 'svelte/easing';
  import CarouselAnimation from '$lib/carousels/CarouselAnimation.svelte'
  import { images } from './imageData';
  // import componentProps from '../props/Carousel.json'
  // // Props table
  // export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let showThumbs=false
  let showIndicators=false
  let showCaptions=false
  let slideControls=false
</script>

<h1 class="text-3xl w-full dark:text-white pb-8">Carousel</h1>

<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <div class="max-w-4xl">
    <CarouselTransition {images} transitionType="slide" transitionParams={{delay: 300, duration: 500}}/>
  </div>
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Without thumbnails</h2>

<p class="dark:text-white text-lg">The `showThumbs` is set to `true`. Set it to `false` to hide it.</p>

<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <div class="max-w-4xl">
    <CarouselTransition {images} transitionType="fly" transitionParams={{delay: 250, duration: 300, x: 100}} />
  </div>
</div>

<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <div class="max-w-4xl">
    <CarouselTransition {images} transitionType="slide" transitionParams={{duration: 1500, easing: bounceInOut}}/>
  </div>
</div>
