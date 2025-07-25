<script lang="ts">
  import clsx from "clsx";
  import { img, type ImgTheme } from ".";
  import type { ImgProps } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { size = "none", effect = "none", caption, class: className, classes, figClass, captionClass, href, ...restProps }: ImgProps = $props();

  warnThemeDeprecation(
    "Img",
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

  const theme = getTheme("img");

  let { base, figure, caption: figureCaption } = $derived(img({ size, effect }));
</script>

{#snippet imageSlot()}
  {#if caption}
    <figure class={figure({ class: clsx((theme as ImgTheme)?.figure, styling.fig) })}>
      <img {...restProps} class={base({ class: clsx((theme as ImgTheme)?.base, className) })} />
      <figcaption class={figureCaption({ class: clsx((theme as ImgTheme)?.caption, styling.caption) })}>
        {@html caption}
      </figcaption>
    </figure>
  {:else}
    <img {...restProps} class={base({ class: clsx((theme as ImgTheme)?.base, className) })} />
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
[ImgProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1917)
## Props
@prop size = "none"
@prop effect = "none"
@prop caption
@prop class: className
@prop classes
@prop figClass
@prop captionClass
@prop href
@prop ...restProps
-->
