<script lang="ts">
  import clsx from "clsx";
  import { paginationItem } from "./theme";
  import type { PaginationItemProps } from "$lib/types";
  import { getPaginationContext } from "$lib/context";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, size, class: className, href, active, ...restProps }: PaginationItemProps = $props();

  const theme = $derived(getTheme("paginationItem"));

  // Get context - it will be undefined if used outside Pagination
  const ctx = getPaginationContext();

  const paginationCls = $derived(
    paginationItem({
      size: ctx?.size ?? size,
      active,
      group: ctx?.group ?? false,
      table: ctx?.table ?? false,
      class: clsx(theme, className)
    })
  );
</script>

{#if href}
  <a {href} {...restProps} class={paginationCls}>
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <button {...restProps} class={paginationCls}>
    {#if children}
      {@render children()}
    {/if}
  </button>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PaginationItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1232)
## Props
@prop children
@prop size
@prop class: className
@prop href
@prop active
@prop ...restProps
-->
