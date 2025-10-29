<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
  import type { Placement } from "@floating-ui/dom";
  import { getContext } from "svelte";
  import { speedDialButton } from "./theme";
  import type { SpeedCtxType, SpeedDialButtonProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  const context = getContext<SpeedCtxType>("speed-dial");

  let {
    children,
    name = "",
    color = "light",
    tooltip: _tooltip,
    pill = context.pill,
    textOutside = context.textOutside,
    textClass,
    class: className,
    classes,
    ...restProps
  }: SpeedDialButtonProps = $props();

  warnThemeDeprecation("SpeedDialButton", { textClass }, { textClass: "span" });
  const styling = $derived(
    classes ?? {
      span: textClass
    }
  );

  let tooltip: Placement | "none" = _tooltip ?? context.tooltip;

  const theme = getTheme("speedDialButton");

  let { base, span } = $derived(speedDialButton({ textOutside, noTooltip: tooltip === "none" }));
  let spanCls = $derived(tooltip === "none" || textOutside ? span({ class: clsx(theme?.span, styling.span) }) : "sr-only");

  let buttonCls = $derived(base({ class: clsx(theme?.base, className) }));
</script>

<Button {pill} {color} {...restProps} class={buttonCls}>
  {@render children?.()}
  <span class={spanCls}>{name}</span>
</Button>

{#if tooltip !== "none"}
  <Tooltip placement={tooltip} type="dark">{name}</Tooltip>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SpeedDialButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1541)
## Props
@prop children
@prop name = ""
@prop color = "light"
@prop tooltip: _tooltip
@prop pill = context.pill
@prop textOutside = context.textOutside
@prop textClass
@prop class: className
@prop classes
@prop ...restProps
-->
