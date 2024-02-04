<script lang="ts">
	interface Props {
		children?: any;
		items: ListGroupItemType[] | string[];
		btn?: boolean;
		rounded?: boolean;
		border?: boolean;
		defaultclass?: string;
	}
	import { createEventDispatcher, setContext, type ComponentProps } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { ListGroupItemType } from '../types';
	// import Frame from '../utils/Frame.svelte';
	import ListgroupItem from './ListgroupItem.svelte';

	let {
		children,
		items,
		btn,
		rounded = true,
		border = true,
		defaultclass,
		...attributes
	} = $props<Props>();

	const dispatch = createEventDispatcher();

	const bgColor = 'bg-white dark:bg-gray-800';

	const textColor = 'text-gray-500 dark:text-gray-400';

	const borderColor = 'border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700';

	const divClass = twMerge(
		bgColor,
		textColor,
		rounded && 'rounded-lg',
		border && 'border',
		borderColor
	);

	const defaultCls: string = twMerge(
		'divide-y divide-gray-200 dark:divide-gray-600',
		divClass,
		defaultclass
	);
	let tag = btn ? 'div' : 'ul';
	setContext('btn', btn);
</script>

<svelte:element this={tag} {...attributes} class={defaultCls}>
	{#each items as item, index}
		{#if typeof item === 'string'}
			<ListgroupItem {btn} {index} on:click={() => dispatch('click', item)}>{item}</ListgroupItem>
		{:else}
			<ListgroupItem {btn} {...item} {index} on:click={() => dispatch('click', item)}
				>{item}</ListgroupItem
			>
		{/if}
	{:else}
		{@const item = items[0]}
		{@render children({ item })}
	{/each}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop children,
@prop items,
@prop btn,
@prop rounded = true,
@prop border = true,
@prop defaultclass,
@prop ...attributes
-->
