<script lang="ts">
	// import type { ToggleType } from '../types';
	// export let props: ToggleType = {
	export let name = 'toggle-example';
	export let id = 'toggle-example';
	export let label = 'Toggle me';
	export let checked = false;
	export let disabled = false;

	export let labelClass = 'flex relative items-center mb-4 cursor-pointer';
	export let divClass =
		'w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600';
	export let spanClass = 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300';
</script>

<label for={name} class={labelClass}>
	<input type="checkbox" {id} class="sr-only" {checked} {disabled} />
	<div class={divClass} />
	<span class={spanClass}>{label}</span>
</label>
