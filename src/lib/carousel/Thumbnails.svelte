<script lang="ts">
  import clsx from "clsx";
  import Thumbnail from "./Thumbnail.svelte";
  import { thumbnails } from "./theme";
  import type { ThumbnailsProps as Props } from "./type";
  import { twMerge } from "tailwind-merge";

  let { children, images = [], index = $bindable(), ariaLabel = "Click to view image", imgClass, throttleDelay = 650, class: className }: Props = $props();

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
        {@render children(image, selected, imgClass)}
      {:else}
        <img {...image} class={twMerge(selected ? "opacity-100" : "opacity-60", imgClass)} />
      {/if}
    </button>
  {/each}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let images: HTMLImgAttributes[] = [];
@prop export let index: number = 0;
@prop export let ariaLabel: string = 'Click to view image';
@prop export let imgClass: string = '';
@prop export let throttleDelay: number = 650;
-->
