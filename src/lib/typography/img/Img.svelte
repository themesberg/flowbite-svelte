<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import {
    type ImgProps as Props,
    imgVariants,
  } from './index';

  let {
    size,
    alignment,
    effect,
    shadow,
    rounded,
    caption,
    imgClass,
    figClass,
    captionClass,
    class: className,
    ...attributes
  }: Props = $props();

  let { base, figure, figureCaption } = $derived(imgVariants({ size, alignment, effect, shadow, rounded }));
</script>

{#if caption}
  <figure class={figure({ class: figClass })}>
    <img {...attributes} class={base({ class: className })} />
    <figcaption class={figureCaption({ class: captionClass })}>{@html caption}</figcaption>
  </figure>
{:else}
  <img {...attributes} class={base({ class: className })} />
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop caption
@prop imgClass
@prop figClass
@prop captionClass
@prop class: className
@prop ...attributes
-->
