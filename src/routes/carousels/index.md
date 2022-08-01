---
layout: carouselLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import CompoDescription from '../utils/CompoDescription.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Carousel, CarouselTransition, Breadcrumb, BreadcrumbItem } from '$lib/index'
   import { quartInOut, sineInOut, bounceInOut, quintOut } from 'svelte/easing';
  import { Home, ChevronDoubleLeft, ChevronDoubleRight, Link} from 'svelte-heros'
  import { images } from './imageData';
  import componentProps from '../props/Carousel.json'
  import componentProps2 from '../props/CarouselTransition.json'
  // Props table
  let items = componentProps.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let showThumbs=false
  let showIndicators=false
  let showCaptions=false
  let slideControls=false
  let icons={
    next: ChevronDoubleRight,
    prev: ChevronDoubleLeft,
  }
  let iconSize =20
  let iconClass = 'text-white dark:text-red-500';

  let hidden = true;
  const handleMouseover = ()=>{
    hidden = false
  }
  const handleMouseout = ()=>{
    hidden = true
  }
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Carousels</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Carousel</h1>

<ExampleDiv>
<GitHubSource href="carousels/Carousel.svelte">Carousel</GitHubSource>
<GitHubSource href="carousels/CarouselTransition.svelte">CarouselTransition</GitHubSource>
</ExampleDiv>

<Htwo label="Setup" />

```html
<script>
  import { Carousel, CarouselTransition 'flowbite-svelte'
</script>
```

<Htwo label="Default Carousel" />

<ExampleDiv>
  <div class="max-w-4xl">
    <Carousel {images} />
  </div>
</ExampleDiv>

```html
<script>
  import { Carousel } from '$lib/index';
  const images = [
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

<Carousel {images} />
```

<Htwo label="Loop" />

<p>Use `loop` prop to loop the carousel. Use `duration=number` to set the interval</p>

<ExampleDiv>
	<div class="max-w-4xl">
		<Carousel {images} loop {showCaptions} {showThumbs} duration="3000"/>
	</div>
</ExampleDiv>

```html
<script>
  let showThumbs=false
  let showCaptions=false
</script>

<Carousel {images} loop {showCaptions} {showThumbs} duration="3000" />
```

<Htwo label="Without thumbnails"/>

<p>The `showThumbs` is set to `true`. Set it to `false` to hide it.</p>

<ExampleDiv>
  <div class="max-w-4xl">
    <Carousel {images} {showThumbs}/>
  </div>
</ExampleDiv>

```html
<script>
    let showThumbs=false
</script>

<Carousel {images} {showThumbs}/>
```

<Htwo label="Without caption" />

<p>To hide the caption, set `showCaptions` to `false`.</p>

<ExampleDiv>
  <div class="max-w-4xl">
    <Carousel {images} {showThumbs} {showCaptions}/>
  </div>
</ExampleDiv>

```html
<script>
  let showThumbs=false
  let showCaptions=false
</script>

<Carousel {images} {showThumbs} {showCaptions}/>
```

<Htwo label="Without indicators" />

<p>To hide the indicators, set `showIndicators` to `false`.</p>

<ExampleDiv>
  <div class="max-w-4xl">
    <Carousel {images} {showThumbs} {showCaptions} {showIndicators}/>
  </div>
</ExampleDiv>

```html
<script>
  let showThumbs=false
  let showCaptions=false
  let showIndicators=false
</script>

<Carousel {images} {showThumbs} {showCaptions} {showIndicators}/>
```

<Htwo label="Without slide controllers" />

<p>To hide the slide controllers, set `slideControls` to `false`.</p>

<ExampleDiv>
  <div class="max-w-4xl">
    <Carousel {images} {showThumbs} {showCaptions} {slideControls}/>
  </div>
</ExampleDiv>

```html
<script>
  let showThumbs=false
  let showCaptions=false
  let slideControls=false
</script>

<Carousel {images} {showThumbs} {showCaptions} {slideControls}/>
```

<Htwo label="Custom slide controllers" />

<p>You can add custom slide controllers using <a href="/icons/heroicons">Svelte-Heros icons</a>. Change the size using the `iconSize` prop and style with the `iconClass` prop.</p>

<ExampleDiv>
  <div class="max-w-4xl">
    <Carousel {images} {showThumbs} {showCaptions} {icons} {iconSize} {iconClass}/>
  </div>
</ExampleDiv>

```html
<script>
  import {ChevronDoubleLeft, ChevronDoubleRight } from 'svelte-heros'
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

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>Carousel</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3>CarouselTransition</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>