<script lang="ts">
	import type { TimelineItemVerticalType } from '../types';
	export let timelineItems: TimelineItemVerticalType[];
</script>

{#each timelineItems as { date, title, text, href, linkname, icon }}
	<li class="mb-10 ml-6">
		<span
			class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
		>
			<svelte:component this={icon} className="h-4 w-4" />
		</span>

		<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
			{title}
		</h3>
		<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
			>{date}</time
		>
		<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			{text}
		</p>
		{#if href}
			<a
				{href}
				class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
				>{linkname}
				<svg
					class="ml-2 w-3 h-3"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				></a
			>
		{/if}
	</li>
{/each}
