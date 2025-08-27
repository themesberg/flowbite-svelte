<script lang="ts">
  import clsx from "clsx";
  import Popper from "../utils/Popper.svelte";
  import { popover } from "./theme";
  import type { PopoverProps } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { title: titleSlot, color = "default", trigger = "hover", defaultClass, arrow = true, children, placement = "top", class: className, classes, isOpen = $bindable(false), ...restProps }: PopoverProps = $props();

  // content, title, h3
  warnThemeDeprecation("Popover", { defaultClass }, { defaultClass: "content" });
  const styling = $derived(classes ?? { content: defaultClass });

  const theme = getTheme("popover");

  let { base, title, h3, content } = $derived(popover({ color }));
</script>

<Popper {...restProps} bind:isOpen {placement} {trigger} {arrow} class={base({ class: clsx(theme?.base, className) })}>
  {#if typeof titleSlot === "string"}
    <div class={title({ class: clsx(theme?.title, classes?.title) })}>
      <h3 class={h3({ class: clsx(theme?.h3, classes?.h3) })}>{titleSlot}</h3>
    </div>
  {:else if titleSlot}
    {@render titleSlot()}
  {/if}
  <div class={content({ class: clsx(theme?.content, styling.content) })}>
    {@render children()}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PopoverProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1199)
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
