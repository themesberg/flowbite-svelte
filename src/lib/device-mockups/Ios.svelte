<script lang="ts">
  import { ios } from "./theme";
  import type { IosProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";

  let { children, class: className, classes, ...restProps }: IosProps = $props();

  const theme = $derived(getTheme("ios"));
  const styling = $derived(classes);

  const { base, screen, notch, leftTop, leftBottom, right } = ios();
</script>

<div data-scope="ios" data-part="base" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div data-part="notch" class={notch({ class: clsx(theme?.notch, styling?.notch) })}></div>
  <div data-part="left-top" class={leftTop({ class: clsx(theme?.leftTop, styling?.leftTop) })}></div>
  <div data-part="left-bottom" class={leftBottom({ class: clsx(theme?.leftBottom, styling?.leftBottom) })}></div>
  <div data-part="right" class={right({ class: clsx(theme?.right, styling?.right) })}></div>
  <div data-part="screen" class={screen({ class: clsx(theme?.screen, styling?.screen) })}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[IosProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L614)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
