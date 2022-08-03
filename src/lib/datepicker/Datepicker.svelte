<script lang="ts">
	// import { onMount } from 'svelte';
	import { Calendar } from 'svelte-heros';

	export let range: boolean = false;
	// autoHide not working
	// export let autoHide: boolean = false;
	export let datepickerButtons: boolean = false;
	export let datepickerFormat: string = 'mm/dd/yyyy';
	export let datepickerOrientation: string = 'bottom';
	export let datepickerTitle: string = 'Flowbite datepicker';
	export let attribute: string = '';

	$: setAttribute = (node, params) => {
		node.setAttribute(params, '');
	};
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css" />
	<script src="https://unpkg.com/flowbite@1.5.1/dist/datepicker.js"></script>
</svelte:head>

{#if range}
	<div date-rangepicker class="flex items-center">
		<div class="relative">
			<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<Calendar variation="solid" />
			</div>
			<input
				name="start"
				type="text"
				class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Select date start"
			/>
		</div>
		<span class="mx-4 text-gray-500">to</span>
		<div class="relative">
			<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<Calendar variation="solid" />
			</div>
			<input
				name="end"
				type="text"
				class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Select date end"
			/>
		</div>
	</div>
{:else}
	<div class="relative">
		<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
			<Calendar variation="solid" />
		</div>
		{#if datepickerButtons}
			<input
				{...$$restProps}
				datepicker
				datepicker-buttons
				datepicker-format={datepickerFormat}
				datepicker-orientation={datepickerOrientation}
				datepicker-title={datepickerTitle}
				use:setAttribute={attribute}
				type="text"
				class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Select date"
			/>
		{:else}
			<input
				{...$$restProps}
				datepicker
				datepicker-format={datepickerFormat}
				datepicker-orientation={datepickerOrientation}
				datepicker-title={datepickerTitle}
				use:setAttribute={attribute}
				type="text"
				class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Select date"
			/>
		{/if}
		<slot />
	</div>
{/if}
