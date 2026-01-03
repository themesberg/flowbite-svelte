<script lang="ts">
  import type { AndroidProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { android } from "./theme";

  let { children, class: className, classes, ...restProps }: AndroidProps = $props();

  const theme = $derived(getTheme("android"));
  const styling = $derived(classes);

  const { base, screen, notch, leftTop, leftMiddle, leftBottom, right } = android();
</script>

<div data-scope="android" data-part="base" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div data-part="notch" class={notch({ class: clsx(theme?.notch, styling?.notch) })}></div>
  <div data-part="left-top" class={leftTop({ class: clsx(theme?.leftTop, styling?.leftTop) })}></div>
  <div data-part="left-middle" class={leftMiddle({ class: clsx(theme?.leftMiddle, styling?.leftMiddle) })}></div>
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
[AndroidProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L606)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
