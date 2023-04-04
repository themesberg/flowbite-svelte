<script lang="ts">
  import type { ImgType } from '$lib/types';
  import classNames from 'classnames';
  import GalleryItem from './GalleryItem.svelte';

  export let items: ImgType[] = [];

  $: divClass = classNames('grid', $$props.class);

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === 'normal') node.style.gap = 'inherit';
  }
</script>

<div {...$$restProps} class={divClass} use:init>
  {#each items as { src, alt }}
    <GalleryItem {src} {alt} />
  {:else}
    <slot />
  {/each}
</div>
