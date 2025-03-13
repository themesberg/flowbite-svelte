<script lang="ts">
	import { Skeleton, ImagePlaceholder, Banner } from '$lib';
	import { BookOpenSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="relative">
	<div class="p-6">
		<Skeleton class="py-4" />
		<ImagePlaceholder class="py-4" />
	</div>
	<Banner id="info-banner" position="absolute" bannerType="info">
		{#snippet header()}
			<div class="mb-4 md:me-4 md:mb-0">
				<h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">
					Integration is the key
				</h2>
				<p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
					You can integrate Flowbite with many tools.
				</p>
			</div>
		{/snippet}
		<a
			href="/"
			class="hover:text-primary-700 me-3 inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
		>
			<BookOpenSolid class="me-2 h-3 w-3" />
			Learn more
		</a>
		<a
			href="/"
			class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 me-2 inline-flex rounded-lg px-3 py-2 text-xs font-medium text-white focus:ring-4 focus:outline-none"
		>
			Get started <ArrowRightOutline class="ms-2 h-3 w-3" />
		</a>
	</Banner>
</div>
