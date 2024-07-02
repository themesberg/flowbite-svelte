<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  interface Props {
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
    class?: string;
  }
  // export let caption: string | undefined = undefined;
  // export let src: string | undefined = undefined;
  // export let srcset: string | undefined = undefined;
  // export let size: string = 'max-w-full';
  // export let alignment: string = '';
  // export let imgClass: string = 'h-auto';
  // export let figClass: string = 'max-w-lg';
  // export let alt: string = '';
  // export let effect: string = '';
  // export let captionClass: string = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400';
  let { caption, src = undefined, srcset = undefined, size = 'max-w-full', alignment = '', imgClass = 'h-auto', figClass = 'max-w-lg', alt = '', effect = '', captionClass = 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400', class: className = '', ...attributes } = $props()
</script>

{#if caption}
  <figure class={figClass}>
    <img class={twMerge(imgClass, size, alignment, effect, className)} {src} {srcset} {alt} />
    <figcaption class={captionClass}>{@html caption}</figcaption>
  </figure>
{:else}
  <img {...attributes} class={twMerge(imgClass, size, alignment, effect, className)} {src} {srcset} {alt} />
{/if}
