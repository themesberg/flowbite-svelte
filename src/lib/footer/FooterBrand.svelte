<script lang="ts">
  import { footerBrand } from "./theme";
  import clsx from "clsx";
  import type { FooterBrandProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, classes, href, src, alt, name, ...restProps }: FooterBrandProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("footerBrand"));

  const { base, span, img } = $derived(footerBrand());
</script>

{#if href}
  <a {...restProps} {href} class={base({ class: clsx(theme?.base, className) })}>
    {#if src}
      <img {src} class={img({ class: clsx(theme?.img, styling?.img) })} {alt} />
    {/if}
    {#if name}
      <span class={span({ class: clsx(theme?.span, styling?.span) })}>{name}</span>
    {/if}
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <img {src} class={img({ class: clsx(theme?.img, styling?.img) })} {alt} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L733)
## Props
@prop children
@prop href
@prop src
@prop alt
@prop name
@prop ...restProps
-->
