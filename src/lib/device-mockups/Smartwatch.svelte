<script lang="ts">
  import type { SmartwatchProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { smartwatch } from "./theme";

  let { children, class: className, classes, ...restProps }: SmartwatchProps = $props();

  const theme = $derived(getTheme("smartwatch"));
  const styling = $derived(classes);
  const { base, top, rightTop, rightBot, bot, slot } = smartwatch();
</script>

<div {...restProps}>
  <div data-scope="smart-watch" class={base({ class: clsx(theme?.base, className) })}></div>
  <div data-part="top" class={top({ class: clsx(theme?.top, styling?.top) })}>
    <div data-part="right-top" class={rightTop({ class: clsx(theme?.rightTop, styling?.rightTop) })}></div>
    <div data-part="right-bot" class={rightBot({ class: clsx(theme?.rightBot, styling?.rightBot) })}></div>
    <div data-part="slot" class={slot({ class: clsx(theme?.slot, styling?.slot) })}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
  <div data-part="bot" class={bot({ class: clsx(theme?.bot, styling?.bot) })}></div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SmartwatchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L613)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
