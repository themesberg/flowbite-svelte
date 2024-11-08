<script lang="ts">
  import { type EnhandedImgProps as Props, img } from ".";
  let { src, href, caption, size, alignment, shadow, rounded, figClass, imgClass, captionClass, ...restProps }: Props = $props();

  let { base, figure, figureCaption } = $derived(img({ size, alignment, shadow, rounded }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure class={figure({ class: figClass })}>
      <enhanced:img {src} {...restProps} class={base({ class: imgClass })} />
      <figcaption class={figureCaption({ class: captionClass })}>
        {@html caption}
      </figcaption>
    </figure>
  {:else}
    <enhanced:img {src} {...restProps} class={base({ class: imgClass })} />
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
@props:href: string;
@props:caption: string;
@props:size: "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "xs" | "full" | undefined;
@props:alignment: "left" | "center" | "right" | undefined;
@props:shadow: "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "regular" | "inner" | undefined;
@props:rounded: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none" | "regular" | "3xl" | undefined;
@props:figClass: string;
@props:imgClass: string;
@props:captionClass: string;
-->
