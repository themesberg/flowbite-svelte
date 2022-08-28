<script lang="ts">
	export let activeTabValue: number;
	export let id: number;
	export let contentDivClass: string = 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800';
</script>

{#if activeTabValue === id}
	<div class={contentDivClass} id="{id}-tabitem" role="tabpanel" aria-labelledby="{id}-tab">
		<slot />
	</div>
{/if}
