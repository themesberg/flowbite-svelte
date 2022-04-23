<script>
	import { Carousel, CarouselTransition } from '$lib/index';
	import { images } from '../carousels/imageData';
	console.log(images);
	let showThumbs = false;
	let showCaptions = false;
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Carousel</h1>
<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
	<div class="max-w-4xl">
		<Carousel {images} loop {showCaptions} {showThumbs} />
	</div>
</div>
<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
	<div class="max-w-4xl">
		<CarouselTransition {images} loop transitionType="fade" transitionParams={{ duration: 1000 }} {showCaptions} {showThumbs} duration="5000" />
	</div>
</div>
