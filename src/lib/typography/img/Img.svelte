<script lang="ts">
  import clsx from "clsx";
  import { img } from "./theme";
  import type { ImgProps } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { untrack } from "svelte";

  let { children, size, effect: imgEffect, align, caption, class: className, classes, figClass, captionClass, href, ...restProps }: ImgProps = $props();

  warnThemeDeprecation(
    "Img",
    untrack(() => ({ figClass, captionClass })),
    {
      figClass: "figure",
      captionClass: "caption"
    }
  );

  const styling = $derived({
    figure: figClass || classes?.figure,
    caption: captionClass || classes?.caption
  });

  const theme = $derived(getTheme("img"));

  let { base, figure, caption: figureCaption } = $derived(img({ size, effect: imgEffect, align }));

  // Determine if using slot or traditional props
  const useSlot = $derived(!!children);
  // Compute the final class string to pass to children
  const imgClass = $derived(base({ class: clsx(theme?.base, className) }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure class={figure({ class: clsx(theme?.figure, styling.figure) })}>
      {#if useSlot}
        {@render children?.({ class: imgClass, restProps })}
      {:else}
        <img {...restProps} class={imgClass} />
      {/if}
      <figcaption class={figureCaption({ class: clsx(theme?.caption, styling.caption) })}>
        {@html caption}
      </figcaption>
    </figure>
  {:else if useSlot}
    {@render children?.({ class: imgClass, restProps })}
  {:else}
    <img {...restProps} class={imgClass} />
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
[ImgProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2021)
## Props
@prop children
@prop size
@prop effect: imgEffect
@prop align
@prop caption
@prop class: className
@prop classes
@prop figClass
@prop captionClass
@prop href
@prop ...restProps
-->
