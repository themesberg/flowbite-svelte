<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import Thumbnail from './Thumbnail.svelte';

  export let images: HTMLImgAttributes[] = [];
  export let index: number = 0;
  export let ariaLabel: string = 'Click to view image';
  export let imgClass: string = '';

  $: index = (index + images.length) % images.length;
</script>

<div class={twMerge('flex flex-row justify-center bg-gray-100 w-full', $$props.class)}>
  {#each images as image, idx}
    {@const selected = index === idx}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <button on:click={() => (index = idx)} aria-label={ariaLabel}>
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
@prop export let imgClass:string = '';
-->
