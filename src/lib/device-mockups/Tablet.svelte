<script lang="ts">
  import { tablet } from "./theme";
  import type { TabletProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";

  let { children, class: className, classes, ...restProps }: TabletProps = $props();

  const theme = $derived(getTheme("tablet"));
  const styling = $derived(classes);

  const { base, screen, leftTop, leftMiddle, leftBottom, right } = tablet();
</script>

<div data-scope="tablet" data-part="base" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
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
[TabletProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L625)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
