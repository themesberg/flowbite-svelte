<script lang="ts">
	export let show: boolean;
</script>

{#if show}
	<div {...$$restProps}><slot /></div>
{:else}
	<slot />
{/if}
