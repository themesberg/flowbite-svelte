<script lang="ts">
	// import type { TimelineItemVerticalType } from '../types';
	// export let timelineItems: TimelineItemVerticalType[];
	export let title: string;
	export let date: string;
</script>

<li class="mb-10 ml-6">
	<span
		class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
		{#if $$slots.icon}
			<slot name="icon" />
		{:else}
			<svg
				width="20"
				height="20"
				class="text-blue-600 dark:text-blue-300"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
					clip-rule="evenodd" /></svg>
		{/if}
	</span>

	<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
		{title}
	</h3>
	<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
		>{date}</time>
	<slot />
</li>
