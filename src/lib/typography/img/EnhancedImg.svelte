<script lang="ts">
  import clsx from "clsx";
  import { img, type ImgTheme } from ".";
  import type { EnhandedImgProps } from "$lib/types";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { src, href, caption, size, figClass, class: imgClass, captionClass, ...restProps }: EnhandedImgProps = $props();

  const theme = getTheme("enhancedImg");

  let { base, figure, figureCaption } = $derived(img({ size }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure class={cn(figure({ class: figClass }), (theme as ImgTheme)?.figure)}>
      <enhanced:img {src} {...restProps} class={cn(base({ class: clsx(imgClass) }), (theme as ImgTheme)?.base)} />
      <figcaption class={cn(figureCaption({ class: captionClass }), (theme as ImgTheme)?.figureCaption)}>
        {@html caption}
      </figcaption>
    </figure>
  {:else}
    <enhanced:img {src} {...restProps} class={cn(base({ class: clsx(imgClass) }), (theme as ImgTheme)?.base)} />
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
## Type
[EnhandedImgProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1930)
## Props
@prop src
@prop href
@prop caption
@prop size
@prop figClass
@prop class: imgClass
@prop captionClass
@prop ...restProps
-->
