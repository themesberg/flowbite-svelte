<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let icon: boolean = false;
	const dispatch = createEventDispatcher();
	const next = () => {
		dispatch('next');
	};
	export let nextClass =
		'inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';

	if (!icon) {
		nextClass += ' ml-3';
	}
</script>

<a href="/" on:click|preventDefault={next} class={nextClass}>
	Next
	{#if icon}
		<svg
			class="ml-2 w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/></svg
		>
	{/if}
</a>
