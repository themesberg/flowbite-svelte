<script lang="ts">
	import type { SiteType, SidebarCtaType } from '../types';
	export let divClass: string = 'overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800';
	export let site: SiteType;
	export let cta: SidebarCtaType;
</script>

<aside class="w-64" aria-label="Sidebar">
	<div class={divClass}>
		{#if site}
			<a href={site.href} class="flex items-center pl-2.5 mb-5">
				<img src={site.img} class="h-6 mr-3 sm:h-7" alt={site.name} />
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
					>{site.name}</span
				>
			</a>
		{/if}
		<slot />
		{#if cta}
			<div id="dropdown-cta" class="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900" role="alert">
				<div class="flex items-center mb-3">
					<span
						class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900"
						>{cta.label}</span
					>
				</div>
				<p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
					{cta.text}
				</p>
			</div>
		{/if}
	</div>
</aside>
