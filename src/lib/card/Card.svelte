<script lang="ts">
  import { type CardProps, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { card, type CardTheme } from ".";

  let { children, color = "gray", horizontal = false, shadow = "md", reverse = false, img, size = "sm", class: className, imgClass, contentClass, ...restProps }: CardProps = $props();

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
    <img class={cn(image({ class: clsx(imgClass) }), (theme as CardTheme)?.image)} src={img} alt={img} />
    {@render children()}
  {:else}
    {@render children()}
  {/if}
{/snippet}

{#if restProps.href === undefined}
  <div {...restProps} class={cn(base({ class: clsx(className) }), (theme as CardTheme)?.base)}>
    {@render childSlot()}
  </div>
{:else}
  <a {...restProps} class={cn(base({ class: clsx(className) }), (theme as CardTheme)?.base)}>
    {@render childSlot()}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CardProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L387)
## Props
@prop children
@prop color = "gray"
@prop horizontal = false
@prop shadow = "md"
@prop reverse = false
@prop img
@prop size = "sm"
@prop class: className
@prop imgClass
@prop contentClass
@prop ...restProps
-->
