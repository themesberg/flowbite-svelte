<script lang="ts">
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { AccordionIconType } from '../types';
	import { ChevronDownSolid, ChevronUpSolid } from 'svelte-heros';

	export let id: string = '';
	export let btnClass: string =
		'flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400';

	export let slotClass: string = 'py-5 border-b border-gray-200 dark:border-gray-700';
	export let isOpen: boolean = false;
	export let icons: AccordionIconType = {
		up: ChevronUpSolid,
		down: ChevronDownSolid
	};

	onMount(() => {
		if (isOpen) {
			isOpen = true;
		}
	});

	const handleToggle = (id: string) => {
		isOpen = !isOpen;
	};

	export let iconSize: number = 24;
	export let iconClass: string = 'text-gray-500 sm:w-6 sm:h-6 dark:text-gray-300';
</script>

<h2 aria-expanded={isOpen}>
	<button
		on:click={() => handleToggle(id)}
		type="button"
		class:rounded-t-xl={id === '1'}
		class:border-t-0={id !== '1'}
		class="{btnClass} {$$props.class || ''}"
	>
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
