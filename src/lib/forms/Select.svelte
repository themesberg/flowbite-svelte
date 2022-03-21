<script lang="ts">
	export let id = 'countries';
	export let name = 'country';
	export let label = 'Select your country';
	export let labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400';
	export let selectClass =
		'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
</script>

<label for="countries" class={labelClass}>{label}</label>
<select {id} {name} class={selectClass}>
	<slot />
</select>
