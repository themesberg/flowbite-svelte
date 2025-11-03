<script lang="ts">
  import { tablet } from "./theme";
  import type { TabletProps } from "$lib";
  import { warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";

  let { children, class: className, classes, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, ...restProps }: TabletProps = $props();

  warnThemeDeprecation(
    "Tablet",
    { divClass, div2Class, div3Class, div4Class, div5Class, div6Class },
    { divClass: "class", div2Class: "leftTop", div3Class: "leftMid", div4Class: "leftBot", div5Class: "right", div6Class: "slot" }
  );
  const styling = $derived(
    classes ?? {
      leftTop: div2Class,
      leftMid: div3Class,
      leftBot: div4Class,
      right: div5Class,
      slot: div6Class
    }
  );

  const { base, leftTop, leftMid, leftBot, right, slot } = tablet();
</script>

<div {...restProps} class={base({ class: clsx(className ?? divClass) })}>
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
[TabletProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L590)
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
