<script lang="ts">
	import type { RadioType } from '../types';
	export let legend: string = '';
	export let divClass: string = 'flex items-center mb-4';
	export let inputClass: string = 'w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600';
	export let labelClass: string = 'block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300';
	export let name: string = 'countries';
	export let options: RadioType[];
</script>

{#each options as option}
	<div class={divClass}>
		<input id={option.id} type="radio" {name} value={option.value} class={inputClass} aria-labelledby={option.id} aria-describedby={option.id} checked={option.checked} disabled={option.disabled} />
		<label for={option.id} class={labelClass}>
			{@html option.label}
		</label>
		<slot name="helper" />
	</div>
{/each}
