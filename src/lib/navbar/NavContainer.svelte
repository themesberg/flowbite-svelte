<script lang="ts">
  import { cn } from "$lib";
  import clsx from "clsx";
  import { navbarContainer } from "./theme";
  import type { NavContainerProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, fluid, class: clasName, ...restProps }: NavContainerProps = $props();

  const theme = getTheme("navContainer");
</script>

<div {...restProps} class={cn(navbarContainer({ fluid }), clsx(clasName), theme)}>
  {@render children?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavContainerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1109)
## Props
@prop children
@prop fluid
@prop class: clasName
@prop ...restProps
-->
