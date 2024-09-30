<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLImgAttributes {
    caption?: string;
    src?: string;
    srcset?: string;
    size?: string;
    alignment?: string;
    imgClass?: string;
    figClass?: string;
    alt?: string;
    effect?: string;
    captionClass?: string;
  }

  export let caption: $$Props['caption'] = undefined;
  export let src: $$Props['src'] = undefined;
  export let srcset: $$Props['srcset'] = undefined;
  export let size: $$Props['size'] = 'max-w-full';
  export let alignment: $$Props['alignment'] = '';
  export let imgClass: $$Props['imgClass'] = 'h-auto';
  export let figClass: $$Props['figClass'] = 'max-w-lg';
  export let alt: $$Props['alt'] = '';
  export let effect: $$Props['effect'] = '';
  export let captionClass: $$Props['captionClass'] = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400';
</script>

{#if caption}
  <figure class={figClass}>
    <img class={twMerge(imgClass, size, alignment, effect, $$props.class)} {src} {srcset} {alt} {...$$restProps}/>
    <figcaption class={captionClass}>{@html caption}</figcaption>
  </figure>
{:else}
  <img {...$$restProps} class={twMerge(imgClass, size, alignment, effect, $$props.class)} {src} {srcset} {alt} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let caption: $$Props['caption'] = undefined;
@prop export let src: $$Props['src'] = undefined;
@prop export let srcset: $$Props['srcset'] = undefined;
@prop export let size: $$Props['size'] = 'max-w-full';
@prop export let alignment: $$Props['alignment'] = '';
@prop export let imgClass: $$Props['imgClass'] = 'h-auto';
@prop export let figClass: $$Props['figClass'] = 'max-w-lg';
@prop export let alt: $$Props['alt'] = '';
@prop export let effect: $$Props['effect'] = '';
@prop export let captionClass: $$Props['captionClass'] = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400';
-->
