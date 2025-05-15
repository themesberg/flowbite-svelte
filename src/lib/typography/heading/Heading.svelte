<script lang="ts">
  import clsx from "clsx";
  import { heading } from "./index";
  import type { HeadingProps } from "$lib/types";

  let { children, tag = "h1", class: className, ...restProps }: HeadingProps = $props();

  let headingClass = $derived(heading({ tag, class: clsx(className) }));
</script>

<svelte:element this={tag} {...restProps} class={headingClass}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[HeadingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1733)
## Props
@prop children
@prop tag = "h1"
@prop class: className
@prop ...restProps
-->
