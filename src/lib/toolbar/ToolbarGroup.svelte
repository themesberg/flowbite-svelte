<script lang="ts">
  import { getTheme } from "$lib/theme/themeUtils";
  import type { ToolbarGroupProps } from "$lib/types";
  import clsx from "clsx";
  import { getToolbarContext } from "$lib/context";
  import { toolbarGroup } from "./theme";

  let { children, spacing, padding, position = "middle", class: className, ...restProps }: ToolbarGroupProps = $props();

  const theme = $derived(getTheme("toolbarGroup"));

  const groupCls = $derived(toolbarGroup({ spacing, padding, position, class: clsx(theme, className) }));

  const ctx = getToolbarContext();

  if (ctx) ctx.separators = true;
</script>

<div {...restProps} class={groupCls}>
  {@render children?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToolbarGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1234)
## Props
@prop children
@prop spacing
@prop padding
@prop position = "middle"
@prop class: className
@prop ...restProps
-->
