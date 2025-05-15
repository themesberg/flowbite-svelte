<script lang="ts">
  import clsx from "clsx";
  import { gallery } from ".";
  import type { GalleryProps, ImgType } from "$lib/types";

  let { children, figure, items = [], imgClass, class: className, ...restProps }: GalleryProps = $props();

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === "normal") node.style.gap = "inherit";
  }

  const { image, div } = gallery();
</script>

{#snippet _figure(item: ImgType)}
  <div>
    <img src={item.src} alt={item.alt} class={image({ class: imgClass })} {...restProps} />
  </div>
{/snippet}

<div class={div({ class: clsx(className) })} use:init>
  {#each items as item}
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
[GalleryProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L927)
## Props
@prop children
@prop figure
@prop items = []
@prop imgClass
@prop class: className
@prop ...restProps
-->
