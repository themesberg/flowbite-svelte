<script lang="ts">
  import { indicator } from "./theme";
  import clsx from "clsx";
  import type { IndicatorProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, color = "primary", cornerStyle = "circular", size = "md", border = false, placement, offset = true, class: className, ...restProps }: IndicatorProps = $props();

  const theme = getTheme("indicator");

  let hasChildren = !!children;
  const base = $derived(
    indicator({
      color,
      size,
      cornerStyle,
      border,
      placement,
      offset,
      hasChildren,
      class: clsx(theme, className)
    })
  );
</script>

<div {...restProps} class={base}>
  {#if children}
    {@render children()}
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[IndicatorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L995)
## Props
@prop children
@prop color = "primary"
@prop cornerStyle = "circular"
@prop size = "md"
@prop border = false
@prop placement
@prop offset = true
@prop class: className
@prop ...restProps
-->
