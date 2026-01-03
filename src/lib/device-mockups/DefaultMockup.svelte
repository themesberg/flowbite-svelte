<script lang="ts">
  import type { DefaultMockupProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { defaultMockup } from "./theme";

  let { children, class: className, classes, ...restProps }: DefaultMockupProps = $props();

  const theme = $derived(getTheme("defaultMockup"));
  const styling = $derived(classes);
  const { base, screen, leftTop, leftMiddle, leftBottom, right } = defaultMockup();
</script>

<div data-scope="default-mockup" data-part="base" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
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
[DefaultMockupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L610)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
