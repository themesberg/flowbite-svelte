<script lang="ts">
  import { type AdvancedRatingProps as Props, advancedrating } from '.'

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
  <div class={base({ class: divClass})}>
    <span class={span({ class: spanClass})}>{label}</span>
    <div class={div2({ class: div2Class})}>
      <div class={div3({ class: div3Class})} style="width: {rating}%"></div>
    </div>
    <span class={span2({ class: span2Class})}>{rating}{unit}</span>
  </div>
{/each}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop rating
@prop globalText
@prop ratings
@prop divClass = 'flex items-center mt-4'
@prop spanClass = 'text-sm font-medium text-gray-600 dark:text-gray-500'
@prop div2Class = 'mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700'
@prop div3Class = 'h-5 bg-yellow-400 rounded'
@prop span2Class = 'text-sm font-medium text-gray-600 dark:text-gray-500'
@prop unit
-->
