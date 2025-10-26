<script lang="ts">
  import clsx from "clsx";
  import Popper from "$lib/utils/Popper.svelte";
  import { getSideAxis } from "@floating-ui/utils";
  import { setContext } from "svelte";
  import { speedDial } from "./theme";
  import type { SpeedDialProps, SpeedCtxType } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, popperClass, placement = "top", pill = true, tooltip = "left", trigger = "hover", textOutside = false, class: className, classes, isOpen = $bindable(false), ...restProps }: SpeedDialProps = $props();

  warnThemeDeprecation("SpeedDial", { popperClass }, { popperClass: "popper" });
  const styling = $derived(
    classes ?? {
      popper: popperClass
    }
  );

  const theme = getTheme("speedDial");

  setContext<SpeedCtxType>("speed-dial", { pill, tooltip, textOutside });

  let vertical: boolean = $derived(getSideAxis(placement) === "y");

  let { base, popper } = $derived(speedDial({ vertical }));
</script>

<Popper {...restProps} bind:isOpen {trigger} arrow={false} {placement} class={base({ class: clsx(theme?.base, className) })}>
  <div class={popper({ class: clsx(theme?.popper, styling.popper) })}>
    {@render children()}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SpeedDialProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1491)
## Props
@prop children
@prop popperClass
@prop placement = "top"
@prop pill = true
@prop tooltip = "left"
@prop trigger = "hover"
@prop textOutside = false
@prop class: className
@prop classes
@prop isOpen = $bindable(false)
@prop ...restProps
-->
