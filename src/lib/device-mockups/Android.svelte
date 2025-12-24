<script lang="ts">
  import type { AndroidProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";
  import { android } from "./theme";

  let { children, class: className, classes, ...restProps }: AndroidProps = $props();

  const theme = $derived(getTheme("android"));
  const styling = $derived(classes);

  const { base, slot, top, leftTop, leftMid, leftBot, right } = android();
</script>

<div {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div class={top({ class: clsx(theme?.top, styling?.top) })}></div>
  <div class={leftTop({ class: clsx(theme?.leftTop, styling?.leftTop) })}></div>
  <div class={leftMid({ class: clsx(theme?.leftMid, styling?.leftMid) })}></div>
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
[AndroidProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L599)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
