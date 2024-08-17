<script lang="ts">
  import { type ImgProps as Props, img } from './index';

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
    ...restProps
  }: Props = $props();

  let { base, figure, figureCaption } = $derived(
    img({ size, alignment, effect, shadow, rounded })
  );
</script>

{#if caption}
  <figure class={figure({ class: figClass })}>
    <img {...restProps} class={base({ class: className })} />
    <figcaption class={figureCaption({ class: captionClass })}>
      {@html caption}
    </figcaption>
  </figure>
{:else}
  <img {...restProps} class={base({ class: className })} />
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop size
@prop alignment
@prop effect
@prop shadow
@prop rounded
@prop caption
@prop imgClass
@prop figClass
@prop captionClass
@prop class: className
@prop ...restProps
-->
