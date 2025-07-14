<script lang="ts">
  import { Button, Tooltip, cn } from "$lib";
  import { getContext } from "svelte";
  import { speedDialButton, type SpeedDialButtonTheme } from "./theme";
  import type { SpeedCtxType, SpeedDialButtonProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  const context = getContext<SpeedCtxType>("speed-dial");

  let { children, name = "", color = "light", tooltip = context.tooltip, pill = context.pill, textOutside = context.textOutside, textClass, class: className, ...restProps }: SpeedDialButtonProps = $props();

  const theme = getTheme("speedDialButton");

  let { base, span } = $derived(speedDialButton({ textOutside, tooltip: tooltip == "none" }));
  let spanClass = $derived(tooltip === "none" ? cn(span(), clsx(textClass), (theme as SpeedDialButtonTheme)?.span) : "sr-only");
</script>

<Button {pill} {color} {...restProps} class={cn(base(), clsx(className), (theme as SpeedDialButtonTheme)?.base)}>
  {@render children?.()}
  <span class={spanClass}>{name}</span>
</Button>

{#if tooltip !== "none"}
  <Tooltip placement={tooltip} type="dark">{name}</Tooltip>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SpeedDialButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1500)
## Props
@prop children
@prop name = ""
@prop color = "light"
@prop tooltip = context.tooltip
@prop pill = context.pill
@prop textOutside = context.textOutside
@prop textClass
@prop class: className
@prop ...restProps
-->
