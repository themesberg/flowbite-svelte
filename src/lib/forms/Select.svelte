<script lang="ts">
	import type { SelectType, SelectOptionType } from '../types';
	export let props: SelectType = {
		id: 'countries',
		name: 'country',
		label: 'Select your country',
		labelClass: 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400',
		selectClass:
			'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
	};
	export let options: SelectOptionType[] = [
		{ name: 'United States', value: 'us' },
		{ name: 'Canada', value: 'ca' },
		{ name: 'France', value: 'fr' },
		{ name: 'Germany', value: 'de' }
	];
</script>

<label for="countries" class={props.labelClass}>{props.label}</label>
<select id={props.id} name={props.name} class={props.selectClass}>
	{#each options as option}
		<option value={option.value}>{option.name}</option>
	{/each}
</select>
