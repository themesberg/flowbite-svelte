<script lang="ts">
  import { galleryVariants, type GalleryProps as Props } from '.';

  let {
    children,
    items = [],
    imgClass,
    divClass,
    ...attributes
  }: Props = $props();

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === 'normal') node.style.gap = 'inherit';
  }

  const { image, div } = galleryVariants();
</script>

{#snippet figure(item)}
  <div>
    <img src={item.src} alt={item.alt} class={image({class:imgClass})} {...attributes}/>
  </div>
{/snippet}

<div class={div({class: divClass})} use:init >
  {#each items as item}
    {@render figure(item)}
  {:else}
    {#if children}
      {@render children()}
    {/if}
  {/each}
</div>
