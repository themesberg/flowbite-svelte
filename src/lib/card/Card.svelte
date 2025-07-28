<script lang="ts">
  import { type CardProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { card } from ".";

  let { children, color = "gray", horizontal = false, shadow = "md", reverse = false, img, size = "sm", class: className, classes, imgClass, ...restProps }: CardProps = $props();

  warnThemeDeprecation("Card", { imgClass }, { imgClass: "image" });

  const styling = $derived(classes ?? { image: imgClass });

  const theme = getTheme("card");

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
</script>

{#snippet childSlot()}
  {#if img}
    <img class={image({ class: clsx(theme?.image, styling.image) })} src={img} alt={img} />
    {@render children()}
  {:else}
    {@render children()}
  {/if}
{/snippet}

{#if restProps.href === undefined}
  <div {...restProps} class={base({ class: clsx(theme?.base, className) })}>
    {@render childSlot()}
  </div>
{:else}
  <a {...restProps} class={base({ class: clsx(theme?.base, className) })}>
    {@render childSlot()}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CardProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L364)
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
