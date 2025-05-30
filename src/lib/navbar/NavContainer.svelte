<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { navbar_container } from "./theme";
  import type { NavContainerProps } from "$lib/types";

  let { children, fluid, class: clasName, ...restProps }: NavContainerProps = $props();
</script>

<div {...restProps} class={twMerge(navbar_container({ fluid }), clsx(clasName))}>
  {@render children?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavContainerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1068)
## Props
@prop children
@prop fluid
@prop class: clasName
@prop ...restProps
-->
