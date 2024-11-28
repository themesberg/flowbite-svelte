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
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: rating: any;
@props:globalText: any;
@props:ratings: any;
@props:divClass: any;
@props:spanClass: any;
@props:div2Class: any;
@props:div3Class: any;
@props:span2Class: any;
@props:unit: any;
-->
