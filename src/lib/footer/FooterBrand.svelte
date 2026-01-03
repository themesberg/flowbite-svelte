<script lang="ts">
  import { footerBrand } from "./theme";
  import clsx from "clsx";
  import type { FooterBrandProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, class: className, classes, href, src, alt, name, ...restProps }: FooterBrandProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("footerBrand"));

  const { base, label, image } = $derived(footerBrand());
</script>

{#if href}
  <a data-scope="footer-brand" data-part="base" {...restProps} {href} class={base({ class: clsx(theme?.base, className) })}>
    {#if src}
      <img data-part="image" {src} class={image({ class: clsx(theme?.image, styling?.image) })} {alt} />
    {/if}
    {#if name}
      <span data-part="label" class={label({ class: clsx(theme?.label, styling?.label) })}>{name}</span>
    {/if}
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <img data-scope="footer-brand" data-part="image" {src} class={image({ class: clsx(theme?.image, styling?.image) })} {alt} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L691)
## Props
@prop children
@prop class: className
@prop classes
@prop href
@prop src
@prop alt
@prop name
@prop ...restProps
-->
