<script lang="ts">
  import type { SmartwatchProps } from "$lib";
  import { warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { smartwatch } from "./theme";

  let { children, class: className, classes, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, ...restProps }: SmartwatchProps = $props();

  warnThemeDeprecation(
    "Smartwatch",
    { divClass, div2Class, div3Class, div4Class, div5Class, div6Class },
    { divClass: "class", div2Class: "top", div3Class: "rightTop", div4Class: "rightBot", div5Class: "bot", div6Class: "slot" }
  );
  const styling = $derived(
    classes ?? {
      top: div2Class,
      rightTop: div3Class,
      rightBot: div4Class,
      bot: div5Class,
      slot: div6Class
    }
  );
  const { base, top, rightTop, rightBot, bot, slot } = smartwatch();
</script>

<div {...restProps}>
  <div class={base({ class: clsx(className ?? divClass) })}></div>
  <div class={top({ class: clsx(styling.top) })}>
    <div class={rightTop({ class: clsx(styling.rightTop) })}></div>
    <div class={rightBot({ class: clsx(styling.rightBot) })}></div>
    <div class={slot({ class: clsx(styling.slot) })}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
  <div class={bot({ class: clsx(styling.bot) })}></div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SmartwatchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L545)
## Props
@prop children
@prop class: className
@prop classes
@prop divClass
@prop div2Class
@prop div3Class
@prop div4Class
@prop div5Class
@prop div6Class
@prop ...restProps
-->
