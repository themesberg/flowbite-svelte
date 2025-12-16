<script lang="ts">
  import { gallery } from "./theme";
  import clsx from "clsx";
  import type { GalleryProps, ImgType } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { untrack } from "svelte";

  let { children, figure, items = [], imgClass, class: className, classes, ...restProps }: GalleryProps = $props();

  warnThemeDeprecation(
    "Gallery",
    untrack(() => ({ imgClass })),
    { imgClass: "image" }
  );

  const styling = $derived(classes ?? { image: imgClass });

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === "normal") node.style.gap = "inherit";
  }

  const { image, div } = gallery();

  let imageClass = $derived(image({ class: clsx(getTheme("gallery")?.image, styling.image) }));
  let divClass = $derived(div({ class: clsx(getTheme("gallery")?.div, className) }));
</script>

{#snippet _figure(item: ImgType)}
  <div>
    <img src={item.src} alt={item.alt} class={imageClass} {...restProps} />
  </div>
{/snippet}

<div class={divClass} use:init>
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
[GalleryProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1088)
## Props
@prop children
@prop figure
@prop items = []
@prop imgClass
@prop class: className
@prop classes
@prop ...restProps
-->
