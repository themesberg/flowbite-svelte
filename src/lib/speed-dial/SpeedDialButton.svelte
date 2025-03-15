<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
  import { getContext } from "svelte";
  import { speed_dial_button } from "./theme";
  import type { SpeedCtxType, SpeedDialButtonProps as Props } from "./type";
  import clsx from "clsx";

  const context = getContext<SpeedCtxType>("speed-dial");

  let { children, name = "", color = "light", tooltip = context.tooltip, pill = context.pill, textOutside = context.textOutside, textClass, class: className, ...restProps }: Props = $props();

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
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:name: any = "";
@props:color: any = "light";
@props:tooltip: any = context.tooltip;
@props:pill: any = context.pill;
@props:textOutside: any = context.textOutside;
@props:textClass: any;
@props:class: string;
-->
