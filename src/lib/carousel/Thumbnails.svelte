<script lang="ts">
  import clsx from "clsx";
  import Thumbnail from "./Thumbnail.svelte";
  import { thumbnails } from "./theme";
  import type { ThumbnailsProps } from "$lib/types";

  let { children, images = [], index = $bindable(), ariaLabel = "Click to view image", imgClass, throttleDelay = 650, class: className }: ThumbnailsProps = $props();

  let lastClickedAt = new Date();

  const btnClick = (idx: number) => {
    if (new Date().getTime() - lastClickedAt.getTime() < throttleDelay) {
      console.warn("Thumbnail action throttled");
      return;
    }
    if (idx === index) {
      return;
    }

    index = idx;
    lastClickedAt = new Date();
  };

  $effect(() => {
    index = (index + images.length) % images.length;
  });
</script>

<div class={thumbnails({ class: clsx(className) })}>
  {#each images as image, idx}
    {@const selected = index === idx}
    <button onclick={() => btnClick(idx)} aria-label={ariaLabel}>
      {#if children}
        {@render children({ image, selected, imgClass, Thumbnail })}
      {:else}
        <Thumbnail {selected} {...image} class={imgClass} />
      {/if}
    </button>
  {/each}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[ThumbnailsProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L417)
## Props
@prop children
@prop images = []
@prop index = $bindable()
@prop ariaLabel = "Click to view image"
@prop imgClass
@prop throttleDelay = 650
@prop class: className
-->
