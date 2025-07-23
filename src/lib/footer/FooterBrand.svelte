<script lang="ts">
  import { footerBrand, type FooterBrandTheme } from ".";
  import clsx from "clsx";
  import { type FooterBrandProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, aClass, spanClass, imgClass, href, src, alt, name, ...restProps }: FooterBrandProps = $props();

  const theme = getTheme("footerBrand");

  const { base, span, img } = $derived(footerBrand());
</script>

{#if href}
  <a {...restProps} {href} class={base({ class: clsx((theme as FooterBrandTheme)?.base, aClass) })}>
    {#if src}
      <img {src} class={img({ class: clsx((theme as FooterBrandTheme)?.img, imgClass) })} {alt} />
    {/if}
    {#if name}
      <span class={span({ class: clsx((theme as FooterBrandTheme)?.span, spanClass) })}>{name}</span>
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
[FooterBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L614)
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
