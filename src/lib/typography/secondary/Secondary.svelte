<script lang="ts">
  import clsx from "clsx";
  import { secondary } from "./theme";
  import type { SecondaryProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: SecondaryProps = $props();

  const theme = $derived(getTheme("secondary"));
</script>

<small {...restProps} class={secondary({ class: clsx(theme, className) })}>
  {@render children()}
</small>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SecondaryProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2077)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
