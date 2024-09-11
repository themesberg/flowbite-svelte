<script lang="ts">
  import { paginationItem, type PaginationItemProps as Props } from '.';
  import { getContext } from 'svelte';

  let { children, size, class: className, href, active, ...restProps }: Props = $props();

  const group = getContext<boolean>('group');
  const table = getContext<boolean>('table');
  const paginationClass = $derived(paginationItem({ size, active, group, table, className }));
</script>

{#if href}
  <a {href} class={paginationClass} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <button class={paginationClass} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </button>
{/if}


<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop size
@prop class: className
@prop href
@prop active
@prop ...restProps
-->
