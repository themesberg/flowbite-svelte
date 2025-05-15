<script lang="ts">
  import { scorerating } from ".";
  import type { ScoreRatingProps } from "$lib/types";

  let { ratings, ratings2, headerLabel }: ScoreRatingProps = $props();

  const { desc1, desc2, desc3span, desc3p, link, bar } = $derived(scorerating());
</script>

<div class="mb-5 flex items-center">
  {#if headerLabel}
    {#if headerLabel.desc1}
      <p class={desc1()}>{headerLabel.desc1}</p>
    {/if}
    {#if headerLabel.desc2}
      <p class={desc2()}>{headerLabel.desc2}</p>
    {/if}
    {#if headerLabel.desc3}
      <span class={desc3span()}></span>
      <p class={desc3p()}>{headerLabel.desc3}</p>
    {/if}
    {#if headerLabel.link}
      <a href={headerLabel.link.url} class={link()}>{headerLabel.link.label}</a>
    {/if}
  {/if}
</div>
<div class="gap-8 sm:grid sm:grid-cols-2">
  <div>
    {#if ratings}
      {#each ratings as { label, rating }}
        <dl>
          <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
            {label}
          </dt>
          <dd class="mb-3 flex items-center">
            <div class="me-2 h-2.5 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
              <div class={bar()} style="width: {rating * 10}%"></div>
            </div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{rating}</span>
          </dd>
        </dl>
      {/each}
    {/if}
  </div>
  <div>
    {#if ratings2}
      {#each ratings2 as { label, rating }}
        <dl>
          <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
            {label}
          </dt>
          <dd class="mb-3 flex items-center">
            <div class="me-2 h-2.5 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
              <div class={bar()} style="width: {rating * 10}%"></div>
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
[ScoreRatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1235)
## Props
@prop ratings
@prop ratings2
@prop headerLabel
-->
