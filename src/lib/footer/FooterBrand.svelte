<script lang="ts">
  import { footerBrand } from ".";
  import { type FooterBrandProps, cn } from "$lib";

  let { children, aClass, spanClass, imgClass, href, src, alt, name, ...restProps }: FooterBrandProps = $props();

  const { base, span, img } = $derived(footerBrand());
</script>

{#if href}
  <a {...restProps} {href} class={cn(base(), aClass)}>
    {#if src}
      <img {src} class={cn(img(), imgClass)} {alt} />
    {/if}
    {#if name}
      <span class={cn(span(), spanClass)}>{name}</span>
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
[FooterBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L625)
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
