<script lang="ts">
  import { breadcrumb } from "./theme";
  import clsx from "clsx";
  import type { BreadcrumbProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { untrack } from "svelte";

  let { children, solid = false, class: className, classes, olClass, ariaLabel = "Breadcrumb", ...restProps }: BreadcrumbProps = $props();

  warnThemeDeprecation(
    "Breadcrumb",
    untrack(() => ({ olClass })),
    { olClass: "list" }
  );

  const styling = $derived(classes ?? { list: olClass });

  const { base, list } = $derived(breadcrumb({ solid }));
  let classNav = $derived(base({ class: clsx(getTheme("breadcrumb")?.base, className) }));
  let classList = $derived(list({ class: clsx(getTheme("breadcrumb")?.list, styling.list) }));
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
