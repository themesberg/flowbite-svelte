<script lang="ts">
  import Star from './Star.svelte';
  import { idGenerator } from '$lib/uiHelpers.svelte';
  import { type RatingProps as Props, rating as ratingVariants } from '.';

  let { children, text, divClass, size = 24, total = 5, rating = 4, partialId = 'partialStar' + idGenerator(), Icon = Star, count = false, pClass }: Props = $props();

  const { base, p } = $derived(ratingVariants());

  // generate unique id for full star and gray star
  const fullStarId: string = idGenerator();
  const grayStarId: string = idGenerator();
  let fullStars: number = Math.floor(rating);
  let rateDiffence = rating - fullStars;
  let percentRating = Math.round(rateDiffence * 100);
  let grayStars: number = total - (fullStars + Math.ceil(rateDiffence));
</script>

<div class={base({ class: divClass })}>
  {#if count && children}
    <Icon fillPercent={100} {size} />
    <p class={p({ class: pClass })}>{rating}</p>
    {@render children()}
  {:else}
    {#each Array(fullStars) as star}
      <Icon {size} fillPercent={100} id={fullStarId} />
    {/each}
    {#if percentRating}
      <Icon {size} fillPercent={percentRating} id={partialId} />
    {/if}
    {#each Array(grayStars) as star}
      <Icon {size} fillPercent={0} id={grayStarId} />
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
@prop divClass
@prop size = 24
@prop total = 5
@prop rating = 4
@prop partialId = 'partialStar' + idGenerator()
@prop Icon = Star
@prop count = false
@prop pClass
-->
