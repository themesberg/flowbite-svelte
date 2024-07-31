<script lang="ts">
  // import type { Snippet } from 'svelte';
  // import { twMerge } from 'tailwind-merge';
  // import type { HTMLAttributes } from 'svelte/elements';
  import { cardVariants, type CardProps as Props } from '.'
  
  let {
    children,
    href,
    horizontal = false,
    shadow = true,
    reverse = false,
    img,
    padding = 'lg',
    size = 'sm',
    class: classname,
    onclick,
    ...attributes
  }: Props = $props();

  const {base, image, content} = $derived(cardVariants({
    size,
    shadow,
    padding,
    horizontal,
    reverse,
    href: !!href
  }));
</script>

<svelte:element this={href ? 'a' : 'div'} {href} class={base()} role={href ? 'link' : 'presentation'} onclick={onclick} {...attributes}>
  {#if img}
    <img class={image()} src={img.src} alt={img.alt} />
    <div class={content()}>
      {@render children()}
    </div>
  {:else}
    <div class={content()}>
      {@render children()}
    </div>
  {/if}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop href
@prop horizontal = false
@prop target
@prop shadow = true
@prop reverse = false
@prop img
@prop padding = 'lg'
@prop size = 'sm'
@prop class: classname
@prop onclick
@prop ...attributes
-->
