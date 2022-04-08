<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { PageType } from '../types';
	export let icon: boolean = false;
	const dispatch = createEventDispatcher();
	const previous = () => {
		dispatch('previous');
	};
	const next = () => {
		dispatch('next');
	};
	export let pages: PageType[];
	export let ulClass: string = 'inline-flex -space-x-px items-center';
	export let pageClass: string = 'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
	export let previousClass: string = 'py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
	export let nextClass: string = 'py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
	export let iconPreviousClass: string = 'block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
	export let iconNextClass: string = 'block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
</script>

<nav aria-label="Page navigation">
	<ul class={ulClass}>
		<li>
			{#if icon}
				<a href="/" on:click|preventDefault={previous} class={iconPreviousClass}>
					<span class="sr-only">Previous</span>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
				</a>
			{:else}
				<a href="/" on:click|preventDefault={previous} class={previousClass}>Previous</a>
			{/if}
		</li>
		{#each pages as { pageNum, href }}
			<li>
				<a {href} class={pageClass}>{pageNum}</a>
			</li>
		{/each}
		<li>
			{#if icon}
				<a href="/" on:click|preventDefault={next} class={iconNextClass}>
					<span class="sr-only">Next</span>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
				</a>
			{:else}
				<a href="/" on:click|preventDefault={next} class={nextClass}>Next</a>
			{/if}
		</li>
	</ul>
</nav>
