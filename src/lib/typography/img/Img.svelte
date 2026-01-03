<script lang="ts">
  import clsx from "clsx";
  import { img } from "./theme";
  import type { ImgProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, size, effect: imgEffect, align, caption, class: className, classes, href, ...restProps }: ImgProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("img"));

  let { figure, caption: figureCaption, image } = $derived(img({ size, effect: imgEffect, align }));

  // Determine if using slot or traditional props
  const useSlot = $derived(!!children);
  // Compute the final class string to pass to children
  const imgClass = $derived(image({ class: clsx(theme?.image, styling?.image) }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure data-scope="img" data-part="figure" class={figure({ class: clsx(theme?.figure, styling?.figure) })}>
      {#if useSlot}
        {@render children?.({ class: imgClass, restProps })}
      {:else}
        <img data-part="image" {...restProps} class={imgClass} />
      {/if}
      <figcaption data-part="caption" class={figureCaption({ class: clsx(theme?.caption, styling?.caption) })}>
        {@html caption}
      </figcaption>
    </figure>
  {:else if useSlot}
    {@render children?.({ class: imgClass, restProps })}
  {:else}
    <img data-scope="img" {...restProps} class={imgClass} />
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
[Go to docs](https://flowbite-svelte.com/)
## Type
[ImgProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1901)
## Props
@prop children
@prop size
@prop effect: imgEffect
@prop align
@prop caption
@prop class: className
@prop classes
@prop href
@prop ...restProps
-->
