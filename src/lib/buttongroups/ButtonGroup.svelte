<script lang="ts">
	import type { ButtonGroupType } from '../types';
	export let buttons: ButtonGroupType[];
	let btnLength = buttons.length;
	let baseClass = 'inline-flex relative items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white ';
	let classFirst = 'rounded-l-lg border';
	let classMiddle = 'border-t border-b';
	let classLast = 'rounded-r-md border';
</script>

<div class="inline-flex rounded-md shadow-sm" role="group">
	{#each buttons as { name, icon, href, rel, iconClass, iconSize }, i}
		{#if i === 0}
			<button type="button" class="{baseClass} {classFirst}">
				{#if icon}
					<svelte:component this={icon} size={iconSize} class="mr-2 {iconClass}" />
				{/if}
				{#if href}
					<a {href} {rel}>{name}</a>
				{:else}
					{name}
				{/if}
			</button>
		{:else if i === btnLength - 1}
			<button type="button" class="{baseClass} {classLast}">
				{#if icon}
					<svelte:component this={icon} size={iconSize} class="mr-2 {iconClass}" />
				{/if}
				{#if href}
					<a {href} {rel}>{name}</a>
				{:else}
					{name}
				{/if}
			</button>
		{:else}
			<button type="button" class="{baseClass} {classMiddle}">
				{#if icon}
					<svelte:component this={icon} size={iconSize} class="mr-2 {iconClass}" />
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
