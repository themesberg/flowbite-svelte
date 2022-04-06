<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import generateId from '../utils/generateId.js';
	export let label: string;
	export let id: string = generateId();
	type InputType =
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
	export let type: InputType;
	export let value: string = '';
	export let icon: typeof SvelteComponent;
	export let helper: string = '';
	export let placeholder: string = '';
	export let noBorder: boolean = false;
	export let labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300';
	export let inputClass =
		'rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
	export let spanClass =
		'inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600';
	export let helperClass = 'mt-2 text-sm text-gray-500 dark:text-gray-400';
	export let noBorderInputClass =
		'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
	export let noBorderDivClass =
		'flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none';
	export let iconClass = 'h-4 w-4 mr-2';
	function setType(node) {
		node.type = type;
	}
</script>

<div class={$$props.class}>
	<label for={id} class={labelClass}>{label}</label>
	{#if noBorder}
		<div class="relative">
			<div class={noBorderDivClass}>
				<svelte:component this={icon} className={iconClass} />
			</div>
			<input bind:value use:setType {id} class={noBorderInputClass} {placeholder} />
		</div>
	{:else}
		<div class="flex">
			<span class={spanClass}>
				<svelte:component this={icon} className={iconClass} />
			</span>
			<input {type} {id} class={inputClass} {placeholder} />
		</div>
	{/if}
	{#if helper}
		<p class={helperClass}>{@html helper}</p>
	{/if}
</div>
