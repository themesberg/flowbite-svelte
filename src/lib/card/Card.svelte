<script lang="ts">
  import { card } from ".";
  import type { CardProps } from "$lib/types";
  import type { HTMLAttributes, HTMLAnchorAttributes } from "svelte/elements";
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";

  let { children, href, color = "gray", horizontal = false, shadow = "md", reverse = false, img, size = "sm", class: className, imgClass, contentClass, ...restProps }: CardProps = $props();

  const { base, image } = $derived(
    card({
      size,
      color,
      shadow,
      horizontal,
      reverse,
      href: !!href
    })
  );

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const commonProps: Record<string, any> = $derived({
    class: twMerge(base(), clsx(className)),
    ...restProps
  });

  const anchorProps: HTMLAnchorAttributes = $derived({
    ...commonProps,
    href
  });

  const divProps: HTMLAttributes<HTMLDivElement> = $derived({
    ...commonProps
  });
</script>

{#snippet childSlot()}
  {#if img}
    <img class={twMerge(image(), clsx(imgClass))} src={img} alt={img} />
    {@render children()}
  {:else}
    {@render children()}
  {/if}
{/snippet}

{#if href}
  <a {...anchorProps}>
    {@render childSlot()}
  </a>
{:else}
  <div {...divProps}>
    {@render childSlot()}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CardProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L416)
## Props
@prop children
@prop href
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
