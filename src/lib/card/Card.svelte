<script lang="ts">
  import type { CardProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { card } from "./theme";
  import { untrack } from "svelte";

  let { children, color = "gray", horizontal = false, shadow = "md", reverse = false, img, size = "sm", class: className, classes, imgClass, ...restProps }: CardProps = $props();

  warnThemeDeprecation(
    "Card",
    untrack(() => ({ imgClass })),
    { imgClass: "image" }
  );

  const styling = $derived(classes ?? { image: imgClass });

  const { base, image } = $derived(
    card({
      size,
      color,
      shadow,
      horizontal,
      reverse,
      href: !!restProps.href
    })
  );

  // Get theme reactively inside derived expressions
  const baseClass = $derived(base({ class: clsx(getTheme("card")?.base, className) }));
  const imageClass = $derived(image({ class: clsx(getTheme("card")?.image, styling.image) }));
</script>

{#snippet childSlot()}
  {#if img}
    <img
      class={imageClass}
      src={img}
      alt=""
      loading="lazy"
      onerror={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        if (target) {
          target.style.display = "none";
        }
      }}
    />
    {@render children?.()}
  {:else}
    {@render children?.()}
  {/if}
{/snippet}

{#if restProps.href === undefined}
  <div {...restProps} class={baseClass}>
    {@render childSlot()}
  </div>
{:else}
  <a {...restProps} class={baseClass}>
    {@render childSlot()}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CardProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L461)
## Props
@prop children
@prop color = "gray"
@prop horizontal = false
@prop shadow = "md"
@prop reverse = false
@prop img
@prop size = "sm"
@prop class: className
@prop classes
@prop imgClass
@prop ...restProps
-->
