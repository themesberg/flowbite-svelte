<script lang="ts">
  import { footerBrand } from "./theme";
  import clsx from "clsx";
  import type { FooterBrandProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, aClass, spanClass, imgClass, href, src, alt, name, ...restProps }: FooterBrandProps = $props();

  const { base, span, img } = footerBrand();
</script>

{#if href}
  <a {...restProps} {href} class={base({ class: clsx(getTheme("footerBrand")?.base, aClass) })}>
    {#if src}
      <img {src} class={img({ class: clsx(getTheme("footerBrand")?.img, imgClass) })} {alt} />
    {/if}
    {#if name}
      <span class={span({ class: clsx(getTheme("footerBrand")?.span, spanClass) })}>{name}</span>
    {/if}
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <img {src} class={img({ class: clsx(imgClass) })} {alt} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L733)
## Props
@prop children
@prop aClass
@prop spanClass
@prop imgClass
@prop href
@prop src
@prop alt
@prop name
@prop ...restProps
-->
