<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { HTMLImgAttributes } from 'svelte/elements';

  interface Props extends HTMLImgAttributes{
    caption?: string;
    imgClass?: string;
    figClass?: string;
    captionClass?: string;
    class?: string;
  }
  
  let { caption='', imgClass = 'max-w-full h-auto', figClass = 'max-w-lg', captionClass = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400', class: className = '', ...attributes } = $props()
</script>

{#if caption}
  <figure class={figClass}>
    <img {...attributes} class={twMerge(imgClass, className)}/>
    <figcaption class={captionClass}>{@html caption}</figcaption>
  </figure>
{:else}
  <img {...attributes} class={twMerge(imgClass, className)}/>
{/if}
