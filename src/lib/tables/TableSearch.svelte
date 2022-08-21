<script lang="ts">
	import classNames from 'classnames';
	import { setContext } from 'svelte';

	export let divClass: string = 'relative overflow-x-auto shadow-md sm:rounded-lg';
	export let inputValue: string = '';
	export let striped: boolean = false;
	export let hoverable: boolean = false;
	export let placeholder: string = 'Search';
	export let color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'default' | 'custom' =
		'default';

	const colors = {
		default: 'text-gray-500 dark:text-gray-400',
		blue: 'text-blue-100 dark:text-blue-100',
		green: 'text-green-100 dark:text-green-100',
		red: 'text-red-100 dark:text-red-100',
		yellow: 'text-yellow-100 dark:text-yellow-100',
		purple: 'text-purple-100 dark:text-purple-100',
		custom: ''
	};

	$: setContext('striped', striped);
	$: setContext('hoverable', hoverable);
	$: setContext('color', color);
</script>

<div class={divClass}>
	<div class="p-4">
		<label for="table-search" class="sr-only">Search</label>
		<div class="relative mt-1">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<svg
					class="w-5 h-5 text-gray-500 dark:text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/></svg
				>
			</div>
			<input
				bind:value={inputValue}
				type="text"
				id="table-search"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				{placeholder}
			/>
		</div>
	</div>
	<table
		{...$$restProps}
		class={classNames('w-full text-left text-sm', colors[color], $$props.class)}
	>
		<slot />
	</table>
</div>
