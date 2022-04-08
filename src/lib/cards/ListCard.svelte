<script lang="ts">
	import type { LinkType, ListCardType } from '../types';
	export let lists: ListCardType[];
	export let title: string = 'Latest Customers';
	export let action: LinkType;
	export let divClass: string = 'p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700';
</script>

<div class={divClass}>
	<div class="flex justify-between items-center mb-4">
		<h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
			{title}
		</h3>
		<a href={action.href} rel={action.rel} class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
			{action.name}
		</a>
	</div>
	<div class="flow-root">
		<ul class="divide-y divide-gray-200 dark:divide-gray-700">
			{#each lists as { img, field1, field2, field3 }}
				<li class="py-3 sm:py-4">
					<div class="flex items-center space-x-4">
						<div class="flex-shrink-0">
							<img class="w-8 h-8 rounded-full" src={img.src} alt={img.alt} />
						</div>
						<div class="flex-1 min-w-0">
							<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
								{field1}
							</p>
							<p class="text-sm text-gray-500 truncate dark:text-gray-400">
								{field2}
							</p>
						</div>
						<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
							{field3}
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
