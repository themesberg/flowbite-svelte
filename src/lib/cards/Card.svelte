<script lang="ts">
  import { card, type CardProps as Props } from ".";

  let { children, href, color = "gray", horizontal = false, shadow = "md", reverse = false, img, padding = "lg", size = "sm", class: className, imgClass, contentClass, onclick, ...restProps }: Props = $props();

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

<svelte:element this={href ? "a" : "div"} {...restProps} {href} class={base({ className })} role={href ? "link" : "presentation"} {onclick}>
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
@props: children: Snippet;
@props:href: string;
@props:color: VariantProps<typeof card>["color"] = "gray";
@props:horizontal: boolean = false;
@props:shadow: VariantProps<typeof card>["shadow"] = "md";
@props:reverse: boolean = false;
@props:img: {
  src: string | undefined | null;
@props:padding: VariantProps<typeof card>["padding"] = "lg";
@props:size: VariantProps<typeof card>["size"] = "sm";
@props:class: string;
@props:imgClass: string;
@props:contentClass: string;
@props:onclick: () => void;
-->
