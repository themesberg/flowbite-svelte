<script lang="ts">
	import type { InteractiveTabType } from '../types';

	export let tabId: string = 'myTab';
	export let activeTabValue: number = 1;
	export let tabs: InteractiveTabType[];

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
	<ul class="flex flex-wrap -mb-px" id={tabId} role="tablist">
		{#each tabs as { name, id }}
			<li class="mr-2" role="presentation">
				<button
					on:click={handleClick(id)}
					on:click
					on:change
					on:keydown
					on:keyup
					on:focus
					on:blur
					on:mouseenter
					on:mouseleave
					on:mouseenter
					class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
					id="{name}-tab"
					type="button"
					role="tab"
					class:active={activeTabValue === id}
					aria-controls={name}>{name}</button
				>
			</li>
		{/each}
	</ul>
</div>
<div id="{tabId}Content">
	{#each tabs as { name, content, id }}
		{#if activeTabValue === id}
			<div
				class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
				id={name}
				role="tabpanel"
				aria-labelledby="{name}-tab"
			>
				{#if typeof content === 'string'}
					<p class="text-sm text-gray-500 dark:text-gray-400">
						{@html content}
					</p>
				{:else}
					<svelte:component this={content} />
				{/if}
			</div>
		{/if}
	{/each}
</div>
