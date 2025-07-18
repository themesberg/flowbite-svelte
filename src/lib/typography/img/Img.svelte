<script lang="ts">
  import clsx from "clsx";
  import { img, type ImgTheme } from ".";
  import type { ImgProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { size = "none", effect = "none", caption, class: imgClass, figClass, captionClass, href, ...restProps }: ImgProps = $props();

  const theme = getTheme("img");

  let { base, figure, figureCaption } = $derived(img({ size, effect }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure class={figure({ class: clsx((theme as ImgTheme)?.figure, figClass) })}>
      <img {...restProps} class={base({ class: clsx((theme as ImgTheme)?.base, imgClass) })} />
      <figcaption class={figureCaption({ class: clsx((theme as ImgTheme)?.figureCaption, captionClass) })}>
        {@html caption}
      </figcaption>
    </figure>
  {:else}
    <img {...restProps} class={base({ class: clsx((theme as ImgTheme)?.base, imgClass) })} />
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
[ImgProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1892)
## Props
@prop size = "none"
@prop effect = "none"
@prop caption
@prop class: imgClass
@prop figClass
@prop captionClass
@prop href
@prop ...restProps
-->
