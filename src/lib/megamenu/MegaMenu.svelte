<script lang="ts">
	import { setContext } from 'svelte';
	import classNames from 'classnames';

	import type { LinkType } from '$lib/types';
	//import ListItem from './ListItem.svelte';

	export let items: LinkType[] = [];
	export let active: boolean = false;
	export let full: boolean = false;

	setContext('background', true);
	$: setContext('active', active);

	let wrapperClass;
	$: wrapperClass = classNames(
		'flex flex-col md:flex-row p-4',
		'border-gray-100 shadow-md dark:border-gray-700',
		full ? 'border-y' : 'rounded-lg border',
		full ? 'max-w-screen-xl' : 'max-w-screen-lg',
		full ? 'bg-white dark:bg-gray-800' : 'bg-white dark:bg-gray-700',
		full ? 'w-full' : 'mx-auto'
	);

	// 'mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600',
	let groupClass: string;
	$: groupClass = classNames(
		'grid grid-flow-row gap-y-4 md:gap-x-8 auto-rows-max auto-col-max',
		$$slots.extra ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3',
		'text-sm font-medium',
		'text-gray-500 dark:text-gray-400',
		$$slots.extra && 'md:w-2/3',
		$$props.class
	);
</script>

<div class={wrapperClass}>
	<svelte:element this={active ? 'div' : 'ul'} class={groupClass}>
		{#each items as item, index}
			<!-- <ListItem {active} {...item} {index} on:click><slot {item} {index} /></ListItem> -->
			<li class="flex items-center h-full">
				<slot {item} {index} />
			</li>
		{:else}
			<slot />
		{/each}
	</svelte:element>
	{#if $$slots.extra}
		<div class="md:w-1/3">
			<slot name="extra" />
		</div>
	{/if}
</div>
