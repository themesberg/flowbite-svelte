<script lang="ts">
  import { gallery } from "./theme";
  import clsx from "clsx";
  import type { GalleryProps, ImgType } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, figure, items = [], class: className, classes, ...restProps }: GalleryProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("gallery"));

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === "normal") node.style.gap = "inherit";
  }

  const { image, div } = gallery();
</script>

{#snippet _figure(item: ImgType)}
  <div>
    <img data-part="image" src={item.src} alt={item.alt} class={image({ class: clsx(theme?.image, styling?.image) })} {...restProps} />
  </div>
{/snippet}

<div data-scope="gallery" data-part="base" class={div({ class: clsx(theme?.div, className) })} use:init>
  {#each items as item, i (item.src || i)}
    {#if figure}
      {@render figure(item as ImgType)}
    {:else}
      {@render _figure(item as ImgType)}
    {/if}
  {:else}
    {#if children}
      {@render children()}
    {/if}
  {/each}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[GalleryProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L996)
## Props
@prop children
@prop figure
@prop items = []
@prop class: className
@prop classes
@prop ...restProps
-->
