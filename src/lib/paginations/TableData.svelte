<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { TableDataHelperType } from '../types';

	export let btnPreClass: string =
		'py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
	export let btnNextClass: string =
		'py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
	export let helper: TableDataHelperType | undefined = undefined;

	const dispatch = createEventDispatcher();
	const previous = () => {
		dispatch('previous');
	};
	const next = () => {
		dispatch('next');
	};
</script>

<div class="flex flex-col items-center">
	{#if helper}
		<!-- Help text -->
		<span class="text-sm text-gray-700 dark:text-gray-400">
			Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span> to
			<span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
			of <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span> Entries
		</span>
	{/if}
	<!-- Buttons -->
	<div class="inline-flex mt-2">
		<button
			on:click={previous}
			class={btnPreClass}
			on:blur
			on:click
			on:focus
			on:keydown
			on:keypress
			on:keyup
			on:mouseenter
			on:mouseleave
			on:mouseover
		>
			Prev
		</button>
		<button
			on:click={next}
			class={btnNextClass}
			on:blur
			on:click
			on:focus
			on:keydown
			on:keypress
			on:keyup
			on:mouseenter
			on:mouseleave
			on:mouseover
		>
			Next
		</button>
	</div>
</div>
