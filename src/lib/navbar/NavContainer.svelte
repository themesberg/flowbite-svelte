<script lang="ts">
  import clsx from "clsx";
  import { navbarContainer } from "./theme";
  import type { NavContainerProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, fluid, class: clasName, ...restProps }: NavContainerProps = $props();

  const theme = getTheme("navContainer");
</script>

<div {...restProps} class={navbarContainer({ fluid, class: clsx(theme, clasName) })}>
  {@render children?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavContainerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1096)
## Props
@prop children
@prop fluid
@prop class: clasName
@prop ...restProps
-->
