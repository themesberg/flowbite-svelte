<script lang="ts">
	import type { ButtonGroupType } from '../types';
	export let lists: ButtonGroupType[];
	const common: string = 'inline-flex relative items-center py-2 px-4 w-full text-sm font-medium hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white';
	const topClass = `${common} rounded-t-lg border-b border-gray-200`;
	const bottomClass = `${common} rounded-b-lg`;
	const middleClass = `${common} border-b border-gray-200`;
</script>

<div class="w-48 text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
	{#each lists as { name, icon, href, rel, iconClass, iconSize }, i}
		{#if i === 0}
			<button type="button" class={topClass}>
				{#if icon}
					<svelte:component this={icon} class="mr-2 {iconClass}" size={iconSize} />
				{/if}
				{#if href}
					<a {href} {rel}>{name}</a>
				{:else}
					{name} here
				{/if}
			</button>
		{:else if i === lists.length - 1}
			<button type="button" class={bottomClass}>
				{#if icon}
					<svelte:component this={icon} class="mr-2 {iconClass}" size={iconSize} />
				{/if}
				{#if href}
					<a {href} {rel}>{name}</a>
				{:else}
					{name}
				{/if}
			</button>
		{:else}
			<button type="button" class={middleClass}>
				{#if icon}
					<svelte:component this={icon} class="mr-2 {iconClass}" size={iconSize} />
				{/if}
				{#if href}
					<a {href} {rel}>{name}</a>
				{:else}
					{name}
				{/if}
			</button>
		{/if}
	{/each}
</div>
