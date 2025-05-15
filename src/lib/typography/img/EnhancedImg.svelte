<script lang="ts">
  import clsx from "clsx";
  import { img } from ".";
  import type { EnhandedImgProps } from "$lib/types";

  let { src, href, caption, size, figClass, class: imgClass, captionClass, ...restProps }: EnhandedImgProps = $props();

  let { base, figure, figureCaption } = $derived(img({ size }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure class={figure({ class: figClass })}>
      <enhanced:img {src} {...restProps} class={base({ class: clsx(imgClass) })} />
      <figcaption class={figureCaption({ class: captionClass })}>
        {@html caption}
      </figcaption>
    </figure>
  {:else}
    <enhanced:img {src} {...restProps} class={base({ class: clsx(imgClass) })} />
  {/if}
{/snippet}

{#if href}
  <a {href}>
    {@render imageSlot()}
  </a>
{:else}
  {@render imageSlot()}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[EnhandedImgProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1759)
## Props
@prop src
@prop href
@prop caption
@prop size
@prop figClass
@prop class: imgClass
@prop captionClass
@prop ...restProps
-->
