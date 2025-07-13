<script lang="ts">
  import clsx from "clsx";
  import { cn } from "$lib";
  import { navbarBrand } from "./theme";
  import type { NavBrandProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: NavBrandProps = $props();

  const theme = getTheme("navBrand");
</script>

<a {...restProps} class={cn(navbarBrand(), clsx(className), theme)}>
  {@render children?.()}
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1107)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
