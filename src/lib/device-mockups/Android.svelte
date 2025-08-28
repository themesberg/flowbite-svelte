<script lang="ts">
  import { type AndroidProps } from "$lib";
  import { warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { android } from ".";

  let { children, class: className, classes, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, div7Class, ...restProps }: AndroidProps = $props();

  warnThemeDeprecation("Android", { divClass, div2Class, div3Class, div4Class, div5Class, div6Class, div7Class }, { divClass: "class", div2Class: "top", div3Class: "leftTop", div4Class: "leftMid", div5Class: "leftBot", div6Class: "right", div7Class: "slot" });

  const styling = $derived(
    classes ?? {
      top: div2Class,
      leftTop: div3Class,
      leftMid: div4Class,
      leftBot: div5Class,
      right: div6Class,
      slot: div7Class
    }
  );

  const { base, slot, top, leftTop, leftMid, leftBot, right } = android();
</script>

<div {...restProps} class={base({ class: clsx(className ?? divClass) })}>
  <div class={top({ class: clsx(styling.top) })}></div>
  <div class={leftTop({ class: clsx(styling.leftTop) })}></div>
  <div class={leftMid({ class: clsx(styling.leftMid) })}></div>
  <div class={leftBot({ class: clsx(styling.leftBot) })}></div>
  <div class={right({ class: clsx(styling.right) })}></div>
  <div class={slot({ class: clsx(styling.slot) })}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AndroidProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L512)
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
@prop div7Class
@prop ...restProps
-->
