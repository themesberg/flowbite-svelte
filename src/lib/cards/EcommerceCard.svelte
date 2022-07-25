<script lang="ts">
	import Badge from '$lib/badges/Badge.svelte';
	import Rating from '$lib/ratings/Rating.svelte';
	import type { ImgType, Colors } from '../types';
	import Card from './Card.svelte';
	export let img: ImgType;
	export let href: string = '/';
	export let btnColor: Colors = 'blue';
	export let rel: string = '';
	export let title: string = 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport';
	export let stars: number = 0;
	export let price: string = '';
	export let btnText: string = '';
	export let headerClass: string =
		'text-xl font-semibold tracking-tight text-gray-900 dark:text-white';
	export let divClass: string =
		'max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700';
	export let priceClass: string = 'text-3xl font-bold text-gray-900 dark:text-white';
	let spanClass: string = 'text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3 ';
	let linkClass: string =
		'text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center ';

	const linkColors = {
		gray: 'bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800',
		red: 'bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800',
		yellow:
			'bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800',
		green:
			'bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
		indigo:
			'bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800',
		purple:
			'bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800',
		pink: 'bg-pink-700 hover:bg-pink-800 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800',
		blue: 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
	};
</script>

<Card padding="sm">
	<a {href} {rel}>
		<img class="p-3 rounded-t-lg" src={img.src} alt={img.alt} />
	</a>

	<a {href} {rel}>
		<h3 class={headerClass}>
			{title}
		</h3>
	</a>
	{#if stars}
		<Rating rating={stars} divClass="flex items-center {spanClass}">
			<Badge slot="text" color={btnColor}>5</Badge>
		</Rating>
	{/if}
	<slot />
	<div class="flex justify-between items-center">
		{#if price}
			<span class={priceClass}>{price}</span>
		{/if}
		{#if btnText}
			<a {href} {rel} class="{linkClass} {linkColors[btnColor]}">{btnText}</a>
		{/if}
	</div>
</Card>
