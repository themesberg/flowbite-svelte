<script lang="ts">
  import type { CardProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";
  import { card } from "./theme";

  let { children, hoverable = false, horizontal = false, shadow = "md", reverse = false, img, imgAlt, size = "sm", class: className, classes, ...restProps }: CardProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("card"));

  const { base, image } = $derived(
    card({
      size,
      shadow,
      horizontal,
      reverse,
      hoverable,
      href: !!restProps.href
    })
  );
</script>

{#snippet childSlot()}
  {#if img}
    <img
      class={image({ class: clsx(theme?.image, styling?.image) })}
      src={img}
      alt={imgAlt || ""}
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
[CardProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L458)
## Props
@prop children
@prop hoverable = false
@prop horizontal = false
@prop shadow = "md"
@prop reverse = false
@prop img
@prop imgAlt
@prop size = "sm"
@prop class: className
@prop classes
@prop ...restProps
-->
