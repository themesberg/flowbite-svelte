<script lang="ts">
  import clsx from "clsx";
  import { type GalleryProps as Props, type ImgType, gallery } from ".";

  let { children, figure, items = [], imgClass, class: className, ...restProps }: Props = $props();

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === "normal") node.style.gap = "inherit";
  }

  const { image, div } = gallery();
</script>

{#snippet _figure(item: ImgType)}
  <div>
    <img src={item.src} alt={item.alt} class={image({ class: imgClass })} {...restProps} />
  </div>
{/snippet}

<div class={div({ class: clsx(className) })} use:init>
  {#each items as item}
    {#if figure}
      {@render figure(item as ImgType)}
    {:else}
      {@render _figure(item as ImgType)}
    {/if}
  {:else}
    {#if children}
      {@render children()}
    {/if}
  {/each}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:items: any = [];
@props:imgClass: any;
@props:divClass: any;
-->
