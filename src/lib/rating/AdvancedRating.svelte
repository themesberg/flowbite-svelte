<script lang="ts">
  import { type AdvancedRatingProps as Props, advancedrating } from ".";

  let { rating, globalText, ratings, divClass, spanClass, div2Class, div3Class, span2Class, unit }: Props = $props();

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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: rating: Snippet;
@props:globalText: Snippet;
@props:ratings: { label: string | null | undefined[];
@props:divClass: string;
@props:spanClass: string;
@props:div2Class: string;
@props:div3Class: string;
@props:span2Class: string;
@props:unit: string;
-->
