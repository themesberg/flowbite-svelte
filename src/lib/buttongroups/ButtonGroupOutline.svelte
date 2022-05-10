<script lang="ts">
	import type { ButtonGroupType } from '../types';
	export let buttons: ButtonGroupType[];

	let btnLength = buttons.length;

	let baseClass = 'inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent  border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700'
	let classFirst = 'rounded-l-lg border';
	let classMiddle = 'border-t border-b';
	let classLast = 'rounded-r-md border';
</script>

<div class="inline-flex rounded-md shadow-sm">
	{#each buttons as { href, name, rel, icon, iconClass, iconSize }, i}
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
