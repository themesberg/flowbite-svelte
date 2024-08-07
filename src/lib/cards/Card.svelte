<script lang="ts">
  import { card, type CardProps as Props } from '.';

  let {
    children,
    href,
    horizontal = false,
    shadow = 'md',
    reverse = false,
    img,
    padding = 'lg',
    size = 'sm',
    class: className,
    onclick,
    ...attributes
  }: Props = $props();

  const { base, image, content } = $derived(
    card({
      size,
      shadow,
      padding,
      horizontal,
      reverse,
      href: !!href
    })
  );
</script>

<svelte:element
  this={href ? 'a' : 'div'}
  {href}
  class={base({ className })}
  role={href ? 'link' : 'presentation'}
  {onclick}
  {...attributes}
>
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
@prop shadow = true
@prop reverse = false
@prop img
@prop padding = 'lg'
@prop size = 'sm'
@prop class: classname
@prop onclick
@prop ...attributes
-->
