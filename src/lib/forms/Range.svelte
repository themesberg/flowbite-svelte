<script lang="ts">
	export let id: string = 'range';
	export let min: number;
	export let max: number;
	export let value: number;
	export let step: number;
	export let size: 'small' | 'large';

	let inputClass: string =
		'w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 ';
	if (size === 'small') {
		inputClass += 'h-1 mb-6 range-sm';
	} else if (size === 'large') {
		inputClass += 'h-3 range-lg';
	} else {
		inputClass += 'h-2 mb-6';
	}
</script>

<input
	{...$$restProps}
	{id}
	name={id}
	type="range"
	{min}
	{max}
	bind:value
	{step}
	class={inputClass}
	on:change
	on:keyup
	on:keydown
	on:keypress
	on:click
/>
