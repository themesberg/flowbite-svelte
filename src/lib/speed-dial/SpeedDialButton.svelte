<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
  import { getContext } from "svelte";
  import { speed_dial_button } from "./theme";
  import type { SpeedCtxType, SpeedDialButtonProps } from "$lib/types";
  import clsx from "clsx";

  const context = getContext<SpeedCtxType>("speed-dial");

  let { children, name = "", color = "light", tooltip = context.tooltip, pill = context.pill, textOutside = context.textOutside, textClass, class: className, ...restProps }: SpeedDialButtonProps = $props();

  let { base, span } = $derived(speed_dial_button({ textOutside, tooltip: tooltip == "none" }));
  let spanClass = $derived(tooltip === "none" ? span({ class: textClass }) : "sr-only");
</script>

<Button {pill} {color} {...restProps} class={base({ class: clsx(className) })}>
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
[SpeedDialButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1416)
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
