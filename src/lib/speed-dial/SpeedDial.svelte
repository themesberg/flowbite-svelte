<script lang="ts">
  import clsx from "clsx";
  import { Popper } from "$lib";
  import { getSideAxis } from "@floating-ui/utils";
  import { setContext } from "svelte";
  import { speedDial, type SpeedDialTheme } from "./theme";
  import type { SpeedDialProps, SpeedCtxType } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, popperClass, placement = "top", pill = true, tooltip = "left", trigger = "hover", textOutside = false, class: className, isOpen = $bindable(false), ...restProps }: SpeedDialProps = $props();

  const theme = getTheme("speedDial");

  setContext<SpeedCtxType>("speed-dial", { pill, tooltip, textOutside });

  let vertical: boolean = $derived(getSideAxis(placement) === "y");

  let { base, popper } = $derived(speedDial({ vertical }));
</script>

<Popper {...restProps} bind:isOpen {trigger} arrow={false} {placement} class={base({ class: clsx((theme as SpeedDialTheme)?.base, className) })}>
  <div class={popper({ class: clsx((theme as SpeedDialTheme)?.popper, popperClass) })}>
    {@render children()}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SpeedDialProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1471)
## Props
@prop children
@prop popperClass
@prop placement = "top"
@prop pill = true
@prop tooltip = "left"
@prop trigger = "hover"
@prop textOutside = false
@prop class: className
@prop isOpen = $bindable(false)
@prop ...restProps
-->
