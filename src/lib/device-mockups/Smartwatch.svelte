<script lang="ts">
  import type { SmartwatchProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { smartwatch } from "./theme";

  let { children, class: className, classes, ...restProps }: SmartwatchProps = $props();

  const theme = $derived(getTheme("smartwatch"));
  const styling = $derived(classes);
  const { topBase, base, rightTop, rightBottom, bottomBase, screen } = smartwatch();
</script>

<div {...restProps}>
  <div data-part="top-base" class={topBase({ class: clsx(theme?.topBase, styling?.topBase) })}></div>
  <div data-scope="smartwatch" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
    <div data-part="right-top" class={rightTop({ class: clsx(theme?.rightTop, styling?.rightTop) })}></div>
    <div data-part="right-bottom" class={rightBottom({ class: clsx(theme?.rightBottom, styling?.rightBottom) })}></div>
    <div data-part="screen" class={screen({ class: clsx(theme?.screen, styling?.screen) })}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
  <div data-part="bottom-base" class={bottomBase({ class: clsx(theme?.bottomBase, styling?.bottomBase) })}></div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SmartwatchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L618)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
