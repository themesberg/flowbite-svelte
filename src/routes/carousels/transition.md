---
layout: carouselLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { CarouselTransition, Breadcrumb } from '$lib/index';
  import { quartInOut, sineInOut, bounceInOut, quintOut } from 'svelte/easing';
  import { images } from './imageData';
  // import componentProps from '../props/Carousel.json'
  // // Props table
  // let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

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

<Htwo label="Example" />

<ExampleDiv>
  <div class="max-w-4xl">
    <CarouselTransition {images} transitionType="fade" transitionParams="{{delay: 300, duration: 500}}"/>
  </div>
</ExampleDiv>

```html
<script>
  import { CarouselTransition } from 'flowbite-svelte';
</script>

<CarouselTransition {images} transitionType="slide" transitionParams="{{delay: 300, duration: 500}}"/>
```

<Htwo label="Loop" />

<p>Use `loop` prop to loop the carousel. Use `duration=number` to set the interval</p>

<ExampleDiv>
	<div class="max-w-4xl">
		<CarouselTransition {images} loop transitionType="fade" transitionParams="{{ duration: 1000 }}" {showCaptions} {showThumbs} duration="5000" />
	</div>
</ExampleDiv>

```html
<script>
  let showThumbs=false
  let showCaptions=false
</script>

<CarouselTransition {images} loop transitionType="fade" transitionParams="{{ duration: 1000 }}" {showCaptions} {showThumbs} duration="5000" />
```

<Htwo label="Fly example" />

<ExampleDiv>
  <div class="max-w-4xl">
    <CarouselTransition {images} transitionType="fly" transitionParams="{{delay: 250, duration: 300, x: 100}}" />
  </div>
</ExampleDiv>

```html
<CarouselTransition {images} transitionType="fly" transitionParams="{{delay: 250, duration: 300, x: 100}}" />
```

<Htwo label="Slide example" />

<ExampleDiv>
  <div class="max-w-4xl">
    <CarouselTransition {images} transitionType="slide" transitionParams="{{duration: 1500, easing: bounceInOut}}"/>
  </div>
</ExampleDiv>

```html
<script>
  import { CarouselTransition } from 'flowbite-svelte';
  import { bounceInOut } from 'svelte/easing';
</script>

<CarouselTransition {images} transitionType="slide" transitionParams="{{duration: 1500, easing: bounceInOut}}"/>
```

<Htwo label="Custom slide controllers" />

<p>You can add custom slide controllers using <a href="/icons/heroicons">Svelte-Heros icons</a>. Change the size using the `iconSize` prop and style with the `iconClass` prop. Please read <a href="/carousels/default#Custom_slide_controllers">Carousel default for more details</a>.</p>