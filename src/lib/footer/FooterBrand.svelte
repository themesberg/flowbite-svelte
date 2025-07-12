<script lang="ts">
  import { footerBrand, type FooterBrandTheme } from ".";
  import { type FooterBrandProps, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, aClass, spanClass, imgClass, href, src, alt, name, ...restProps }: FooterBrandProps = $props();

  const theme = getTheme("footerBrand");

  const { base, span, img } = $derived(footerBrand());
</script>

{#if href}
  <a {...restProps} {href} class={cn(base(), aClass, (theme as FooterBrandTheme)?.base)}>
    {#if src}
      <img {src} class={cn(img(), imgClass, (theme as FooterBrandTheme)?.img)} {alt} />
    {/if}
    {#if name}
      <span class={cn(span(), spanClass, (theme as FooterBrandTheme)?.span)}>{name}</span>
    {/if}
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <img {src} class={cn(img(), imgClass)} {alt} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L638)
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
