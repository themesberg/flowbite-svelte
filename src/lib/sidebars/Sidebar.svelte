<script lang="ts">
	import type { SiteType, SidebarType } from '../types';
	import { slide } from 'svelte/transition';
	export let site: SiteType;
	export let links: SidebarType[];

	let isOpen = false;

	let activeDropdown: number = undefined;
	const handleDropdown = (id: number) => {
		if (!isOpen) isOpen = true;
		if (activeDropdown === id) isOpen = false;
		activeDropdown = id;
	};
</script>

<aside class="w-64" aria-label="Sidebar">
	<div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
		{#if site}
			<a href={site.href} class="flex items-center pl-2.5 mb-5">
				<img src={site.img} class="h-6 mr-3 sm:h-7" alt={site.name} />
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
					>{site.name}</span
				>
			</a>
		{/if}
		<ul class="space-y-2">
			{#each links as link (link.id)}
				{#if link.children}
					<li>
						<button
							type="button"
							on:click={() => handleDropdown(link.id)}
							class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
							aria-controls="dropdown"
							data-collapse-toggle="dropdown"
						>
							{#if link.icon}
								<svelte:component this={link.icon} className="h-4 w-4 mr-2" />
							{/if}
							<span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item=""
								>{link.name}</span
							>
							<svg
								sidebar-toggle-item=""
								class="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/></svg
							>
						</button>
						{#if isOpen && link.id == activeDropdown}
							<ul id="dropdown" class="py-2 space-y-2" transition:slide={{ duration: 500 }}>
								{#each link.children as child}
									<li>
										<a
											href={child.href}
											rel={child.rel}
											class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
											>{child.name}</a
										>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{:else}
					<li>
						<a
							href={link.href}
							rel={link.rel}
							class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							{#if link.icon}
								<svelte:component this={link.icon} className="h-4 w-4 mr-2" />
							{/if}
							<span class="ml-3">{link.name}</span>
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</aside>
