<script lang="ts">
	import type { CarouselIconType } from '../types';
	import { ChevronRight, ChevronLeft } from 'svelte-heros';
	import Slide from './Slide.svelte';
	import Thumbnail from './Thumbnail.svelte';
	import Caption from './Caption.svelte';
	import Indicator from './Indicator.svelte';

	export let showIndicators: boolean = true;
	export let showCaptions: boolean = true;
	export let showThumbs: boolean = true;
	export let images: any[];
	export let slideControls: boolean = true;
	export let loop: boolean = false;
	export let duration: number = 2000;
	export let icons: CarouselIconType = {
		next: ChevronRight,
		prev: ChevronLeft
	};
	export let iconSize: number = 24;
	export let iconClass: string = 'text-white sm:w-6 sm:h-6 dark:text-gray-300';

	// Carousel
	export let divClass: string = 'overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96';
	export let indicatorDivClass: string =
		'flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2';

	// Caption
	export let captionClass: string =
		'h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center';

	// Indicator
	export let indicatorClass: string =
		'w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60';

	// Slide
	export let slideClass: string = '';

	let imageShowingIndex: number = 0;
	// $: console.log(imageShowingIndex);
	$: image = images[imageShowingIndex];

	const nextSlide = () => {
		if (imageShowingIndex === images.length - 1) {
			imageShowingIndex = 0;
		} else {
			imageShowingIndex += 1;
		}
	};

	const prevSlide = () => {
		if (imageShowingIndex === 0) {
			imageShowingIndex = images.length - 1;
		} else {
			imageShowingIndex -= 1;
		}
	};

	const goToSlide = (number) => (imageShowingIndex = number);
	let thumbWidth = 100 / images.length;

	if (loop) {
		setInterval(() => {
			nextSlide();
		}, duration);
	}
</script>

<div id="default-carousel" class="relative">
	<div class={divClass}>
		<Slide image={image.imgurl} altTag={image.name} attr={image.attribution} {slideClass} />
	</div>
	{#if showIndicators}
		<!-- Slider indicators -->
		<div class={indicatorDivClass}>
			{#each images as { id, imgurl, name, attribution }}
				<Indicator
					{name}
					selected={imageShowingIndex === id}
					on:click={() => goToSlide(id)}
					{indicatorClass}
				/>
			{/each}
		</div>
	{/if}
	{#if slideControls}
		<!-- Slider controls -->
		<button
			on:click={prevSlide}
			type="button"
			class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
			data-carousel-prev
		>
			<span
				class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
			>
				<svelte:component this={icons.prev} size={iconSize} class=" {iconClass}" />
				<span class="hidden">Previous</span>
			</span>
		</button>
		<button
			on:click={nextSlide}
			type="button"
			class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
			data-carousel-next
		>
			<span
				class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
			>
				<svelte:component this={icons.next} size={iconSize} class=" {iconClass}" />
				<span class="hidden">Next</span>
			</span>
		</button>
	{/if}
</div>

{#if showCaptions}
	<Caption caption={images[imageShowingIndex].name} {captionClass} />
{/if}

{#if showThumbs}
	<div class="flex flex-row justify-center bg-gray-100">
		{#each images as { id, imgurl, name, attribution }}
			<Thumbnail
				{thumbWidth}
				thumbImg={imgurl}
				altTag={name}
				titleLink={attribution}
				{id}
				selected={imageShowingIndex === id}
				on:click={() => goToSlide(id)}
			/>
		{/each}
	</div>
{/if}
