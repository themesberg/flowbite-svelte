<script lang="ts">
  import { type LaptopProps } from "$lib";
  import { warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { laptop } from ".";

  let { children, class: className, classes, divClass, div2Class, div3Class, div4Class, ...restProps }: LaptopProps = $props();

  warnThemeDeprecation("Laptop", { divClass, div2Class, div3Class, div4Class }, { divClass: "class", div2Class: "top", div3Class: "lefttop", div4Class: "leftBot", div5Class: "right", div6Class: "slot" });
  const styling = $derived(
    classes ?? {
      inner: div2Class,
      bot: div3Class,
      botCen: div4Class
    }
  );

  const { base, inner, bot, botCen } = laptop();
</script>

<div {...restProps}>
  <div class={base({ class: clsx(className ?? divClass) })}>
    <div class={inner({ class: clsx(styling.inner) })}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>

  <div class={bot({ class: clsx(styling.bot) })}>
    <div class={botCen({ class: clsx(styling.botCen) })}></div>
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[LaptopProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L504)
## Props
@prop children
@prop class: className
@prop classes
@prop divClass
@prop div2Class
@prop div3Class
@prop div4Class
@prop ...restProps
-->
