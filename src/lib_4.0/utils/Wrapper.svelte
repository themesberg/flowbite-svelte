<script lang="ts">
  import type { Action } from 'svelte/action';

  export let tag: string = 'div';
  export let show: boolean;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  export let use: Action<HTMLElement, any> = () => {};
</script>

{#if show}
  <svelte:element this={tag} use:use {...$$restProps}><slot /></svelte:element>
{:else}
  <slot />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let tag: string = 'div';
@prop export let show: boolean;
@prop export let use: Action<HTMLElement, any> = () => {};
-->
