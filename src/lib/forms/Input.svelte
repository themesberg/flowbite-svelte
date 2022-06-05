<script lang="ts">
	import type { InputType } from '../types';
	import generateId from '../utils/generateId.js';
	export let type: InputType = 'text';
	export let value: string = '';
	export let name: string = '';
	export let id: string = generateId();
	export let label: string = '';
	export let required: boolean = false;
	export let placeholder: string = '';
	export let size: 'sm:text-md' | 'text-sm' | 'sm:text-xs' = 'text-sm';
	export let inputClass: string = `bg-gray-50 border border-gray-300 text-gray-900 ${size} rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ${padding} dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;
	export let labelClass: string = 'block mb-4 text-sm font-medium text-gray-900 dark:text-gray-300';
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let helper: string = '';
	export let helperClass: string = 'text-sm text-gray-500 dark:text-gray-400';
	export let ref: HTMLElement = null;

	let padding: string = '';
	if (size === 'sm:text-md') {
		padding = 'p-4';
	} else if (size === 'text-sm') {
		padding = 'p-2.5';
	} else {
		padding = 'p-2';
	}

	// you need to this to avoid 2-way binding
	function setType(node) {
		node.type = type;
	}
</script>

<div class={$$props.class ? $$props.class : ''}>
	{#if label}
		<label for={id} class={labelClass}>{label}</label>
	{/if}
	<input
		bind:value
		bind:this={ref}
		{name}
		use:setType
		{id}
		class={inputClass}
		{placeholder}
		{required}
		{disabled}
		{readonly}
	/>
	{#if helper}
		<p class={helperClass}>{@html helper}</p>
	{/if}
</div>
