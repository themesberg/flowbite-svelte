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
@props: size: VariantProps<typeof img>['size'] = 'none';
@props:alignment: VariantProps<typeof img>['alignment'] = 'left';
@props:effect: VariantProps<typeof img>['effect'] = 'none';
@props:shadow: VariantProps<typeof img>['shadow'] = 'none';
@props:rounded: VariantProps<typeof img>['rounded'] = 'none';
@props:caption: string;
@props:imgClass: string;
@props:figClass: string;
@props:captionClass: string;
@props:href: string;
-->
