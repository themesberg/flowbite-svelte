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

<div {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div class={top({ class: clsx(theme?.top, styling?.top) })}></div>
  <div class={leftTop({ class: clsx(theme?.leftTop, styling?.leftTop) })}></div>
  <div class={leftBot({ class: clsx(theme?.leftBot, styling?.leftBot) })}></div>
  <div class={right({ class: clsx(theme?.right, styling?.right) })}></div>
  <div class={slot({ class: clsx(theme?.slot, styling?.slot) })}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DefaultMockupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L605)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
