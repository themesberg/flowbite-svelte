<script lang="ts">
  import clsx from "clsx";
  import { heading } from "./theme";
  import type { HeadingProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, tag = "h1", class: className, ...restProps }: HeadingProps = $props();

  const theme = $derived(getTheme("heading"));

  let headingCls = $derived(heading({ tag, class: clsx(theme, className) }));
</script>

<svelte:element this={tag} data-scope="heading" data-part="base" {...restProps} class={headingCls}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[HeadingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1874)
## Props
@prop children
@prop tag = "h1"
@prop class: className
@prop ...restProps
-->
