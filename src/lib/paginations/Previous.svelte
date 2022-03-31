<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let icon: boolean = false;
	const dispatch = createEventDispatcher();
	const previous = () => {
		dispatch('previous');
	};
	export let previousClass =
		'inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
	if (icon) {
		previousClass += ' mr-3';
	}
</script>

<a href="/" on:click|preventDefault={previous} class={previousClass}>
	{#if icon}
		<svg
			class="mr-2 w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
				clip-rule="evenodd"
			/></svg
		>
	{/if}
	Previous
</a>
