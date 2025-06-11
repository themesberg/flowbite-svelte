<script lang="ts">
  import { gallery } from ".";
  import { type GalleryProps, type ImgType, cn } from "$lib";

  let { children, figure, items = [], imgClass, class: className, ...restProps }: GalleryProps = $props();

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === "normal") node.style.gap = "inherit";
  }

  const { image, div } = gallery();
</script>

{#snippet _figure(item: ImgType)}
  <div>
    <img src={item.src} alt={item.alt} class={cn(image(), imgClass)} {...restProps} />
  </div>
{/snippet}

<div class={cn(div(), className)} use:init>
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
## Type
[GalleryProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L962)
## Props
@prop children
@prop figure
@prop items = []
@prop imgClass
@prop class: className
@prop ...restProps
-->
