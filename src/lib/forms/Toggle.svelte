<script lang="ts">
	import generateId from '../utils/generateId.js';
	export let name: string = 'toggle-example';
	export let id = generateId();
	export let label: string = 'Toggle me';
	export let checked: boolean = false;
	export let disabled: boolean = false;
	export let labelClass: string = 'flex relative items-center mb-4 cursor-pointer';
	export let divClass: string = 'w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600';
	export let spanClass: string = 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300';
</script>

<label for={id} class={labelClass}>
	<input type="checkbox" {id} class="sr-only" {checked} {name} {disabled} />
	<div class={divClass} />
	<span class={spanClass}>{label}</span>
</label>
