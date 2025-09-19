<script lang="ts">
  import { gallery } from ".";
  import clsx from "clsx";
  import { type GalleryProps, type ImgType } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, figure, items = [], imgClass, class: className, classes, ...restProps }: GalleryProps = $props();

  warnThemeDeprecation("Gallery", { imgClass }, { imgClass: "image" });
  const styling = $derived(classes ?? { image: imgClass });

  const theme = getTheme("gallery");

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === "normal") node.style.gap = "inherit";
  }

  const { image, div } = gallery();
</script>

{#snippet _figure(item: ImgType)}
  <div>
    <img src={item.src} alt={item.alt} class={image({ class: clsx(theme?.image, styling.image) })} {...restProps} />
  </div>
{/snippet}

<div class={div({ class: clsx(theme?.div, className) })} use:init>
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
[GalleryProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L985)
## Props
@prop children
@prop figure
@prop items = []
@prop imgClass
@prop class: className
@prop classes
@prop ...restProps
-->
