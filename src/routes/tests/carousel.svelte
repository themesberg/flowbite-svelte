<script>
	import ExampleDiv from '../utils/ExampleDiv.svelte';
	import { Carousel, CarouselTransition } from '$lib/index';
	import { images } from '../carousels/imageData';
	let showThumbs = false;
	let showCaptions = false;
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Carousel</h1>
<ExampleDiv>
	<div class="max-w-4xl">
		<Carousel {images} loop {showCaptions} {showThumbs} />
	</div>
</ExampleDiv>
<ExampleDiv>
	<div class="max-w-4xl">
		<CarouselTransition
			{images}
			loop
			transitionType="fade"
			transitionParams={{ duration: 1000 }}
			{showCaptions}
			{showThumbs}
			duration="5000"
		/>
	</div>
</ExampleDiv>
