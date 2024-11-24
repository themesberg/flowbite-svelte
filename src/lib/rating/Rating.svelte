<script lang="ts">
  import Star from "./Star.svelte";
  import { type RatingProps as Props, rating as ratingVariants } from ".";

  let { children, text, divClass, size = 24, total = 5, rating = 4, Icon = Star, count = false, pClass }: Props = $props();

  const { base, p } = $derived(ratingVariants());
  const ratingGroupId = crypto.randomUUID();
  let fullStars: number = Math.floor(rating);
  let rateDiffence = rating - fullStars;
  let percentRating = Math.round(rateDiffence * 100);
  let grayStars: number = total - (fullStars + Math.ceil(rateDiffence));
</script>

<div class={base({ class: divClass })}>
  {#if count && children}
    <Icon fillPercent={100} {size} iconIndex={0} groupId={ratingGroupId} />
    <p class={p({ class: pClass })}>{rating}</p>
    {@render children()}
  {:else}
    <!-- eslint-disable @typescript-eslint/no-unused-vars-->
    {#each Array(fullStars) as _, index}
      <Icon {size} fillPercent={100} iconIndex={index} groupId={`rating-${ratingGroupId}-full`} />
    {/each}
    {#if percentRating}
      <Icon {size} fillPercent={percentRating} iconIndex={fullStars} groupId={`rating-${ratingGroupId}-partial`} />
    {/if}
    <!-- eslint-disable @typescript-eslint/no-unused-vars-->
    {#each Array(grayStars) as _, index}
      <Icon {size} fillPercent={0} iconIndex={index} groupId={`rating-${ratingGroupId}-empty`} />
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
@props: children: Snippet;
@props:text: Snippet;
@props:divClass: string;
@props:size: number = 24;
@props:total: number = 5;
@props:rating: number = 4;
@props:Icon: Component = Star;
@props:count: boolean = false;
@props:pClass: string;
-->
