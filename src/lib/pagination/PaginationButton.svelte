<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { paginationbutton } from ".";
  import type { PaginationButtonProps } from "$lib/types";
  import { getContext } from "svelte";

  let { children, size, onclick, disabled = false, class: className, href, active = false, ...restProps }: PaginationButtonProps = $props();

  const group = getContext<boolean>("group");
  const table = getContext<boolean>("table");

  const paginationCls = $derived(
    paginationbutton({
      size: getContext("size") ?? size,
      active,
      group,
      table,
      disabled
    })
  );

  function handleClick(e: MouseEvent) {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onclick) onclick();
  }
</script>

{#if href}
  <a {href} {...restProps} class={twMerge(paginationCls, clsx(className))} onclick={handleClick}>
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <button {...restProps} {disabled} class={twMerge(paginationCls, clsx(className))} onclick={handleClick}>
    {#if children}
      {@render children()}
    {/if}
  </button>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PaginationButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1124)
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
