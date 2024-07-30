<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';
  import { galleryVariants, type GalleryProps as Props } from '.';

  // type ImgType = {
  //   src: string | undefined | null;
  //   alt?: string | undefined | null;
  // };

  // interface Props extends HTMLAttributes<HTMLDivElement> {
  //   children?: Snippet;
  //   items?: ImgType[];
  //   imgClass?: string | undefined;
  //   divClass?: string | undefined;
  // }

  let {
    children,
    items = [],
    imgClass,
    divClass,
    ...attributes
  }: Props = $props();

  // const imgCls: string = 'h-auto max-w-full rounded-lg';

  // let divCls = twMerge('grid', divClass);

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === 'normal') node.style.gap = 'inherit';
  }

  const { image, div } = galleryVariants();
</script>

{#snippet figure(item)}
  <div>
    <img src={item.src} alt={item.alt} class={image({class:imgClass})} />
  </div>

{/snippet}

<div {...attributes} class={div({class: divClass})} use:init>
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
