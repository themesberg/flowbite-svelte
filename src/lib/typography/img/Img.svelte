<script lang="ts">
  import { type ImgProps as Props, img } from "./index";

  let { size = "none", alignment = "left", effect = "none", shadow = "none", rounded = "none", caption, imgClass, figClass, captionClass, href, ...restProps }: Props = $props();

  let { base, figure, figureCaption } = $derived(img({ size, alignment, effect, shadow, rounded }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure class={figure({ class: figClass })}>
      <img {...restProps} class={base({ class: imgClass })} />
      <figcaption class={figureCaption({ class: captionClass })}>
        {@html caption}
      </figcaption>
    </figure>
  {:else}
    <img {...restProps} class={base({ class: imgClass })} />
  {/if}
{/snippet}

{#if href}
  <a {href}>
    {@render imageSlot()}
  </a>
{:else}
  {@render imageSlot()}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: size: any = "none";
@props:alignment: any = "left";
@props:effect: any = "none";
@props:shadow: any = "none";
@props:rounded: any = "none";
@props:caption: any;
@props:imgClass: any;
@props:figClass: any;
@props:captionClass: any;
@props:href: any;
-->
