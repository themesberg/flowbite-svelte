<script lang="ts">
	import { setContext } from 'svelte';
	import classNames from 'classnames';
	import type { ListGroupItemType } from '$lib/types';
	import ListItem from './ListItem.svelte';

	export let items: ListGroupItemType[] = [];
	export let active: boolean = false;

	$: setContext('active', active);

	let groupClass: string;
	$: groupClass = classNames(
		'rounded-lg border border-gray-200 dark:border-gray-600',
		'divide-y divide-gray-200 dark:divide-gray-600',
		$$props.class
	);
</script>

<svelte:element this={active ? 'div' : 'ul'} class={groupClass}>
	{#each items as item, index}
		<ListItem {active} {...item} {index} on:click><slot {item} {index} /></ListItem>
	{:else}
		<slot />
	{/each}
</svelte:element>
