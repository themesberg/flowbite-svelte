<script lang="ts">
  import clsx from "clsx";
  import { paginationButton } from "./theme";
  import type { PaginationButtonProps } from "$lib/types";
  import { getPaginationContext } from "$lib/context";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, size, onclick, disabled = false, class: className, href, active = false, ...restProps }: PaginationButtonProps = $props();

  const theme = $derived(getTheme("paginationButton"));

  // Get context - it will be undefined if used outside Pagination
  const ctx = getPaginationContext();

  const paginationCls = $derived.by(() => {
    if (active && ctx?.activeClasses) {
      return paginationButton({
        size: ctx?.size ?? size,
        active: false, // Set to false to avoid theme's active styles
        group: ctx?.group ?? false,
        table: ctx?.table ?? false,
        disabled,
        class: clsx(theme, ctx.activeClasses, className)
      });
    }

    // Use default theme styles
    return paginationButton({
      size: ctx?.size ?? size,
      active: active,
      group: ctx?.group ?? false,
      table: ctx?.table ?? false,
      disabled,
      class: clsx(theme, className)
    });
  });

  function handleClick(e: MouseEvent) {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onclick) onclick();
  }
</script>

{#if href}
  <a {href} {...restProps} class={paginationCls} onclick={handleClick}>
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <button {...restProps} {disabled} class={paginationCls} onclick={handleClick}>
    {#if children}
      {@render children()}
    {/if}
  </button>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PaginationButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1147)
## Props
@prop children
@prop size
@prop onclick
@prop disabled = false
@prop class: className
@prop href
@prop active = false
@prop ...restProps
-->
