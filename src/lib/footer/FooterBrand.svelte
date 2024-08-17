<script lang="ts">
  import { type FooterBrandProps as Props, footerBrand } from '.';

  let {
    children,
    aClass,
    spanClass,
    imgClass,
    href,
    src,
    alt,
    name,
    ...restProps
  }: Props = $props();

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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
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
