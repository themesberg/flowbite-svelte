<script lang="ts">
  import clsx from "clsx";
  import Star from "./Star.svelte";
  import { rating as ratingVariants, type RatingTheme } from ".";
  import type { RatingProps } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, text, class: className, classes, size = 24, total = 5, rating = 4, icon: Icon = Star, count = false, pClass, ...restProps }: RatingProps = $props();

  warnThemeDeprecation("Rating", { pClass }, { pClass: "p" });
  const styling = $derived(classes ?? { p: pClass });

  const theme = getTheme("rating");

  const { base, p } = $derived(ratingVariants());
  const ratingGroupId = crypto.randomUUID();
  let fullStars: number = Math.floor(rating);
  let rateDiffence = rating - fullStars;
  let percentRating = Math.round(rateDiffence * 100);
  let grayStars: number = total - (fullStars + Math.ceil(rateDiffence));
</script>

<div {...restProps} class={base({ class: clsx((theme as RatingTheme)?.base, className) })}>
  {#if count && children}
    <Icon fillPercent={100} {size} iconIndex={0} groupId={ratingGroupId} />
    <p class={p({ class: clsx((theme as RatingTheme)?.p, styling.p) })}>{rating}</p>
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
[Go to docs](https://flowbite-svelte.com/)
## Type
[RatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1247)
## Props
@prop children
@prop text
@prop class: className
@prop classes
@prop size = 24
@prop total = 5
@prop rating = 4
@prop icon: Icon = Star
@prop count = false
@prop pClass
@prop ...restProps
-->
