<script lang="ts">
  import clsx from "clsx";
  import { advancedRating, type AdvancedRatingTheme } from ".";
  import type { AdvancedRatingProps } from "$lib/types";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { rating, globalText, ratings, divClass, spanClass, div2Class, div3Class, span2Class, unit }: AdvancedRatingProps = $props();

  const theme = getTheme("advancedRating");

  const { base, span, div2, div3, span2 } = $derived(advancedRating());
</script>

{#if rating}
  {@render rating()}
{/if}
{#if globalText}
  {@render globalText()}
{/if}
{#each ratings as { label, rating }}
  <div class={cn(base(), clsx(divClass), (theme as AdvancedRatingTheme)?.base)}>
    <span class={cn(span(), clsx(spanClass), (theme as AdvancedRatingTheme)?.span)}>{label}</span>
    <div class={cn(div2(), clsx(div2Class), (theme as AdvancedRatingTheme)?.div2)}>
      <div class={cn(div3(), clsx(div3Class), (theme as AdvancedRatingTheme)?.div3)} style="width: {rating}%"></div>
    </div>
    <span class={cn(span2(), clsx(span2Class), (theme as AdvancedRatingTheme)?.span2)}>{rating}{unit}</span>
  </div>
{/each}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AdvancedRatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1239)
## Props
@prop rating
@prop globalText
@prop ratings
@prop divClass
@prop spanClass
@prop div2Class
@prop div3Class
@prop span2Class
@prop unit
-->
