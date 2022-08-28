<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	export let contentDivClass: string = 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800';
	export let content: string | SvelteComponent;
</script>

{#if activeTabValue === id}
	<div class={contentDivClass} id={name} role="tabpanel" aria-labelledby="{name}-tab">
		{#if typeof content === 'string'}
			<p class="text-sm text-gray-500 dark:text-gray-400">
				{@html content}
			</p>
		{:else}
			<svelte:component this={content} />
		{/if}
	</div>
{/if}
