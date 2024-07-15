<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    rating?: Snippet;
    globalText?: Snippet;
    ratings: { label: string | undefined | null; rating: number }[];
    divClass?: string | undefined | null;
    spanClass?: string | undefined | null;
    div2Class?: string | undefined | null;
    div3Class?: string | undefined | null;
    span2Class?: string | undefined | null;
    unit?: string | undefined | null;
  }
  let {
    rating,
    globalText,
    ratings,
    divClass = 'flex items-center mt-4',
    spanClass = 'text-sm font-medium text-gray-600 dark:text-gray-500',
    div2Class = 'mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700',
    div3Class = 'h-5 bg-yellow-400 rounded',
    span2Class = 'text-sm font-medium text-gray-600 dark:text-gray-500',
    unit
  }: Props = $props();
</script>

{#if rating}
  {@render rating()}
{/if}
{#if globalText}
  {@render globalText()}
{/if}
{#each ratings as { label, rating }}
  <div class={divClass}>
    <span class={spanClass}>{label}</span>
    <div class={div2Class}>
      <div class={div3Class} style="width: {rating}%"></div>
    </div>
    <span class={span2Class}>{rating}{unit}</span>
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
