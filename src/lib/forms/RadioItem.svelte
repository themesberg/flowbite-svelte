<script lang="ts">
	import type { FormColorType } from '../types';
	export let divClass: string = 'flex items-center mr-4';
	export let inputClass: string = 'w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600';
	export let labelClass: string = 'block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300';
	export let disabled: boolean = false;
	if (disabled) {
		labelClass = 'ml-2 text-sm font-medium text-gray-400 dark:text-gray-500';
	}
	export let name: string = '';
	export let divHelperClass: string = 'flex items-center h-5';
	export let labelHelperClass: string = 'font-medium text-gray-900 dark:text-gray-300';

	export let helperClass: string = 'text-xs font-normal text-gray-500 dark:text-gray-300';
	export let color: FormColorType = 'blue';
	if (color === 'red') {
		inputClass = 'w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';
	} else if (color === 'green') {
		inputClass = 'w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';
	} else if (color === 'purple') {
		inputClass = 'w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';
	} else if (color === 'teal') {
		inputClass = 'w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';
	} else if (color === 'yellow') {
		inputClass = 'w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';
	} else if (color === 'orange') {
		inputClass = 'w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';
	} else {
		inputClass = 'w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600';
	}
	export let helper: string;
	export let id: string;
	export let value: string;
	export let label: string;
</script>

{#if helper}
	<div class="flex">
		<div class={divHelperClass}>
			<input {id} type="radio" {name} {value} class={inputClass} aria-labelledby={id} aria-describedby={id} {disabled} {...$$restProps} />
		</div>
		<div class="ml-2 text-sm">
			<label for={id} class={labelHelperClass}>
				{@html label}
			</label>
			<p id="{id}-helper-radio-text" class={helperClass}>{helper}</p>
		</div>
	</div>
{:else}
	<div class={divClass}>
		<input {id} type="radio" {name} {value} class={inputClass} aria-labelledby={id} aria-describedby={id} {disabled} {...$$restProps} />
		<label for={id} class={labelClass}>
			{@html label}
		</label>
	</div>
{/if}
