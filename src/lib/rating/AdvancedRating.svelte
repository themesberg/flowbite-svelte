<script lang="ts">
  import { advancedrating } from ".";
  import type { AdvancedRatingProps } from "$lib/types";

  let { rating, globalText, ratings, divClass, spanClass, div2Class, div3Class, span2Class, unit }: AdvancedRatingProps = $props();

  const { base, span, div2, div3, span2 } = $derived(advancedrating());
</script>

{#if rating}
  {@render rating()}
{/if}
{#if globalText}
  {@render globalText()}
{/if}
{#each ratings as { label, rating }}
  <div class={base({ class: divClass })}>
    <span class={span({ class: spanClass })}>{label}</span>
    <div class={div2({ class: div2Class })}>
      <div class={div3({ class: div3Class })} style="width: {rating}%"></div>
    </div>
    <span class={span2({ class: span2Class })}>{rating}{unit}</span>
  </div>
{/each}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AdvancedRatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1160)
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
