<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { thumbnails } from "./theme";
  import { type ThumbnailsProps, type State, Thumbnail, cn } from "$lib";
  import clsx from "clsx";

  let { children, images = [], index = $bindable(), ariaLabel = "Click to view image", imgClass, throttleDelay = 650, class: className }: ThumbnailsProps = $props();

  const state = getContext<Writable<State>>("state");
  if (!state) {
    console.error("State is undefined. Make sure to provide state context or pass it as a prop.");
  }

  let lastClickedAt = new Date();

  const btnClick = (newIndex: number) => {
    if (new Date().getTime() - lastClickedAt.getTime() < throttleDelay) {
      console.warn("Thumbnail action throttled");
      return;
    }
    if (state) {
      state.update((_state) => {
        const currentIndex = _state.index;
        const forward = newIndex >= currentIndex;

        // Update the bound index
        index = newIndex;

        return {
          ..._state,
          index: newIndex,
          forward,
          lastSlideChange: new Date()
        };
      });
    } else {
      // Fallback behavior if state is not available
      index = newIndex;
      lastClickedAt = new Date();
      console.warn("State update skipped - no valid state available");
    }
  };

  $effect(() => {
    index = (index + images.length) % images.length;
  });
</script>

<div class={cn(thumbnails(), className)}>
  {#each images as image, idx}
    {@const selected = index === idx}
    <button onclick={() => btnClick(idx)} aria-label={ariaLabel}>
      {#if children}
        {@render children({ image, selected, imgClass: cn(imgClass), Thumbnail })}
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
[ThumbnailsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L443)
## Props
@prop children
@prop images = []
@prop index = $bindable()
@prop ariaLabel = "Click to view image"
@prop imgClass
@prop throttleDelay = 650
@prop class: className
-->
