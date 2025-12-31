<script lang="ts">
  import { ios } from "./theme";
  import type { IosProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";

  let { children, class: className, classes, ...restProps }: IosProps = $props();

  const theme = $derived(getTheme("ios"));
  const styling = $derived(classes);

  const { base, slot, top, leftTop, leftBot, right } = ios();
</script>

<div data-scope="ios" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
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
[IosProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L614)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
