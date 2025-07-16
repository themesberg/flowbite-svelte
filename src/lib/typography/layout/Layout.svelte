<script lang="ts">
  import clsx from "clsx";
  import { layout } from "./index";
  import type { LayoutProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: LayoutProps = $props();

  const theme = getTheme("layout");

  let divCls = $derived(layout({ class: clsx(theme, className) }));
</script>

<div {...restProps} class={divCls}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[LayoutProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1943)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
