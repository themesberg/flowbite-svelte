<script lang="ts">
  import type { Snippet } from 'svelte';
  import Star from './Star.svelte';
  import { twMerge } from 'tailwind-merge';
  import { idGenerator } from '$lib/uiHelpers.svelte';
  import type { ComponentType } from 'svelte';

  interface Props {
    children?: Snippet;
    text?: Snippet;
    divclass?: string;
    size?: number;
    total?: number;
    rating?: number;
    partialId?: string;
    icon?: ComponentType;
    count?: boolean;
  }
  let { children, text, divclass, size = 24, total = 5, rating = 4, partialId = 'partialStar' + idGenerator(), icon = Star, count = false }: Props = $props();

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
  {#if count && children}
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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:text?: any;
@props:divclass?: string;
@props:size?: number;
@props:total?: number;
@props:rating?: number;
@props:partialId?: string;
@props:icon?: ComponentType;
@props:count?: boolean;
-->
