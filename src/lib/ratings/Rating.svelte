<script lang="ts">
  import Star from './Star.svelte';
  import { twMerge } from 'tailwind-merge';
  import generateId from '../utils/generateId.js';
  import type { ComponentType } from 'svelte';

  export let divClass: string = 'flex items-center';
  export let size: number = 24;
  export let total: number = 5;
  export let rating: number = 4;
  export let partialId: string = 'partialStar' + generateId();
  export let icon: ComponentType = Star;
  export let count: boolean = false;

  // generate unique id for full star and gray star
  const fullStarId: string = generateId();
  const grayStarId: string = generateId();
  let fullStars: number = Math.floor(rating);
  let rateDiffence = rating - fullStars;
  let percentRating = Math.round(rateDiffence * 100);
  let grayStars: number = total - (fullStars + Math.ceil(rateDiffence));
  // console.log(fullStars, grayStars, rateDiffence, percentRating)
</script>

<div class={twMerge(divClass, $$props.class)}>
  {#if count}
    <svelte:component this={icon} fillPercent={100} {size} />
    <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>
    <slot />
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
    {#if $$slots.text}
      <slot name="text" />
    {/if}
  {/if}
</div>

<!--
  @component
  ## Features
  [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
  - Setup
  - Default rating
  - Stars
  - Rating with text
  - Rating count
  - Icon size and color
  - Size and color
  - AdvancedRating component
  - Different icon
  - Score rating
  - Rating comment
  - Review content
  ## Props
  @prop divClass: string = 'flex items-center';
  @prop size: number = 24;
  @prop total: number = 5;
  @prop rating: number = 4;
  @prop partialId: string = 'partialStar' + generateId();
  @prop icon: ComponentType = Star;
  @prop count: boolean = false;  
  ## Example
  ```
  <script>
    import { Rating } from 'flowbite-svelte';
  </script>

  <Rating id="example-3" total={5} rating={3.4}>
    <p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.4 out of 5</p>
  </Rating>
  ```
-->
