<script lang="ts">
  import clsx from "clsx";
  import { navbar_brand } from "./theme";
  import type { NavBrandProps } from "$lib/types";

  let { children, class: className, ...restProps }: NavBrandProps = $props();
</script>

<a {...restProps} class={navbar_brand({ class: clsx(className) })}>
  {@render children?.()}
</a>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[NavBrandProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L906)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
