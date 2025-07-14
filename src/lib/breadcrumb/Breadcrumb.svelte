<script lang="ts">
  import { breadcrumb } from ".";
  import { type BreadcrumbProps, cn, type BreadcrumbTheme } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, solid = false, class: className, olClass, ariaLabel = "Breadcrumb", ...restProps }: BreadcrumbProps = $props();

  const theme = getTheme("breadcrumb");

  const { nav, list } = breadcrumb({ solid });
  let classNav = $derived(cn(nav(), className, (theme as BreadcrumbTheme)?.nav));
  let classList = $derived(cn(list(), olClass, (theme as BreadcrumbTheme)?.list));
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
