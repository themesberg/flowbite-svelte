<script lang="ts">
  import clsx from "clsx";
  import { img, type ImgTheme } from ".";
  import type { EnhandedImgProps } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { src, href, caption, size, figClass, class: className, classes, captionClass, ...restProps }: EnhandedImgProps = $props();

  warnThemeDeprecation(
    "EnhancedImg",
    { figClass, captionClass },
    {
      figClass: "fig",
      captionClass: "caption"
    }
  );
  const styling = $derived({
    fig: figClass,
    caption: captionClass
  });

  const theme = getTheme("enhancedImg");

  let { base, figure, caption: figureCaption } = $derived(img({ size }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure class={figure({ class: clsx((theme as ImgTheme)?.figure, styling.fig) })}>
      <enhanced:img {src} {...restProps} class={base({ class: clsx((theme as ImgTheme)?.base, className) })} />
      <figcaption class={figureCaption({ class: clsx((theme as ImgTheme)?.caption, styling.caption) })}>
        {@html caption}
      </figcaption>
    </figure>
  {:else}
    <enhanced:img {src} {...restProps} class={base({ class: clsx((theme as ImgTheme)?.base, className) })} />
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
[EnhandedImgProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1926)
## Props
@prop src
@prop href
@prop caption
@prop size
@prop figClass
@prop class: className
@prop classes
@prop captionClass
@prop ...restProps
-->
