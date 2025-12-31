<script lang="ts">
  import clsx from "clsx";
  import { sidebarBrand } from "./theme";
  import type { SidebarBrandProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, site, class: className, classes, ...restProps }: SidebarBrandProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("sidebarBrand"));

  const { base, logo, brandName } = $derived(sidebarBrand());
</script>

<a {...restProps} href={site?.href ? site.href : "/"} data-scope="sidebar-brand" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  {#if site}
    <img data-part="logo" src={site.img} class={logo({ class: clsx(theme?.logo, styling?.logo) })} alt={site.name} />
    <span data-part="brand-name" class={brandName({ class: clsx(theme?.brandName, styling?.brandName) })}>{site.name}</span>
  {:else if children}
    {@render children()}
  {/if}
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1361)
## Props
@prop children
@prop site
@prop class: className
@prop classes
@prop ...restProps
-->
