<script lang="ts">
	import generateId from '../utils/generateId.js';
	export let checked: boolean = false;
	export let id: string = generateId();
	export let required: boolean = false;
	export let label: string;
	export let name: string;
	export let inputClass: string = 'w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800';
	export let labelClass: string = 'font-medium text-gray-900 dark:text-gray-300';
</script>

<div class="flex items-start">
	<div class="flex items-center h-5">
		<input bind:checked {id} aria-describedby={id} {name} type="checkbox" class={inputClass} {required} />
	</div>
	<div class="ml-3 text-sm">
		<label for={id} class={labelClass}>{label}</label>
	</div>
</div>
