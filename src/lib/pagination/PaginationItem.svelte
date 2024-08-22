<script lang="ts">
  import { paginationItem, type PaginationItemProps as Props } from '.';
  import { getContext } from 'svelte';

  let { children, size, class: className, href, active, ...restProps }: Props = $props();

  const group = getContext<boolean>('group');
  const table = getContext<boolean>('table');
  const paginationClass = $derived(paginationItem({ size, active, group, table, className }));
</script>

<svelte:element this={href ? 'a' : 'button'} {href} class={paginationClass} role={href ? 'button' : undefined} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</svelte:element>

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
