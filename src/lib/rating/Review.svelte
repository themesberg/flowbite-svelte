<script lang="ts">
  import clsx from "clsx";
  import { review as reviewVariants } from "./theme";
  import type { ReviewProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, address, item1, item2, item3, review, classes }: ReviewProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("review"));

  const { article, div, div2, div3, img, ul, li } = $derived(reviewVariants());
</script>

{#if review}
  <article class={article({ class: clsx(theme?.article, styling?.article) })}>
    <div>
      <div class={div({ class: clsx(theme?.div, styling?.div) })}>
        <img class={img({ class: clsx(theme?.img, styling?.img) })} src={review.imgSrc} alt={review.imgAlt} />
        <div class={div2({ class: clsx(theme?.div2, styling?.div2) })}>
          <p>{review.name}</p>
          {#if review.address}
            {#if address}
              <div class={div3({ class: clsx(theme?.div3, styling?.div3) })}>
                {@render address()}
              </div>
            {/if}
          {/if}
        </div>
      </div>
      {#if review.item1 || review.item2 || review.item3}
        <ul class={ul({ class: clsx(theme?.ul, styling?.ul) })}>
          {#if review.item1}
            <li class={li({ class: clsx(theme?.li, styling?.li) })}>
              {#if item1}
                {@render item1()}
              {/if}
            </li>
          {/if}
          {#if review.item2}
            <li class={clsx(styling?.li)}>
              {#if item2}
                {@render item2()}
              {/if}
            </li>
          {/if}
          {#if review.item3}
            <li class={clsx(styling?.li)}>
              {#if item3}
                {@render item3()}
              {/if}
            </li>
          {/if}
        </ul>
      {/if}
    </div>

    <div class="col-span-2 mt-6 md:mt-0">
      <div class="mb-5 flex items-start">
        <div class="pe-4">
          {#if review.reviewDate}
            <footer>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                Reviewed: {review.reviewDate}
              </p>
            </footer>
          {/if}
          <h4 class="text-xl font-bold text-gray-900 dark:text-white">
            {review.title}
          </h4>
        </div>
        <p class="bg-primary-700 inline-flex items-center rounded-sm p-1.5 text-sm font-semibold text-white">
          {review.rating}
        </p>
      </div>
      {@render children()}
    </div>
  </article>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ReviewProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1277)
## Props
@prop children
@prop address
@prop item1
@prop item2
@prop item3
@prop review
@prop classes
-->
