<script lang="ts">
  import clsx from "clsx";
  import { type EnhandedImgProps as Props, img } from ".";
  let { src, href, caption, size, figClass, class: imgClass, captionClass, ...restProps }: Props = $props();

  let { base, figure, figureCaption } = $derived(img({ size }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure class={figure({ class: figClass })}>
      <enhanced:img {src} {...restProps} class={base({ class: clsx(imgClass) })} />
      <figcaption class={figureCaption({ class: captionClass })}>
        {@html caption}
      </figcaption>
    </figure>
  {:else}
    <enhanced:img {src} {...restProps} class={base({ class: clsx(imgClass) })} />
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
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: src: any;
@props:href: any;
@props:caption: any;
@props:size: any;
@props:figClass: any;
@props:class: string;
@props:captionClass: any;
-->
