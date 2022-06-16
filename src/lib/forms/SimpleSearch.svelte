<script lang="ts">
	export let id: string = '';
	export let labelClass: string = 'only';
	export let iconClass: string = 'w-5 h-5 text-gray-500 dark:text-gray-400';
	export let iconDivClass: string =
		'flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none';
	export let inputClass: string =
		'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
	export let btnClass: string =
		'p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
	export let placeholder: string = 'Search';
</script>

<form class="flex items-center" on:submit>
	<label for={id} class={labelClass}>Search</label>
	<div class="relative w-full">
		<div class={iconDivClass}>
			<svg
				class={iconClass}
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
		<input type="text" {id} class={inputClass} {placeholder} {...$$restProps} />
	</div>
	<button type="submit" class={btnClass}
		><svg
			class="w-5 h-5"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/></svg
		></button
	>
</form>
