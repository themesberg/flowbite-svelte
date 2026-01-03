<script lang="ts">
  import { scoreRating } from "./theme";
  import type { ScoreRatingProps } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { ratings, ratings2, headerLabel, classes }: ScoreRatingProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("scoreRating"));

  const { badge, title, separator, subtitle, reviewLink, bar } = $derived(scoreRating());
</script>

<div data-scope="score-rating" class="mb-5 flex items-center">
  {#if headerLabel}
    {#if headerLabel.desc1}
      <p data-part="badge" class={badge({ class: clsx(theme?.badge, styling?.badge) })}>{headerLabel.desc1}</p>
    {/if}
    {#if headerLabel.desc2}
      <p data-part="title" class={title({ class: clsx(theme?.title, styling?.title) })}>{headerLabel.desc2}</p>
    {/if}
    {#if headerLabel.desc3}
      <span data-part="separator" class={separator({ class: clsx(theme?.separator, styling?.separator) })}></span>
      <p data-part="subtitle" class={subtitle({ class: clsx(theme?.subtitle, styling?.subtitle) })}>{headerLabel.desc3}</p>
    {/if}
    {#if headerLabel.link}
      <a data-part="review-link" href={headerLabel.link.url} class={reviewLink({ class: clsx(theme?.reviewLink, styling?.reviewLink) })}>{headerLabel.link.label}</a>
    {/if}
  {/if}
</div>
<div class="gap-8 sm:grid sm:grid-cols-2">
  <div>
    {#if ratings}
      {#each ratings as { label, rating } (label)}
        <dl>
          <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
            {label}
          </dt>
          <dd class="mb-3 flex items-center">
            <div class="me-2 h-2.5 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
              <div data-part="bar" class={bar({ class: clsx(theme?.bar, styling?.bar) })} style="width: {rating * 10}%"></div>
            </div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{rating}</span>
          </dd>
        </dl>
      {/each}
    {/if}
  </div>
  <div>
    {#if ratings2}
      {#each ratings2 as { label, rating } (label)}
        <dl>
          <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
            {label}
          </dt>
          <dd class="mb-3 flex items-center">
            <div class="me-2 h-2.5 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
              <div data-part="bar" class={bar({ class: clsx(theme?.bar, styling?.bar) })} style="width: {rating * 10}%"></div>
            </div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{rating}</span>
          </dd>
        </dl>
      {/each}
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ScoreRatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1297)
## Props
@prop ratings
@prop ratings2
@prop headerLabel
@prop classes
-->
