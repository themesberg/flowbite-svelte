<script lang="ts">
  import { Button, Tooltip } from "$lib";
  import { getContext } from "svelte";
  import { speedDialButton, type SpeedDialButtonTheme } from "./theme";
  import type { SpeedCtxType, SpeedDialButtonProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  const context = getContext<SpeedCtxType>("speed-dial");

  let { children, name = "", color = "light", tooltip = context.tooltip, pill = context.pill, textOutside = context.textOutside, textClass, class: className, ...restProps }: SpeedDialButtonProps = $props();

  const theme = getTheme("speedDialButton");

  let { base, span } = $derived(speedDialButton({ textOutside, tooltip: tooltip == "none" }));
  let spanClass = $derived(tooltip === "none" ? span({class:clsx((theme as SpeedDialButtonTheme)?.span, textClass)}) : "sr-only");
</script>

<Button {pill} {color} {...restProps} class={base({class:clsx((theme as SpeedDialButtonTheme)?.base, className)})}>
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
[SpeedDialButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1501)
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
