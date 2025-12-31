<script lang="ts">
  import { tablet } from "./theme";
  import type { TabletProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";

  let { children, class: className, classes, ...restProps }: TabletProps = $props();

  const theme = $derived(getTheme("tablet"));
  const styling = $derived(classes);

  const { base, leftTop, leftMid, leftBot, right, slot } = tablet();
</script>

<div data-scope="tablet" data-part="base" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div data-part="left-top" class={leftTop({ class: clsx(theme?.leftTop, styling?.leftTop) })}></div>
  <div data-part="left-mid" class={leftMid({ class: clsx(theme?.leftMid, styling?.leftMid) })}></div>
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
[TabletProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L622)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
