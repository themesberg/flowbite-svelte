<script lang="ts">
	import type { SiteType, SidebarType, SidebarCtaType } from '../types';
	import SidebarDropdown from './SidebarDropdown.svelte';
	export let site: SiteType;
	export let links: SidebarType[];
	export let cta: SidebarCtaType;
</script>

<aside class="w-64" aria-label="Sidebar">
	<div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
		{#if site}
			<a href={site.href} class="flex items-center pl-2.5 mb-5">
				<img src={site.img} class="h-6 mr-3 sm:h-7" alt={site.name} />
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{site.name}</span>
			</a>
		{/if}
		<ul class="space-y-2">
			{#each links as link (link.id)}
				{#if link.children}
					<SidebarDropdown {link} />
				{:else}
					<li>
						<a href={link.href} rel={link.rel} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
							{#if link.icon}
								<svelte:component this={link.icon} size={link.iconSize} class="mr-2 {link.iconClass}" />
							{/if}
							<span class="ml-3">{link.name}</span>
							{#if link.subtext}
								{@html link.subtext}
							{/if}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
		{#if cta}
			<div id="dropdown-cta" class="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900" role="alert">
				<div class="flex items-center mb-3">
					<span class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">{cta.label}</span>
				</div>
				<p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
					{cta.text}
				</p>
			</div>
		{/if}
	</div>
</aside>
