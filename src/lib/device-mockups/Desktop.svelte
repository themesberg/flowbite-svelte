<script lang="ts">
  import type { DesktopProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { desktop } from "./theme";

  let { children, class: className, classes, ...restProps }: DesktopProps = $props();

  const theme = $derived(getTheme("desktop"));
  const styling = $derived(classes);

  const { base, inner, bot, botUnder } = desktop();
</script>

<div data-scope="desktop" data-part="base" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div data-part="inner" class={inner({ class: clsx(theme?.inner, styling?.inner) })}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
<div data-part="bot" class={bot({ class: clsx(theme?.bot, styling?.bot) })}></div>
<div data-part="bot-under" class={botUnder({ class: clsx(theme?.botUnder, styling?.botUnder) })}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DesktopProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L590)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
