<script lang="ts">
	import type { CrumbType } from '../types';
	export let crumbs: CrumbType[] = [];
	export let homeClass: string =
		'inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white';
	export let crumbClass: string =
		'ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white';
	export let solid: boolean = false;
	export let navClass: string = 'flex';
	if (solid) {
		navClass =
			'flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700';
	}
</script>

<nav class={navClass} aria-label="Breadcrumb">
	<ol class="inline-flex items-center space-x-1 md:space-x-3">
		{#each crumbs as crumb}
			{#if crumb.href === '/'}
				<li class="inline-flex items-center">
					<a href={crumb.href} class={homeClass}>
						<svg
							class="mr-2 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
							/></svg
						>
						{crumb.label}</a
					>
				</li>
			{:else}
				<li>
					<div class="flex items-center">
						<svg
							class="w-6 h-6 text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clip-rule="evenodd"
							/></svg
						><a href={crumb.href} class={crumbClass}>{crumb.label}</a>
					</div>
				</li>
			{/if}
		{/each}
	</ol>
</nav>
