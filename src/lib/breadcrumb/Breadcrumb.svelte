<script lang="ts">
  import { getContext } from "svelte";
  import { breadcrumb } from "./index";
  import type { BreadcrumbProps, BaseThemes } from "$lib/types";
  import clsx from "clsx";

  let { children, solid = false, class: className, olClass, ariaLabel = "Breadcrumb", ...restProps }: BreadcrumbProps = $props();

  // Get merged theme from context
  const context = getContext<BaseThemes>("themeConfig");
  // Use context theme if available, otherwise fallback to default
  const breadcrumbTheme = context?.breadcrumb || breadcrumb;

  const { nav, list } = breadcrumbTheme({ solid });
  let classNav = $derived(nav({ class: clsx(className) }));
  let classList = $derived(list({ class: olClass }));
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
[BreadcrumbProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L307)
## Props
@prop children
@prop solid = false
@prop class: className
@prop olClass
@prop ariaLabel = "Breadcrumb"
@prop ...restProps
-->
