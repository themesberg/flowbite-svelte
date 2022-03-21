<script lang="ts">
	export let divClass = 'flex items-center mb-4';
	export let inputClass =
		'w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600';
	export let labelClass = 'block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300';
	export let name = 'countries';

	export let options: {
		id: string;
		label: string;
		value: string;
		checked?: boolean;
		disabled?: boolean;
	}[] = [
		{
			id: 'country-option-1',
			value: 'USA',
			checked: true,
			label: 'United States'
		},
		{
			id: 'country-option-2',
			label: 'Germany',
			value: 'Germany'
		},
		{
			id: 'country-option-3',
			label: 'Spain',
			value: 'Spain',
			disabled: true
		}
	];
</script>

<fieldset>
	<legend class="sr-only">Countries</legend>
	{#each options as option}
		<div class={divClass}>
			<input
				id={option.id}
				type="radio"
				{name}
				value={option.value}
				class={inputClass}
				aria-labelledby={option.id}
				aria-describedby={option.id}
				checked={option.checked}
				disabled={option.disabled}
			/>
			<label for={option.id} class={labelClass}>
				{option.label}
			</label>
		</div>
	{/each}
</fieldset>
