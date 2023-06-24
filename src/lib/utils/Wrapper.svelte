<script lang="ts">
  import type { Action } from 'svelte/action';

  export let tag: string = 'div';
  export let show: boolean;
  export let use: Action<HTMLElement, any> = () => {};
</script>

{#if show}
  <svelte:element this={tag} use:use {...$$restProps}><slot /></svelte:element>
{:else}
  <slot />
{/if}

<!--
  @component
  ## Props
  @prop tag: string = 'div';
  @prop show: boolean;
  @prop use: Action = () => {};
-->
