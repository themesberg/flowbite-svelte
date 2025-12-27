<script lang="ts">
  import { toolbarButton } from "./theme";
  import type { ToolbarButtonProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, color, name, "aria-label": ariaLabel, "aria-expanded": ariaExpanded, size, class: className, ...restProps }: ToolbarButtonProps = $props();

  const theme = $derived(getTheme("toolbarButton"));

  const buttonCls = $derived(
    toolbarButton({
      color,
      size,
      background: false,
      class: clsx(theme, className)
    })
  );
</script>

{#if restProps.href === undefined}
  <button type="button" {...restProps} class={buttonCls} aria-label={ariaLabel ?? name} aria-expanded={ariaExpanded}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children?.()}
  </button>
{:else}
  <a {...restProps} class={buttonCls} aria-label={ariaLabel ?? name} aria-expanded={ariaExpanded}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children?.()}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToolbarButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1161)
## Props
@prop children
@prop color
@prop name
@prop "aria-label": ariaLabel
@prop "aria-expanded": ariaExpanded
@prop size
@prop class: className
@prop ...restProps
-->
