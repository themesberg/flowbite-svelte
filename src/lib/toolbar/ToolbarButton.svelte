<script lang="ts">
  import { getContext } from "svelte";
  import { toolbarButton } from ".";
  import type { ToolbarButtonProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  const background = getContext("background");
  let { children, color, name, "aria-label": ariaLabel, size, class: className, ...restProps }: ToolbarButtonProps = $props();

  const theme = getTheme("toolbarButton");

  const buttonCls = $derived(
    toolbarButton({
      color,
      size,
      background: !!background,
      class: clsx(theme, className)
    })
  );
</script>

{#if restProps.href === undefined}
  <button type="button" {...restProps} class={buttonCls} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children?.()}
  </button>
{:else}
  <a {...restProps} class={buttonCls} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children?.()}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToolbarButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1136)
## Props
@prop children
@prop color
@prop name
@prop "aria-label": ariaLabel
@prop size
@prop class: className
@prop ...restProps
-->
