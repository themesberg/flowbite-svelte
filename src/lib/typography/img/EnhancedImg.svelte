<script lang="ts">
  import clsx from "clsx";
  import { img, type ImgTheme } from ".";
  import type { EnhandedImgProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { src, href, caption, size, figClass, class: imgClass, captionClass, ...restProps }: EnhandedImgProps = $props();

  const theme = getTheme("enhancedImg");

  let { base, figure, figureCaption } = $derived(img({ size }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure class={figure({ class: clsx((theme as ImgTheme)?.figure, figClass) })}>
      <enhanced:img {src} {...restProps} class={base({ class: clsx((theme as ImgTheme)?.base, imgClass) })} />
      <figcaption class={figureCaption({ class: clsx((theme as ImgTheme)?.figureCaption, captionClass) })}>
        {@html caption}
      </figcaption>
    </figure>
  {:else}
    <enhanced:img {src} {...restProps} class={base({ class: clsx((theme as ImgTheme)?.base, imgClass) })} />
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
[EnhandedImgProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1926)
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
