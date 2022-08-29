<script lang="ts">
	import classNames from 'classnames';
	import type { IconType } from '../types';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import ChevronDown from '../utils/ChevronDown.svelte';

	export let btnClass: string =
		'flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
	export let label: string = '';
	export let spanClass: string = 'flex-1 ml-3 text-left whitespace-nowrap';
	export let ulClass: string = 'py-2 space-y-2';
	export let icon: IconType;

	let isOpen = false;
	const handleDropdown = () => {
		isOpen = !isOpen;
	};
</script>

<li>
	<button
		{...$$restProps}
		on:click={() => handleDropdown()}
		type="button"
		class={classNames(btnClass, $$props.class)}
		aria-controls="sidebar-dropdown">
		<slot name="icon" />
		<span class={spanClass} sidebar-toggle-item>{label}</span>
		<ChevronDown />
	</button>
	{#if isOpen}
		<ul
			id="dropdown"
			class={ulClass}
			transition:slide={{ delay: 250, duration: 300, easing: quintOut }}>
			<slot />
		</ul>
	{/if}
</li>
