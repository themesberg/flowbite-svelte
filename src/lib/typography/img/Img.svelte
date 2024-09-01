<script lang="ts">
  import { type ImgProps as Props, img } from './index';

  let { size = 'none', alignment = 'left', effect = 'none', shadow = 'none', rounded = 'none', caption, imgClass, figClass, captionClass, href, ...restProps }: Props = $props();

  let { base, figure, figureCaption } = $derived(img({ size, alignment, effect, shadow, rounded }));
</script>

{#snippet imageSlot()}
{#if caption}
  <figure class={figure({ class: figClass })}>
    <img {...restProps} class={base({ class: imgClass })} />
    <figcaption class={figureCaption({ class: captionClass })}>
      {@html caption}
    </figcaption>
  </figure>
{:else}
  <img {...restProps} class={base({ class: imgClass })} />
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
@prop ...restProps
-->
