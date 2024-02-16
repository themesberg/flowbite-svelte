<script lang="ts">
  import Star from './Star.svelte';
  import { twMerge } from 'tailwind-merge';
  import { idGenerator } from '$lib/uiHelpers.svelte';
  import type { ComponentType } from 'svelte';

  interface Props {
    children?: any;
    text?: any;
    divclass?: string;
    size?: number;
    total?: number;
    rating?: number;
    partialId?: string;
    icon?: ComponentType;
    count?: boolean;
  }
  let {
    children,
    text,
    divclass,
    size = 24,
    total = 5,
    rating = 4,
    partialId = 'partialStar' + idGenerator(),
    icon = Star,
    count = false
  } = $props<Props>();

  // generate unique id for full star and gray star
  const fullStarId: string = idGenerator();
  const grayStarId: string = idGenerator();
  let fullStars: number = Math.floor(rating);
  let rateDiffence = rating - fullStars;
  let percentRating = Math.round(rateDiffence * 100);
  let grayStars: number = total - (fullStars + Math.ceil(rateDiffence));
  // console.log(fullStars, grayStars, rateDiffence, percentRating)
</script>

<div class={twMerge('flex items-center', divclass)}>
  {#if count}
    <svelte:component this={icon} fillPercent={100} {size} />
    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>
    {@render children()}
  {:else}
    {#each Array(fullStars) as star}
      <svelte:component this={icon} {size} fillPercent={100} id={fullStarId} />
    {/each}
    {#if percentRating}
      <svelte:component this={icon} {size} fillPercent={percentRating} id={partialId} />
    {/if}
    {#each Array(grayStars) as star}
      <svelte:component this={icon} {size} fillPercent={0} id={grayStarId} />
    {/each}
    {#if text}
      {@render text()}
    {/if}
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop children,
@prop text,
@prop divclass,
@prop size = 24,
@prop total = 5,
@prop rating = 4,
@prop partialId = 'partialStar' + idGenerator(),
@prop icon = Star,
@prop count = false
-->
