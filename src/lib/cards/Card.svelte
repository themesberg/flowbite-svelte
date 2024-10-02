<script lang="ts">
  import { card, type CardProps as Props } from '.';

  let { children, href, color = 'gray', horizontal = false, shadow = 'md', reverse = false, img, padding = 'lg', size = 'sm', class: className, imgClass, contentClass, onclick, ...restProps }: Props = $props();

  const { base, image, content } = $derived(
    card({
      size,
      color,
      shadow,
      padding,
      horizontal,
      reverse,
      href: !!href
    })
  );
</script>

<svelte:element this={href ? 'a' : 'div'} {href} class={base({ className })} role={href ? 'link' : 'presentation'} {onclick} {...restProps}>
  {#if img}
    <img class={image({ class: imgClass })} src={img.src} alt={img.alt} />
    <div class={content({ class: contentClass })}>
      {@render children()}
    </div>
  {:else}
    <div class={content({ class: contentClass })}>
      {@render children()}
    </div>
  {/if}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:href: any;
@props:color: any = 'gray';
@props:horizontal: any = false;
@props:shadow: any = 'md';
@props:reverse: any = false;
@props:img: any;
@props:padding: any = 'lg';
@props:size: any = 'sm';
@props:class: any;
@props:imgClass: any;
@props:contentClass: any;
@props:onclick: any;
-->
