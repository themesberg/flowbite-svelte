<script lang="ts">
  import { type GalleryProps as Props, type ImgType, gallery } from '.';

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

  const { image, div } = gallery();
</script>

{#snippet figure(item: ImgType)}
  <div>
    <img
      src={item.src}
      alt={item.alt}
      class={image({ class: imgClass })}
      {...attributes}
    />
  </div>
{/snippet}

<div class={div({ class: divClass })} use:init>
  {#each items as item}
    {@render figure(item)}
  {:else}
    {#if children}
      {@render children()}
    {/if}
  {/each}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop items = []
@prop imgClass
@prop divClass
@prop ...attributes
-->
