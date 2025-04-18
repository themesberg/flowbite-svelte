<script lang="ts">
  import clsx from "clsx";
  import { paginationItem, type PaginationItemProps as Props } from ".";
  import { getContext } from "svelte";

  let { children, size, class: className, href, active, ...restProps }: Props = $props();

  const group = getContext<boolean>("group");
  const table = getContext<boolean>("table");
  const paginationClass = $derived(paginationItem({ size, active, group, table, class: clsx(className) }));
</script>

{#if href}
  <a {href} {...restProps} class={paginationClass}>
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <button {...restProps} class={paginationClass}>
    {#if children}
      {@render children()}
    {/if}
  </button>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
## Props
@prop children
@prop size
@prop class: className
@prop href
@prop active
@prop ...restProps
-->
