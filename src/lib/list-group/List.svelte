<script lang="ts">
	import classNames from 'classnames';
	import type { ListGroupItemType } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let items: ListGroupItemType[];
	export let active: boolean = false;

	let groupClass: string;
	$: groupClass = classNames(
		'rounded-lg border border-gray-200 dark:border-gray-600',
		'divide-y divide-gray-200 dark:divide-gray-600',
		$$props.class
	);

	let focusClass =
		'focus:z-40 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:focus:ring-gray-500 dark:focus:text-white';
	let hoverClass =
		'hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white';

	const states = {
		active: 'text-white bg-blue-700 dark:text-white dark:bg-gray-800',
		normal: 'text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-700',
		disabled: 'text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400'
	};
</script>

<svelte:element this={active ? 'div' : 'ul'} class={groupClass}>
	{#each items as item, index}
		{@const state = item.disabled ? 'disabled' : item.active ? 'active' : 'normal'}
		{@const itemClass = classNames(
			'py-2 px-4 w-full text-sm font-medium',
			'first:rounded-t-lg last:rounded-b-lg',
			states[state],
			active && state === 'disabled' && 'cursor-not-allowed',
			active && state === 'normal' && hoverClass,
			active && state === 'normal' && focusClass
		)}
		{#if !active}
			<li class={itemClass} tabindex={active ? 0 : -1}>
				<slot {item} {index} />
			</li>
		{:else if item.href}
			<a href={item.href} class="block {itemClass}" on:click={() => dispatch('click', item)}>
				<slot {item} {index} />
			</a>
		{:else}
			<button
				class="inline-flex relative items-center text-left {itemClass}"
				disabled={item.disabled}
				on:click={() => dispatch('click', item)}
			>
				<slot {item} {index} />
			</button>
		{/if}
	{/each}
</svelte:element>
