<script lang="ts">
	import { ChevronRight } from 'svelte-heros';
	import type { SvelteComponent } from 'svelte';
	export let icon: typeof SvelteComponent | null = null;
	export let variation: 'solid' | null = null;
	export let iconSize: number = 20;
	export let iconClass: string = 'mr-2';
</script>

<li class="group flex items-center" {...$$props}>
	<ChevronRight aria-hidden="true" class="mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2" />
	{#if $$props.href}
		<a
			class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
			href={$$props.href}
		>
			{#if icon}
				<svelte:component
					this={icon}
					{variation}
					size={iconSize}
					aria-hidden="true"
					class={iconClass}
				/>
			{/if}
			<slot />
		</a>
	{:else}
		<span
			class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
			data-testid="breadcrumb-item"
		>
			{#if icon}
				<svelte:component
					this={icon}
					{variation}
					size={iconSize}
					aria-hidden="true"
					class={iconClass}
				/>
			{/if}
			<slot />
		</span>
	{/if}
</li>
