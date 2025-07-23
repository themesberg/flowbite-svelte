<script lang="ts">
  import { Button, Tooltip } from "$lib";
  import type { Placement } from "@floating-ui/dom";
  import { getContext } from "svelte";
  import { speedDialButton, type SpeedDialButtonTheme } from "./theme";
  import type { SpeedCtxType, SpeedDialButtonProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  const context = getContext<SpeedCtxType>("speed-dial");

  let { children, name = "", color = "light", tooltip: _tooltip, pill = context.pill, textOutside = context.textOutside, textClass, class: className, classes, ...restProps }: SpeedDialButtonProps = $props();

  let tooltip: Placement | "none" = _tooltip ?? context.tooltip;

  const theme = getTheme("speedDialButton");

  let { base, span } = $derived(speedDialButton({ textOutside }));
  let spanClass = $derived(tooltip === "none" ? span({ class: clsx((theme as SpeedDialButtonTheme)?.span, textClass) }) : "sr-only");

  // Add flex-col when tooltip is shown
  let buttonClass = $derived(
    base({
      class: clsx((theme as SpeedDialButtonTheme)?.base, className, tooltip !== "none" && "flex-col")
    })
  );
</script>

<Button {pill} {color} {...restProps} class={buttonClass}>
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
[SpeedDialButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1497)
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
