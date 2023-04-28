---
layout: componentLayout
title: Svelte Close Button - Flowbite
breadcrumb_title: Svelte Close Button - Flowbite
component_title: Close button
dir: Utilities
description: Get started with the CloseButton components to hide a target element using Svelte interactivity
---

<script>
	import { TableProp, TableDefaultRow, GitHubSourceList } from '../../utils';
	import { A } from '$lib';
	import { props as items } from '../../props/CloseButton.json';

	let divClass = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';
	let theadClass = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white';
</script>



## CloseButton

Use `CloseButton` component to close a component.

```svelte example
<script>
	import { CloseButton } from 'flowbite-svelte'
	export let visible = true;
</script>

{#if visible}
	<div
		id="banner"
		tabindex="-1"
		class="flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800"
	>
		<p class="text-sm font-light text-gray-500 dark:text-gray-400">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ipsa culpa ea laudantium
			earum quis? Neque unde aliquam enim, distinctio repellendus delectus? Illo numquam ex fugit
			dolor esse, cumque nesciunt?
		</p>
		<CloseButton on:click={() => (visible = false)} />
	</div>
{/if}
```

## Props

The component has the following props, type, and default values. 
See <A class="hover:underline" href="/docs/pages/typescript">the types page</A>
for type information.

<TableProp>
	<TableDefaultRow {items} rowState="hover" />
</TableProp>
