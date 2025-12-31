<script lang="ts">
  import type { DefaultMockupProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { defaultMockup } from "./theme";

  let { children, class: className, classes, ...restProps }: DefaultMockupProps = $props();

  const theme = $derived(getTheme("defaultMockup"));
  const styling = $derived(classes);
  const { base, slot, top, leftTop, leftBot, right } = defaultMockup();
</script>

<div data-scope="default-mockup" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div data-part="top" class={top({ class: clsx(theme?.top, styling?.top) })}></div>
  <div data-part="left-top" class={leftTop({ class: clsx(theme?.leftTop, styling?.leftTop) })}></div>
  <div data-part="left-bot" class={leftBot({ class: clsx(theme?.leftBot, styling?.leftBot) })}></div>
  <div data-part="right" class={right({ class: clsx(theme?.right, styling?.right) })}></div>
  <div data-part="slot" class={slot({ class: clsx(theme?.slot, styling?.slot) })}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DefaultMockupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L610)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
