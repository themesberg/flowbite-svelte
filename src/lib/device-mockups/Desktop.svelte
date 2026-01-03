<script lang="ts">
  import type { DesktopProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { desktop } from "./theme";

  let { children, class: className, classes, ...restProps }: DesktopProps = $props();

  const theme = $derived(getTheme("desktop"));
  const styling = $derived(classes);

  const { base, screen, bottom, bottomBase } = desktop();
</script>

<div data-scope="desktop" data-part="base" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div data-part="screen" class={screen({ class: clsx(theme?.screen, styling?.screen) })}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
<div data-part="bottom" class={bottom({ class: clsx(theme?.bottom, styling?.bottom) })}></div>
<div data-part="bottom-base" class={bottomBase({ class: clsx(theme?.bottomBase, styling?.bottomBase) })}></div>

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
