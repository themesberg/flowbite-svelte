<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { SvelteComponent } from 'svelte';

	const dispatch = createEventDispatcher();
	import type { Colors } from '../types';
	export let color: Colors = 'blue';
	export let icon: typeof SvelteComponent | null = null;
	export let closeBtn: boolean = false;
	export let rounded: boolean = true;
	export let borderAccent: boolean = false;

	let hidden = false;

	const handleHide = () => {
		hidden = !hidden;
	};
	let divClass: string = 'flex flex-col p-4 mb-4 gap-2 ';
	let contentClass: string;
	let buttonClass: string = 'ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 ';

	// TODO: update on change
	if (rounded) divClass+= 'rounded-lg ';
	if (borderAccent) divClass+= 'border-t-4 ';
	if (color === 'gray') {
		divClass += 'bg-gray-100 dark:bg-gray-200 ';
		if (borderAccent) divClass += 'border-gray-500 dark:bg-gray-200 ';
		contentClass = 'text-gray-700 dark:text-gray-800';
		buttonClass += 'bg-gray-100 text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300';
	} else if (color === 'red') {
		divClass += 'bg-red-100 dark:bg-red-200';
		if (borderAccent) divClass += 'border-red-500 dark:bg-red-200 ';
		contentClass = 'text-red-700 dark:text-red-800';
		buttonClass += 'bg-red-100 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300';
	} else if (color === 'yellow') {
		divClass += 'bg-yellow-100 dark:bg-yellow-200 ';
		if (borderAccent) divClass += 'border-yellow-500 dark:bg-tellow-200 ';
		contentClass = 'text-yellow-700 dark:text-yellow-800';
		buttonClass += 'bg-yellow-100 text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300';
	} else if (color === 'green') {
		divClass += 'bg-green-100 dark:bg-green-200 ';
		if (borderAccent) divClass += 'border-green-500 dark:bg-green-200 ';
		contentClass = 'text-green-700 dark:text-green-800';
		buttonClass += 'bg-green-100 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300';
	} else if (color === 'indigo') {
		divClass += 'bg-indigo-100 dark:bg-indigo-200 ';
		if (borderAccent) divClass += 'border-indigo-500 dark:bg-indigo-200 ';
		contentClass = 'text-indigo-700 dark:text-indigo-800';
		buttonClass += 'bg-indigo-100 text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300';
	} else if (color === 'purple') {
		divClass += 'bg-purple-100 dark:bg-purple-200 ';
		if (borderAccent) divClass += 'border-purple-500 dark:bg-purple-200 ';
		contentClass = 'text-purple-700 dark:text-purple-800';
		buttonClass += 'bg-purple-100 text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300';
	} else if (color === 'pink') {
		divClass += 'bg-pink-100 dark:bg-pink-200 ';
		if (borderAccent) divClass += 'border-pink-500 dark:bg-pink-200 ';
		contentClass = 'text-pink-700 dark:text-pink-800';
		buttonClass += 'bg-pink-100 text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300';
	} else {
		divClass += 'bg-blue-100 dark:bg-blue-200 ';
		if (borderAccent) divClass += 'border-blue-500 dark:bg-blue-200 ';
		contentClass = 'text-blue-700 dark:text-blue-800';
		buttonClass += 'bg-blue-100 text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300';
	}
</script>

<div id={$$props.id} class:hidden class="{divClass} {$$props.class}" role="alert">
	<div class="flex">
		{#if icon}
			<svelte:component this={icon} class="flex-shrink-0 w-5 h-5 {contentClass} mr-3" />
		{/if}

		<div class="text-sm font-medium {contentClass}">
			<slot name="content"/>
		</div>

		{#if closeBtn}
			<button on:click={handleHide} type="button" class={buttonClass} aria-label="Close">
				<span class="sr-only">Close</span>
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
			</button>
		{/if}
	</div>

	<slot name="extra"/>
</div>
