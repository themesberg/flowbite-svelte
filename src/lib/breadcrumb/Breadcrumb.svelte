<script lang="ts">
  import { breadcrumb } from "./theme";
  import clsx from "clsx";
  import type { BreadcrumbProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, solid = false, class: className, classes, ariaLabel = "Breadcrumb", ...restProps }: BreadcrumbProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("breadcrumb"));

  const { base, content } = $derived(breadcrumb({ solid }));
  let classNav = $derived(base({ class: clsx(theme?.base, className) }));
  let classContent = $derived(content({ class: clsx(theme?.content, styling?.content) }));
</script>

<nav data-scope="breadcrumb" data-part="base" aria-label={ariaLabel} {...restProps} class={classNav}>
  <ol data-part="content" class={classContent}>
    {@render children()}
  </ol>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BreadcrumbProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L310)
## Props
@prop children
@prop solid = false
@prop class: className
@prop classes
@prop ariaLabel = "Breadcrumb"
@prop ...restProps
-->
