<script lang="ts">
  import clsx from "clsx";
  import { advancedRating } from "./theme";
  import type { AdvancedRatingProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { rating, globalText, ratings, class: className, classes, unit }: AdvancedRatingProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("advancedRating"));

  const { base, span, div2, div3, span2 } = $derived(advancedRating());
</script>

{#if rating}
  {@render rating()}
{/if}
{#if globalText}
  {@render globalText()}
{/if}
{#each ratings as { label, rating }, i (label ?? i)}
  <div class={base({ class: clsx(theme?.base, className) })}>
    <span class={span({ class: clsx(theme?.span, styling?.span) })}>{label}</span>
    <div class={div2({ class: clsx(theme?.div2, styling?.div2) })}>
      <div class={div3({ class: clsx(theme?.div3, styling?.div3) })} style="width: {rating}%"></div>
    </div>
    <span class={span2({ class: clsx(theme?.span2, styling?.span2) })}>{rating}{unit}</span>
  </div>
{/each}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AdvancedRatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1264)
## Props
@prop rating
@prop globalText
@prop ratings
@prop class: className
@prop classes
@prop unit
-->
