<script lang="ts">
  import clsx from "clsx";
  import { paginationItem } from ".";
  import type { PaginationItemProps } from "$lib/types";
  import { getContext } from "svelte";

  let { children, size, class: className, href, active, ...restProps }: PaginationItemProps = $props();

  const group = getContext<boolean>("group");
  const table = getContext<boolean>("table");
  const paginationClass = $derived(paginationItem({ size: getContext("size") ?? size, active, group, table, class: clsx(className) }));
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
[Go to docs](https://flowbite-svelte.com/)
## Type
[PaginationItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1095)
## Props
@prop children
@prop size
@prop class: className
@prop href
@prop active
@prop ...restProps
-->
