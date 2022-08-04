<script lang="ts">
	import generateId from '../utils/generateId.js';

	export let value: string = '';
	export let id: string = generateId();
	export let name: string = 'message';
	export let label: string = 'Your message';
	export let rows: number = 4;
	export let ref: HTMLElement = null;
	export let placeholder: string = 'Leave a comment...';
	export let labelClass: string = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400';
	export let textareaClass: string =
		'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
	export let helper: string = '';
	export let helperClass: string = 'mt-2 text-sm text-gray-500 dark:text-gray-400';
</script>

<label for={id} class={labelClass}>{label}</label>
<textarea
	bind:value
	bind:this={ref}
	on:blur
	on:change
	on:click
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:paste
	{id}
	{name}
	{rows}
	class={textareaClass}
	{placeholder}
/>
{#if helper}
	<p class={helperClass}>{@html helper}</p>
{/if}
