<script lang="ts">
  import { footerBrand } from ".";
  import type { FooterBrandProps } from "$lib/types";

  let { children, aClass, spanClass, imgClass, href, src, alt, name, ...restProps }: FooterBrandProps = $props();

  const { base, span, img } = $derived(footerBrand());
</script>

{#if href}
  <a {...restProps} {href} class={base({ class: aClass })}>
    {#if src}
      <img {src} class={img({ class: imgClass })} {alt} />
    {/if}
    {#if name}
      <span class={span({ class: spanClass })}>{name}</span>
    {/if}
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <img {src} class={img({ class: imgClass })} {alt} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L604)
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
