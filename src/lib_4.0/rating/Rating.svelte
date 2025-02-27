<script lang="ts">
  import Star from './Star.svelte';
  import { twMerge } from 'tailwind-merge';
  import generateId from '../utils/generateId.js';
  import type { ComponentType } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    divClass?: string;
    size?: number;
    total?: number;
    rating: number;
    partialId?: string;
    icon?: ComponentType;
    count?: boolean;
    iconFillColor?: string | undefined;
    iconStrokeColor?: string | undefined;
  }

  export let divClass: $$Props['divClass'] = 'flex items-center';
  export let size: $$Props['size'] = 24;
  export let total: NonNullable<$$Props['total']> = 5;
  export let rating: $$Props['rating'] = 4;
  export let partialId: $$Props['partialId'] = 'partialStar' + generateId();
  export let icon: $$Props['icon'] = Star;
  export let count: $$Props['count'] = false;
  export let iconFillColor: $$Props['iconFillColor'] = '#F5CA14';
  export let iconStrokeColor: $$Props['iconStrokeColor'] = '#F5CA14';

  // generate unique id for full star and gray star
  const fullStarId: string = generateId();
  const grayStarId: string = generateId();
  $: fullStars = Math.floor(rating);
  $: rateDiffence = rating - fullStars;
  $: percentRating = Math.round(rateDiffence * 100);
  $: grayStars = total - (fullStars + Math.ceil(rateDiffence));
  // console.log(fullStars, grayStars, rateDiffence, percentRating)
</script>

<div class={twMerge(divClass, $$props.class)}>
  {#if count}
    <svelte:component this={icon} fillColor={iconFillColor} strokeColor={iconStrokeColor} fillPercent={100} {size} />
    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>
    <slot />
  {:else}
    {#each Array(fullStars) as star}
      <svelte:component this={icon} fillColor={iconFillColor} strokeColor={iconStrokeColor} {size} fillPercent={100} id={fullStarId} />
    {/each}
    {#if percentRating}
      <svelte:component this={icon} fillColor={iconFillColor} strokeColor={iconStrokeColor} {size} fillPercent={percentRating} id={partialId} />
    {/if}
    {#each Array(grayStars) as star}
      <svelte:component this={icon} fillColor={iconFillColor} strokeColor={iconStrokeColor} {size} fillPercent={0} id={grayStarId} />
    {/each}
    {#if $$slots.text}
      <slot name="text" />
    {/if}
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: $$Props['divClass'] = 'flex items-center';
@prop export let size: $$Props['size'] = 24;
@prop export let total: NonNullable<$$Props['total']> = 5;
@prop export let rating: $$Props['rating'] = 4;
@prop export let partialId: $$Props['partialId'] = 'partialStar' + generateId();
@prop export let icon: $$Props['icon'] = Star;
@prop export let count: $$Props['count'] = false;
@prop export let iconFillColor: $$Props['iconFillColor'] = '#F5CA14';
@prop export let iconStrokeColor: $$Props['iconStrokeColor'] = '#F5CA14';
-->
