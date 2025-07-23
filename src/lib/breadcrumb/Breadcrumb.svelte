<script lang="ts">
  import { breadcrumb } from ".";
  import clsx from "clsx";
  import { type BreadcrumbProps, type BreadcrumbTheme } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, solid = false, class: className, classes, olClass, ariaLabel = "Breadcrumb", ...restProps }: BreadcrumbProps = $props();

  warnThemeDeprecation("Breadcrumb", { olClass }, { olClass: "list" });
  const styling = $derived(classes ?? { list: olClass });

  const theme = getTheme("breadcrumb");

  const { base, list } = breadcrumb({ solid });
  let classNav = $derived(base({ class: clsx((theme as BreadcrumbTheme)?.base, className) }));
  let classList = $derived(list({ class: clsx((theme as BreadcrumbTheme)?.list, styling.list) }));
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
[BreadcrumbProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L279)
## Props
@prop children
@prop solid = false
@prop class: className
@prop classes
@prop olClass
@prop ariaLabel = "Breadcrumb"
@prop ...restProps
-->
