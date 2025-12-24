<script lang="ts">
  import type { ThumbnailsProps } from "$lib";
  import Thumbnail from "./Thumbnail.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { thumbnails } from "./theme";

  let { children, images = [], index = $bindable(), ariaLabel = "Click to view image", throttleDelay = 650, class: className, classes }: ThumbnailsProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("thumbnails"));

  // Initialize so the first click is never throttled
  let lastClickedAt = -Infinity;

  const btnClick = (newIndex: number) => {
    const now = Date.now();
    if (now - lastClickedAt < throttleDelay) {
      console.warn("Thumbnail action throttled");
      return;
    }

    lastClickedAt = now;
    index = newIndex;
  };

  $effect(() => {
    if (images.length > 0) {
      index = (index + images.length) % images.length;
    }
  });
</script>

<div class={clsx(thumbnails().base(), theme?.base, className)}>
  {#each images as image, idx (image.src || idx)}
    {@const selected = index === idx}
    <button onclick={() => btnClick(idx)} aria-label={ariaLabel} aria-current={selected ? "true" : undefined}>
      {#if children}
        {@render children({ image, selected, imgClass: clsx(theme?.img, styling?.img), Thumbnail })}
      {:else}
        <Thumbnail {...image} {selected} class={clsx(theme?.img, styling?.img)} />
      {/if}
    </button>
  {/each}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ThumbnailsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L506)
## Props
@prop children
@prop images = []
@prop index = $bindable()
@prop ariaLabel = "Click to view image"
@prop throttleDelay = 650
@prop class: className
-->
