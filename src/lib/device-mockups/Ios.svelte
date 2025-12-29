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
[IosProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L609)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
