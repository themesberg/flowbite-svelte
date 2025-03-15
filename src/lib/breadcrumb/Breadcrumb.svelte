<script lang="ts">
  import { getContext } from "svelte";
  import { type BreadcrumbProps as Props, breadcrumb } from "./index";
  import type { BaseThemes } from "$lib/theme";
  import clsx from "clsx";

  let { children, solid = false, class: className, olClass, ariaLabel = "Breadcrumb", ...restProps }: Props = $props();

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
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:solid: any = false;
@props:class: string;
@props:olClass: any;
@props:ariaLabel: any = "Breadcrumb";
-->
