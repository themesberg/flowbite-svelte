<script lang="ts">
  import { ios } from ".";
  import { type IosProps, cn } from "$lib";
  import { themeDeprecated } from "$lib/theme/themeUtils";
  import clsx from "clsx";

  let { children, class: className, classes, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, ...restProps }: IosProps = $props();

  themeDeprecated("Ios", { divClass, div2Class, div3Class, div4Class, div5Class, div6Class }, { divClass: "class", div2Class: "top", div3Class: "lefttop", div4Class: "leftBot", div5Class: "right", div6Class: "slot" });
  let styling = $derived(
    classes ?? {
      top: div2Class,
      leftTop: div3Class,
      leftBot: div4Class,
      right: div5Class,
      slot: div6Class
    }
  );

  const { base, slot, top, leftTop, leftBot, right } = ios();
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
[IosProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L515)
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
