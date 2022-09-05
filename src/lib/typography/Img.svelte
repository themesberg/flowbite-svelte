<script lang="ts">
  import classNames from 'classnames';

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
    <img
      class={classNames(imgClass, size, alignment, effect, $$props.class)}
      {src}
      {srcset}
      {alt} />
    <figcaption class={captionClass}>{@html caption}</figcaption>
  </figure>
{:else}
  <img
    {...$$restProps}
    class={classNames(imgClass, size, alignment, effect, $$props.class)}
    {src}
    {srcset}
    {alt} />
{/if}
