<script lang="ts">
  import clsx from "clsx";
  import { navbarContainer } from "./theme";
  import type { NavContainerProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, fluid, class: className, ...restProps }: NavContainerProps = $props();

  const theme = $derived(getTheme("navbarContainer"));
</script>

<div {...restProps} class={navbarContainer({ fluid, class: clsx(theme, className) })}>
  {@render children?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavContainerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1099)
## Props
@prop children
@prop fluid
@prop class: className
@prop ...restProps
-->
