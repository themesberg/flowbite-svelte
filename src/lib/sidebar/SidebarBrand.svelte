<script lang="ts">
  import clsx from "clsx";
  import { sidebarBrand, type SidebarBrandTheme } from ".";
  import type { SidebarBrandProps } from "$lib/types";
    import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, site, imgClass, spanClass, class: className, ...restProps }: SidebarBrandProps = $props();

  const theme = getTheme("sidebarBrand");

  const { base, img, span } = $derived(sidebarBrand());
</script>

<a {...restProps} href={site?.href ? site.href : "/"} class={cn(base(), clsx(className), (theme as SidebarBrandTheme)?.base)}>
  {#if site}
    <img src={site.img} class={cn(img(), clsx(imgClass), (theme as SidebarBrandTheme)?.img)} alt={site.name} />
    <span class={cn(span(), clsx(spanClass), (theme as SidebarBrandTheme)?.span)}>{site.name}</span>
  {:else if children}
    {@render children()}
  {/if}
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1390)
## Props
@prop children
@prop site
@prop imgClass
@prop spanClass
@prop class: className
@prop ...restProps
-->
