<script lang="ts">
  import clsx from "clsx";
  import { advancedRating } from "./theme";
  import type { AdvancedRatingProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { rating, globalText, ratings, class: className, classes, unit }: AdvancedRatingProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("advancedRating"));

  const { base, label, barTrack, barFill, percentage } = $derived(advancedRating());
</script>

{#if rating}
  {@render rating()}
{/if}
{#if globalText}
  {@render globalText()}
{/if}
{#each ratings as { label: ratingLabel, rating: ratingValue }, i (ratingLabel ?? i)}
  <div data-scope="advanced-rating" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
    <span data-part="label" class={label({ class: clsx(theme?.label, styling?.label) })}>{ratingLabel}</span>
    <div data-part="bar-track" class={barTrack({ class: clsx(theme?.barTrack, styling?.barTrack) })}>
      <div data-part="bar-fill" class={barFill({ class: clsx(theme?.barFill, styling?.barFill) })} style="width: {ratingValue}%"></div>
    </div>
    <span data-part="percentage" class={percentage({ class: clsx(theme?.percentage, styling?.percentage) })}>{ratingValue}{unit}</span>
  </div>
{/each}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AdvancedRatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1235)
## Props
@prop rating
@prop globalText
@prop ratings
@prop class: className
@prop classes
@prop unit
-->
