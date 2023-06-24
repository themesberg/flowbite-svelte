<script lang="ts">
  import type { ImgType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';

  export let items: ImgType[] = [];
  export let imgClass: string = 'h-auto max-w-full rounded-lg';

  $: divClass = twMerge('grid', $$props.class);

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === 'normal') node.style.gap = 'inherit';
  }
</script>

<div {...$$restProps} class={divClass} use:init>
  {#each items as item}
    <slot {item}>
      <div><img src={item.src} alt={item.alt} class={twMerge(imgClass, $$props.classImg)} /></div>
    </slot>
  {:else}
    <slot item={items[0]} />
  {/each}
</div>

<!--
  @component
  ## Features
  [Go to ](https://flowbite-svelte.com/docs/components/)
  - Set up
  - Default gallery
  - Masonry grid
  - Featured image
  - Quad gallery
  - Gallery with slider
  - Gallery with tag filters
  - Heterogeneous gallery
  - Custom image rendering
  ## Props
  @prop items: ImgType[] = [];
  @prop imgClass: string = 'h-auto max-w-full rounded-lg';
  ## Example
  ```
  <script>
    import { Gallery } from "flowbite-svelte";
    const images = [
      {alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'},
      {alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'},
      {alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'},
      {alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'},
      {alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'},
      {alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'},
      {alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg'},
      {alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg'},
      {alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg'},
      {alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg'},
      {alt: 'playstation', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'},
      {alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg'}
    ]

  </script>

  <Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3" />
  ```
-->
