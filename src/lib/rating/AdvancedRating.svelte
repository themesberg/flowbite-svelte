<script lang="ts">
  import clsx from "clsx";
  import { advancedRating, type AdvancedRatingTheme } from ".";
  import type { AdvancedRatingProps } from "$lib/types";
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
  <div class={base({ class: clsx((theme as AdvancedRatingTheme)?.base, divClass) })}>
    <span class={span({ class: clsx((theme as AdvancedRatingTheme)?.span, spanClass) })}>{label}</span>
    <div class={div2({ class: clsx((theme as AdvancedRatingTheme)?.div2, div2Class) })}>
      <div class={div3({ class: clsx((theme as AdvancedRatingTheme)?.div3, div3Class) })} style="width: {rating}%"></div>
    </div>
    <span class={span2({ class: clsx((theme as AdvancedRatingTheme)?.span2, span2Class) })}>{rating}{unit}</span>
  </div>
{/each}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AdvancedRatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1223)
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
