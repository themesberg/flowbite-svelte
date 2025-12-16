<script lang="ts">
  import clsx from "clsx";
  import Popper from "../utils/Popper.svelte";
  import { popover } from "./theme";
  import type { PopoverProps } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { untrack } from "svelte";

  let {
    title: titleSlot,
    color = "default",
    trigger = "hover",
    defaultClass,
    arrow = true,
    children,
    placement = "top",
    class: className,
    classes,
    isOpen = $bindable(false),
    ...restProps
  }: PopoverProps = $props();

  warnThemeDeprecation(
    "Popover",
    untrack(() => ({ defaultClass })),
    { defaultClass: "content" }
  );

  const styling = $derived(classes ?? { content: defaultClass });

  let { base, title, h3, content } = $derived(popover({ color }));

  const baseCls = $derived(base({ class: clsx(getTheme("popover")?.base, className) }));
  const titleCls = $derived(title({ class: clsx(getTheme("popover")?.title, classes?.title) }));
  const h3Cls = $derived(h3({ class: clsx(getTheme("popover")?.h3, classes?.h3) }));
  const contentCls = $derived(content({ class: clsx(getTheme("popover")?.content, styling.content) }));
</script>

<Popper {...restProps} bind:isOpen {placement} {trigger} {arrow} class={baseCls}>
  {#if typeof titleSlot === "string"}
    <div class={titleCls}>
      <h3 class={h3Cls}>{titleSlot}</h3>
    </div>
  {:else if titleSlot}
    {@render titleSlot()}
  {/if}
  <div class={contentCls}>
    {@render children()}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PopoverProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1306)
## Props
@prop title: titleSlot
@prop color = "default"
@prop trigger = "hover"
@prop defaultClass
@prop arrow = true
@prop children
@prop placement = "top"
@prop class: className
@prop classes
@prop isOpen = $bindable(false)
@prop ...restProps
-->
