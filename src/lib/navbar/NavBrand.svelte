<script lang="ts">
  import clsx from "clsx";
  import { navbarBrand } from "./theme";
  import type { NavBrandProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, class: className, ...restProps }: NavBrandProps = $props();

  const theme = $derived(getTheme("navbarBrand"));
</script>

<a data-scope="nav-brand" data-part="base" {...restProps} class={navbarBrand({ class: clsx(theme, className) })}>
  {@render children?.()}
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1097)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
