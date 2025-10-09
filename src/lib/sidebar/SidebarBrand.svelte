<script lang="ts">
  import clsx from "clsx";
  import { sidebarBrand } from "./theme";
  import type { SidebarBrandProps } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, site, imgClass, spanClass, class: className, classes, ...restProps }: SidebarBrandProps = $props();

  warnThemeDeprecation("SidebarBrand", { imgClass, spanClass }, { imgClass: "img", spanClass: "span" });
  const styling = $derived(
    classes ?? {
      img: imgClass,
      span: spanClass
    }
  );

  const theme = getTheme("sidebarBrand");

  const { base, img, span } = $derived(sidebarBrand());
</script>

<a {...restProps} href={site?.href ? site.href : "/"} class={base({ class: clsx(theme?.base, className) })}>
  {#if site}
    <img src={site.img} class={img({ class: clsx(theme?.img, styling.img) })} alt={site.name} />
    <span class={span({ class: clsx(theme?.span, styling.span) })}>{site.name}</span>
  {:else if children}
    {@render children()}
  {/if}
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1386)
## Props
@prop children
@prop site
@prop imgClass
@prop spanClass
@prop class: className
@prop classes
@prop ...restProps
-->
