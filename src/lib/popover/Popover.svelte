<script lang="ts">
  import clsx from "clsx";
  import Popper from "../utils/Popper.svelte";
  import { popover, type PopoverTheme } from "./theme";
  import type { PopoverProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { title: titleSlot, color = "default", trigger = "hover", defaultClass, arrow = true, children, placement = "top", class: className, isOpen = $bindable(false), ...restProps }: PopoverProps = $props();

  const theme = getTheme("popover");

  let { base, title, h3, content } = $derived(popover({ color }));
</script>

<Popper {...restProps} bind:isOpen {placement} {trigger} {arrow} class={base({ class: clsx((theme as PopoverTheme)?.base, className) })}>
  {#if typeof titleSlot === "string"}
    <div class={title({ class: clsx((theme as PopoverTheme)?.title) })}>
      <h3 class={h3({ class: clsx((theme as PopoverTheme)?.h3) })}>{titleSlot}</h3>
    </div>
  {:else if titleSlot}
    {@render titleSlot()}
  {/if}
  <div class={content({ class: clsx((theme as PopoverTheme)?.content, defaultClass) })}>
    {@render children()}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PopoverProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1186)
## Props
@prop title: titleSlot
@prop color = "default"
@prop trigger = "hover"
@prop defaultClass
@prop arrow = true
@prop children
@prop placement = "top"
@prop class: className
@prop isOpen = $bindable(false)
@prop ...restProps
-->
