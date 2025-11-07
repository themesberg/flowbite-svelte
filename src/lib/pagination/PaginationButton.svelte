<script lang="ts">
  import clsx from "clsx";
  import { paginationButton } from "./theme";
  import type { PaginationButtonProps } from "$lib/types";
  import { getContext } from "svelte";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, size, onclick, disabled = false, class: className, href, active = false, ...restProps }: PaginationButtonProps = $props();

  const theme = getTheme("paginationButton");

  const group = getContext<boolean>("group");
  const table = getContext<boolean>("table");
  const activeClasses = getContext<string>("activeClasses");

  const paginationCls = $derived.by(() => {
    if (active && activeClasses) {
      return paginationButton({
        size: getContext("size") ?? size,
        active: false, // Set to false to avoid theme's active styles
        group,
        table,
        disabled,
        class: clsx(theme, activeClasses, className)
      });
    }

    // Use default theme styles
    return paginationButton({
      size: getContext("size") ?? size,
      active: active,
      group,
      table,
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
[PaginationButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1196)
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
