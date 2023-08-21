<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let caption: string | undefined = undefined;
  export let src: string | undefined = undefined;
  export let srcset: string | undefined = undefined;
  export let size: string = 'max-w-full';
  export let alignment: string = '';
  export let imgClass: string = 'h-auto';
  export let figClass: string = 'max-w-lg';
  export let alt: string = '';
  export let effect: string = '';
  export let captionClass: string = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400';
</script>

{#if caption}
  <figure class={figClass}>
    <img class={twMerge(imgClass, size, alignment, effect, $$props.class)} {src} {srcset} {alt} />
    <figcaption class={captionClass}>{@html caption}</figcaption>
  </figure>
{:else}
  <img {...$$restProps} class={twMerge(imgClass, size, alignment, effect, $$props.class)} {src} {srcset} {alt} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let caption: string | undefined = undefined;
@prop export let src: string | undefined = undefined;
@prop export let srcset: string | undefined = undefined;
@prop export let size: string = 'max-w-full';
@prop export let alignment: string = '';
@prop export let imgClass: string = 'h-auto';
@prop export let figClass: string = 'max-w-lg';
@prop export let alt: string = '';
@prop export let effect: string = '';
@prop export let captionClass: string = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400';
-->
