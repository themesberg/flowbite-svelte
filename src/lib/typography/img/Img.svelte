<script lang="ts">
  import clsx from "clsx";
  import { img, type ImgTheme } from ".";
  import type { ImgProps } from "$lib/types";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { size = "none", effect = "none", caption, class: imgClass, figClass, captionClass, href, ...restProps }: ImgProps = $props();

  const theme = getTheme("img");

  let { base, figure, figureCaption } = $derived(img({ size, effect }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure class={cn(figure({ class: figClass }), (theme as ImgTheme)?.figure)}>
      <img {...restProps} class={cn(base({ class: clsx(imgClass) }), (theme as ImgTheme)?.base)} />
      <figcaption class={cn(figureCaption({ class: captionClass }), (theme as ImgTheme)?.figureCaption)}>
        {@html caption}
      </figcaption>
    </figure>
  {:else}
    <img {...restProps} class={cn(base({ class: clsx(imgClass) }), (theme as ImgTheme)?.base)} />
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
[ImgProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1921)
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
