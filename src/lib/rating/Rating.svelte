<script lang="ts">
  import type { Snippet } from 'svelte';
  import Star from './Star.svelte';
  import { twMerge } from 'tailwind-merge';
  import { idGenerator } from '$lib/uiHelpers.svelte';
  import type { Component } from 'svelte';

  interface Props {
    children?: Snippet;
    text?: Snippet;
    divClass?: string | undefined | null;
    size?: number;
    total?: number;
    rating?: number;
    partialId?: string | undefined | null;
    icon?: Component;
    count?: boolean;
    pClass?: string | undefined | null;
  }

  let {
    children,
    text,
    divClass = 'flex items-center',
    size = 24,
    total = 5,
    rating = 4,
    partialId = 'partialStar' + idGenerator(),
    icon = Star,
    count = false,
    pClass = 'ms-2 text-sm font-bold text-gray-900 dark:text-white'
  }: Props = $props();

  // generate unique id for full star and gray star
  const fullStarId: string = idGenerator();
  const grayStarId: string = idGenerator();
  let fullStars: number = Math.floor(rating);
  let rateDiffence = rating - fullStars;
  let percentRating = Math.round(rateDiffence * 100);
  let grayStars: number = total - (fullStars + Math.ceil(rateDiffence));
</script>

<div class={divClass}>
  {#if count && children}
    <icon fillPercent={100} {size}></icon>
    <p class={pClass}>{rating}</p>
    {@render children()}
  {:else}
    {#each Array(fullStars) as star}
      <icon {size} fillPercent={100} id={fullStarId}></icon>
    {/each}
    {#if percentRating}
      <icon {size} fillPercent={percentRating} id={partialId}></icon>
    {/if}
    {#each Array(grayStars) as star}
      <icon {size} fillPercent={0} id={grayStarId}></icon>
    {/each}
    {#if text}
      {@render text()}
    {/if}
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop text
@prop divClass = 'flex items-center'
@prop size = 24
@prop total = 5
@prop rating = 4
@prop partialId = 'partialStar' + idGenerator()
@prop icon = Star
@prop count = false
@prop pClass = 'ms-2 text-sm font-bold text-gray-900 dark:text-white'
-->
