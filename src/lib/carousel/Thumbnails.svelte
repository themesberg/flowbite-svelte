<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import Thumbnail from './Thumbnail.svelte';

  export let images: HTMLImgAttributes[] = [];
  export let index: number = 0;
  export let ariaLabel: string = 'Click to view image';
  export let imgClass: string = '';
  export let throttleDelay: number = 650; // ms

  let lastClickedAt = new Date();

  const btnClick = (idx: number) => {
    if (new Date().getTime() - lastClickedAt.getTime() < throttleDelay) {
      console.warn('Thumbnail action throttled');
      return;
    }
    if (idx === index) {
      return;
    }

    index = idx;
    lastClickedAt = new Date();
  };

  $: index = (index + images.length) % images.length;
</script>

<div class={twMerge('flex flex-row justify-center bg-gray-100 w-full', $$props.class)}>
  {#each images as image, idx}
    {@const selected = index === idx}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <button on:click={() => btnClick(idx)} aria-label={ariaLabel}>
      <slot {Thumbnail} {image} {selected} {imgClass}>
        <Thumbnail {...image} {selected} class={imgClass} />
      </slot>
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
