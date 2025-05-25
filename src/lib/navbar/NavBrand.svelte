<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { navbar_brand } from "./theme";
  import type { NavBrandProps } from "$lib/types";

  let { children, class: className, ...restProps }: NavBrandProps = $props();
</script>

<a {...restProps} class={twMerge(navbar_brand(), clsx(className))}>
  {@render children?.()}
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1129)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
