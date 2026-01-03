<script lang="ts">
  import type { LaptopProps } from "$lib";
  import clsx from "clsx";
  import { laptop } from "./theme";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, class: className, classes, ...restProps }: LaptopProps = $props();

  const theme = $derived(getTheme("laptop"));

  const styling = $derived(classes);

  const { base, screen, bottom, bottomCenter } = laptop();
</script>

<div {...restProps}>
  <div data-scope="laptop" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
    <div data-part="screen" class={screen({ class: clsx(theme?.screen, styling?.screen) })}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>

  <div data-part="bottom" class={bottom({ class: clsx(theme?.bottom, styling?.bottom) })}>
    <div data-part="bottom-center" class={bottomCenter({ class: clsx(theme?.bottomCenter, styling?.bottomCenter) })}></div>
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[LaptopProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L601)
## Props
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
