<script lang="ts">
  import clsx from "clsx";
  import Popper from "$lib/utils/Popper.svelte";
  import { getSideAxis } from "@floating-ui/utils";
  import { setSpeedDialContext } from "$lib/context";
  import { speedDial } from "./theme";
  import type { SpeedDialProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let {
    children,
    placement = "top",
    pill = true,
    tooltip = "left",
    trigger = "hover",
    textOutside = false,
    class: className,
    classes,
    isOpen = $bindable(false),
    ...restProps
  }: SpeedDialProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("speedDial"));

  $effect(() => {
    setSpeedDialContext({ pill, tooltip, textOutside });
  });

  let vertical: boolean = $derived(getSideAxis(placement) === "y");

  let { base, popper } = $derived(speedDial({ vertical }));
</script>

<Popper {...restProps} bind:isOpen {trigger} arrow={false} {placement} class={base({ class: clsx(theme?.base, className) })}>
  <div class={popper({ class: clsx(theme?.popper, styling?.popper) })}>
    {@render children()}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SpeedDialProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1487)
## Props
@prop children
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
