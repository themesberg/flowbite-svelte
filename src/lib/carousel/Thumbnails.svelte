<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import Thumbnail from "./Thumbnail.svelte";
  import { thumbnails } from "./theme";
  import type { State, ThumbnailsProps } from "$lib/types";

  let { children, images, ariaLabel = "Click to view image", imgClass = "", throttleDelay = 650, class: className }: ThumbnailsProps = $props();

  let lastClickedAt = new Date();

  const state = getContext<Writable<State>>("state");

  $effect(() => {
    if (!images) {
      images = $state.images;
    }
  });

  const btnClick = (idx: number) => {
    if (new Date().getTime() - lastClickedAt.getTime() < throttleDelay) {
      console.warn("Thumbnail action throttled");
      return;
    }

    if (idx === $state.index) {
      return;
    }

    const imageArray = images || $state.images;
    const len = imageArray.length;
    const distance = (idx - $state.index + len) % len; // 0‥len-1
    // Treat the shorter path as the intended direction; ties favour forward.
    const isForward = distance !== 0 && distance <= len / 2;

    state.update((_state) => {
      _state.forward = isForward;
      _state.index = idx;
      _state.lastSlideChange = new Date();
      return { ..._state };
    });

    lastClickedAt = new Date();
  };
</script>

<div class={thumbnails({ class: clsx(className) })}>
  {#each images || $state.images as image, idx}
    {@const selected = $state.index === idx}
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
[Go to docs](https://flowbite-svelte.com/)
## Type
[ThumbnailsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L425)
## Props
@prop children
@prop images
@prop ariaLabel = "Click to view image"
@prop imgClass = ""
@prop throttleDelay = 650
@prop class: className
-->
