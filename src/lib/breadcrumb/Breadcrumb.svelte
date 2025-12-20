<script lang="ts">
  import { breadcrumb } from "./theme";
  import clsx from "clsx";
  import type { BreadcrumbProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, solid = false, class: className, classes, ariaLabel = "Breadcrumb", ...restProps }: BreadcrumbProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("breadcrumb"));

  const { base, list } = $derived(breadcrumb({ solid }));
  let classNav = $derived(base({ class: clsx(theme?.base, className) }));
  let classList = $derived(list({ class: clsx(theme?.list, styling?.list) }));
</script>

<nav aria-label={ariaLabel} {...restProps} class={classNav}>
  <ol class={classList}>
    {@render children()}
  </ol>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BreadcrumbProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L302)
## Props
@prop children
@prop solid = false
@prop class: className
@prop classes
@prop olClass
@prop ariaLabel = "Breadcrumb"
@prop ...restProps
-->
