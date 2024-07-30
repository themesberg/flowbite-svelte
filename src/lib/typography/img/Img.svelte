<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import {
    type ImgProps as Props,
    imgVariants,
    figureVariants,
    figcaptionVariants
  } from './index';

  let {
    caption,
    imgClass,
    figClass,
    captionClass,
    class: className,
    ...attributes
  }: Props = $props();

  let imgCls = twMerge(imgVariants(), imgClass, className);
  let figCls = twMerge(figureVariants(), figClass);
  let figcaptiongCls = twMerge(figcaptionVariants(), captionClass);
</script>

{#if caption}
  <figure class={figCls}>
    <img {...attributes} class={imgCls} />
    <figcaption class={figcaptiongCls}>{@html caption}</figcaption>
  </figure>
{:else}
  <img {...attributes} class={imgCls} />
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
