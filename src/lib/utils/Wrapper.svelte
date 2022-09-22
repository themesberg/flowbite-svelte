<script lang="ts">
  import type { Action } from 'svelte/action';

  export let tag: string = 'div';
  export let show: boolean;
  export let use: Action = () => {};
</script>

{#if show}
  <svelte:element this={tag} use:use {...$$restProps}><slot /></svelte:element>
{:else}
  <slot />
{/if}
