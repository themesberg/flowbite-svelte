<script lang="ts">
  import Popper from "$lib/utils/Popper.svelte";
  import { getSideAxis } from "@floating-ui/utils";
  import clsx from "clsx";
  import { setContext } from "svelte";
  import { speed_dial } from "./theme";
  import type { SpeedDialProps, SpeedCtxType } from "$lib/types";

  let { children, popperClass, placement = "top", pill = true, tooltip = "left", trigger = "hover", textOutside = false, class: className, isOpen = $bindable(false), ...restProps }: SpeedDialProps = $props();

  setContext<SpeedCtxType>("speed-dial", { pill, tooltip, textOutside });

  let vertical: boolean = $derived(getSideAxis(placement) === "y");

  let { base, popper } = $derived(speed_dial({ vertical }));
</script>

<!-- class="bg-transparent" -->

<Popper {...restProps} bind:isOpen {trigger} arrow={false} {placement} class={base({ class: clsx(className) })}>
  <div class={popper({ class: popperClass })}>
    {@render children()}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SpeedDialProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1402)
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
