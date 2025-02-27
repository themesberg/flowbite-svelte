<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let ratings: { label: string; rating: number }[] = [];
  export let divClass: string = 'flex items-center mt-4';
  export let labelClass: string = 'text-sm font-medium text-gray-600 dark:text-gray-500';
  export let ratingDivClass: string = 'mx-4 w-2/4 h-5 bg-gray-200 rounded-sm dark:bg-gray-700';
  export let ratingClass: string = 'h-5 bg-yellow-400 rounded-sm';
  export let rightLabelClass: string = 'text-sm font-medium text-gray-600 dark:text-gray-500';
  export let unit: string = '%';
  export let classDiv: string = '';
  export let classLabel: string = '';
  export let classRatingDiv: string = '';
  export let classRating: string = '';
  export let classRightLabel: string = '';

  let divCls: string = twMerge(divClass, classDiv);
  let labelCls: string = twMerge(labelClass, classLabel);
  let ratingDivCls: string = twMerge(ratingDivClass, classRatingDiv);
  let ratingCls: string = twMerge(ratingClass, classRating);
  let rightLabelCls: string = twMerge(rightLabelClass, classRightLabel);
</script>

{#if $$slots.rating}
  <slot name="rating"></slot>
{/if}
{#if $$slots.globalText}
  <slot name="globalText"></slot>
{/if}
{#each ratings as { label, rating }}
  <div class={divCls}>
    <span class={labelCls}>{label}</span>
    <div class={ratingDivCls}>
      <div class={ratingCls} style="width: {rating}%"></div>
    </div>
    <span class={rightLabelCls}>{rating}{unit}</span>
  </div>
{/each}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let ratings: { label: string;
@prop export let divClass: string = 'flex items-center mt-4';
@prop export let labelClass: string = 'text-sm font-medium text-gray-600 dark:text-gray-500';
@prop export let ratingDivClass: string = 'mx-4 w-2/4 h-5 bg-gray-200 rounded-sm dark:bg-gray-700';
@prop export let ratingClass: string = 'h-5 bg-yellow-400 rounded-sm';
@prop export let rightLabelClass: string = 'text-sm font-medium text-gray-600 dark:text-gray-500';
@prop export let unit: string = '%';
@prop export let classDiv: string = '';
@prop export let classLabel: string = '';
@prop export let classRatingDiv: string = '';
@prop export let classRating: string = '';
@prop export let classRightLabel: string = '';
-->
