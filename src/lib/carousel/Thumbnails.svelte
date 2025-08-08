<script lang="ts">
  import { Thumbnail, type ThumbnailsProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { thumbnails } from "./theme";

  let { children, images = [], index = $bindable(), ariaLabel = "Click to view image", imgClass, throttleDelay = 650, class: className }: ThumbnailsProps = $props();

  const theme = getTheme("thumbnails");

  let lastClickedAt = new Date();

  const btnClick = (newIndex: number) => {
    if (new Date().getTime() - lastClickedAt.getTime() < throttleDelay) {
      console.warn("Thumbnail action throttled");
      return;
    }

    lastClickedAt = new Date();
    index = newIndex;
  };

  $effect(() => {
    index = (index + images.length) % images.length;
  });
</script>

<div class={thumbnails({ class: clsx(theme, className) })}>
  {#each images as image, idx}
    {@const selected = index === idx}
    <button onclick={() => btnClick(idx)} aria-label={ariaLabel}>
      {#if children}
        {@render children({ image, selected, imgClass: clsx(imgClass), Thumbnail })}
      {:else}
        <Thumbnail {...image} {selected} class={clsx(imgClass)} />
      {/if}
    </button>
  {/each}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ThumbnailsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L408)
## Props
@prop children
@prop images = []
@prop index = $bindable()
@prop ariaLabel = "Click to view image"
@prop imgClass
@prop throttleDelay = 650
@prop class: className
-->
