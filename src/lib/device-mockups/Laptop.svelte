<script lang="ts">
  import type { LaptopProps } from "$lib";
  import clsx from "clsx";
  import { laptop } from "./theme";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, class: className, classes, ...restProps }: LaptopProps = $props();

  const theme = $derived(getTheme("laptop"));

  const styling = $derived(classes);

  const { base, inner, bot, botCen } = laptop();
</script>

<div {...restProps}>
  <div data-scope="laptop" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
    <div data-part="inner" class={inner({ class: clsx(theme?.inner, styling?.inner) })}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>

  <div data-part="bot" class={bot({ class: clsx(theme?.bot, styling?.bot) })}>
    <div data-part="bot-cen" class={botCen({ class: clsx(theme?.botCen, styling?.botCen) })}></div>
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[LaptopProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L598)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
