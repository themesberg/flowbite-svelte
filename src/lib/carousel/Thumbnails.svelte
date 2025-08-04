<script lang="ts">
  import { type State, Thumbnail, type ThumbnailsProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { thumbnails } from "./theme";

  let { children, images = [], index = $bindable(), ariaLabel = "Click to view image", imgClass, throttleDelay = 650, class: className }: ThumbnailsProps = $props();

  const theme = getTheme("thumbnails");

  const _state = getContext<State>("state");
  if (!_state) {
    console.error("State is undefined. Make sure to provide state context or pass it as a prop.");
  }

  let lastClickedAt = new Date();

  const btnClick = (newIndex: number) => {
    if (new Date().getTime() - lastClickedAt.getTime() < throttleDelay) {
      console.warn("Thumbnail action throttled");
      return;
    }
    if (_state) {
      const currentIndex = _state.index;

      _state.index = newIndex;
      _state.forward = newIndex >= currentIndex;
      _state.lastSlideChange = new Date();

      // Update the bound index
      index = newIndex;
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
