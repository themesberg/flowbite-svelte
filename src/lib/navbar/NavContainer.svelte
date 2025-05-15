<script lang="ts">
  import clsx from "clsx";
  import { navbar_container } from "./theme";
  import type { NavContainerProps } from "$lib/types";

  let { children, fluid, class: clasName, ...restProps }: NavContainerProps = $props();
</script>

<div {...restProps} class={navbar_container({ fluid, class: clsx(clasName) })}>
  {@render children?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavContainerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1039)
## Props
@prop children
@prop fluid
@prop class: clasName
@prop ...restProps
-->
