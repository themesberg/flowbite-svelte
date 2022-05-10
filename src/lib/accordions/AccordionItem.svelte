<script lang="ts">
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { AccordionIconType } from '../types';
	import { ChevronDownSolid, ChevronUpSolid } from 'svelte-heros';

	export let id: string = '';
	export let btnClass: string = 'flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800';

	export let slotClass: string = 'p-5 border border-t-0 border-gray-200 dark:border-gray-700';
	export let isOpen = false;
	export let color: boolean = false;
	export let flush: boolean = false;
	export let icons: AccordionIconType = {
		up: ChevronUpSolid,
		down: ChevronDownSolid
	};

	if (flush) {
		btnClass = 'flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400';
		slotClass = 'py-5 border-b border-gray-200 dark:border-gray-700';
	}

	// $: console.log('isOpen', isOpen);

	onMount(() => {
		if (isOpen) {
			isOpen = true;
		}
	});

	const handleToggle = (id: string) => {
		isOpen = !isOpen;
		if (color && isOpen) {
			btnClass = 'flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-blue-200 dark:focus:ring-blue-800  hover:bg-blue-100 text-blue-500 bg-blue-200 text-blue-700';
		} else if (flush) {
			btnClass = 'flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400';
			slotClass = 'py-5 border-b border-gray-200 dark:border-gray-700';
		} else {
			btnClass = 'flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800';
		}
	};

	export let iconSize: number = 24;
	export let iconClass: string = 'text-gray-500 sm:w-6 sm:h-6 dark:text-gray-300';
</script>

<h2 aria-expanded={isOpen}>
	<button on:click={() => handleToggle(id)} type="button" class:rounded-t-xl={id === '1' && !flush} class:border-t-0={id !== '1'} class={btnClass}>
		<slot name="header" />
		{#if isOpen}
			<svelte:component this={icons.up} size={iconSize} class="mr-2 {iconClass}" />
		{:else}
			<svelte:component this={icons.down} size={iconSize} class="mr-2 {iconClass}" />
		{/if}
	</button>
</h2>
{#if isOpen}
	<div transition:slide={{ duration: 500 }}>
		<div class={slotClass}>
			<slot name="body" />
		</div>
	</div>
{/if}
