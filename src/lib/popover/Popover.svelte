<script lang="ts">
  import clsx from "clsx";
  import Popper from "../utils/Popper.svelte";
  import { popover } from "./theme";
  import type { PopoverProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let {
    title: titleSlot,
    color = "default",
    trigger = "hover",
    arrow = true,
    children,
    placement = "top",
    class: className,
    classes,
    isOpen = $bindable(false),
    ...restProps
  }: PopoverProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("popover"));

  let { base, title, heading, content } = $derived(popover({ color }));
</script>

<Popper {...restProps} bind:isOpen {placement} {trigger} {arrow} data-scope="popper" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  {#if typeof titleSlot === "string"}
    <div data-part="title" class={title({ class: clsx(theme?.title, styling?.title) })}>
      <h3 data-part="heading" class={heading({ class: clsx(theme?.heading, styling?.heading) })}>{titleSlot}</h3>
    </div>
  {:else if titleSlot}
    {@render titleSlot()}
  {/if}
  <div data-part="content" class={content({ class: clsx(theme?.content, styling?.content) })}>
    {@render children()}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PopoverProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1198)
## Props
@prop title: titleSlot
@prop color = "default"
@prop trigger = "hover"
@prop arrow = true
@prop children
@prop placement = "top"
@prop class: className
@prop classes
@prop isOpen = $bindable(false)
@prop ...restProps
-->
