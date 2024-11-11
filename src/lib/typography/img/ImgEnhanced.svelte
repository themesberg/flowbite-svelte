<script lang="ts">
  import { type EnhandedImgProps as Props, img } from "./index";

  let { src, size = "none", alignment = "left", effect = "none", shadow = "none", rounded = "none", caption, imgClass, figClass, captionClass, href, ...restProps }: Props = $props();

  let { base, figure, figureCaption } = $derived(img({ size, alignment, effect, shadow, rounded }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure class={figure({ class: figClass })}>
      <enhanced:img {...restProps} {src} class={base({ class: imgClass })} />
      <figcaption class={figureCaption({ class: captionClass })}>
        {@html caption}
      </figcaption>
    </figure>
  {:else}
    <enhanced:img {...restProps} {src} class={base({ class: imgClass })} />
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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: src: any;
@props:size: "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "xs" | "full" | undefined = "none";
@props:alignment: "left" | "center" | "right" | undefined = "left";
@props:effect: "none" | "grayscale" | "blur" | "invert" | "sepia" | "saturate" | "hue-rotate" | undefined = "none";
@props:shadow: "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "regular" | "inner" | undefined = "none";
@props:rounded: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none" | "regular" | "3xl" | undefined = "none";
@props:caption: string;
@props:imgClass: string;
@props:figClass: string;
@props:captionClass: string;
@props:href: string;
-->
