<script lang="ts">
  import { breadcrumb } from ".";
  import clsx from "clsx";
  import { type BreadcrumbProps, type BreadcrumbTheme } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, solid = false, class: className, olClass, ariaLabel = "Breadcrumb", ...restProps }: BreadcrumbProps = $props();

  const theme = getTheme("breadcrumb");

  const { nav, list } = breadcrumb({ solid });
  let classNav = $derived(nav({class:clsx( (theme as BreadcrumbTheme)?.nav, className)}));
  let classList = $derived(list({class:clsx((theme as BreadcrumbTheme)?.list, olClass)}));
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
