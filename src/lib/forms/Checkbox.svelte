<script lang="ts">
	import type { FormColorType } from '../types';
	export let divClass: string = 'flex items-center mr-4';
	export let inputClass: string =
		'w-4 h-4 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ';
	export let labelClass: string = 'ml-2 text-sm font-medium text-gray-900 dark:text-gray-300';
	export let disabled: boolean = false;
	export let name: string = '';
	export let divHelperClass: string = 'flex items-center h-5';
	export let labelHelperClass: string = 'font-medium text-gray-900 dark:text-gray-300';
	export let helperClass: string = 'text-xs font-normal text-gray-500 dark:text-gray-300';
	export let color: FormColorType = 'blue';
	export let helper: string = '';
	export let id: string = '';
	export let value: string = '';
	export let label: string = '';
	export let checked: boolean = false;

	if (disabled) {
		labelClass = 'ml-2 text-sm font-medium text-gray-400 dark:text-gray-500';
	}

	if (color === 'red') {
		inputClass += 'text-red-600 focus:ring-red-500 dark:focus:ring-red-600';
	} else if (color === 'green') {
		inputClass += 'text-green-600 focus:ring-green-500 dark:focus:ring-green-600';
	} else if (color === 'purple') {
		inputClass += 'text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600';
	} else if (color === 'teal') {
		inputClass += 'text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600';
	} else if (color === 'yellow') {
		inputClass += 'text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600';
	} else if (color === 'orange') {
		inputClass += 'text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600';
	} else {
		inputClass += 'text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600';
	}
</script>

{#if helper}
	<div class="flex">
		<div class={divHelperClass}>
			<input
				{id}
				type="checkbox"
				bind:checked
				{name}
				{value}
				class={inputClass}
				aria-labelledby={id}
				aria-describedby={id}
				{disabled}
				{...$$restProps}
			/>
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
		<input
			{id}
			type="checkbox"
			bind:checked
			{name}
			{value}
			class={inputClass}
			aria-labelledby={id}
			aria-describedby={id}
			{disabled}
			{...$$restProps}
		/>
		<label for={id} class={labelClass}>
			{@html label}
		</label>
	</div>
{/if}
