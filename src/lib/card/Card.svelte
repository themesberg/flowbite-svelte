<script lang="ts">
  import type { CardProps } from "$lib";
  import clsx from "clsx";
  import { card } from ".";

  let { children, color = "gray", horizontal = false, shadow = "md", reverse = false, img, size = "sm", class: className, imgClass, contentClass, ...restProps }: CardProps = $props();

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
    <img class={image({ class: clsx(imgClass) })} src={img} alt={img} />
    {@render children()}
  {:else}
    {@render children()}
  {/if}
{/snippet}

{#if restProps.href === undefined}
  <div {...restProps} class={base({ class: clsx(className) })}>
    {@render childSlot()}
  </div>
{:else}
  <a {...restProps} class={base({ class: clsx(className) })}>
    {@render childSlot()}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CardProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L396)
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
