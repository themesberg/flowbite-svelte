<script lang="ts">
  import { type DefaultMockupProps } from "$lib";
  import { warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { defaultMockup } from ".";

  let { children, class: className, classes, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, ...restProps }: DefaultMockupProps = $props();

  warnThemeDeprecation("DefaultMockup", { divClass, div2Class, div3Class, div4Class, div5Class, div6Class }, { divClass: "class", div2Class: "top", div3Class: "leftTop", div4Class: "leftBot", div5Class: "right", div6Class: "slot" });
  let styling = $derived(
    classes ?? {
      top: div2Class,
      leftTop: div3Class,
      leftBot: div4Class,
      right: div5Class,
      slot: div6Class
    }
  );

  const { base, slot, top, leftTop, leftBot, right } = defaultMockup();
</script>

<div {...restProps} class={base({ class: clsx(className ?? divClass) })}>
  <div class={top({ class: clsx(styling.top) })}></div>
  <div class={leftTop({ class: clsx(styling.leftTop) })}></div>
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
[DefaultMockupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L513)
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
