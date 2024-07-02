<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type ReviewType = {
    name?: string;
    imgSrc?: string;
    imgAlt?: string;
    address?: string | undefined;
    reviewDate?: string | undefined;
    title?: string;
    rating?: number;
    item1?: string | undefined;
    item2?: string | undefined;
    item3?: string | undefined;
  };

  interface Props {
    children: Snippet;
    address?: any;
    item1?: any;
    item2?: any;
    item3?: any;
    review?: ReviewType;
    articleclass?: string;
    divClass?: string;
    imgclass?: string;
    ulclass?: string;
    liClass?: string;
  }

  let {
    children,
    address,
    item1,
    item2,
    item3,
    review,
    articleclass,
    divClass,
    imgclass,
    ulclass,
    liClass
  }: Props = $props();
  
</script>

{#if review}
  <article class={twMerge('md:grid md:grid-cols-3 md:gap-8', articleclass)}>
    <div>
      <div
        class={twMerge(
          'mb-6 flex items-center space-x-4 rtl:space-x-reverse',
          divClass
        )}
      >
        <img
          class={twMerge('h-10 w-10 rounded-full', imgclass)}
          src={review.imgSrc}
          alt={review.imgAlt}
        />
        <div class="space-y-1 font-medium dark:text-white">
          <p>{review.name}</p>
          {#if review.address}
            {#if address}
              <div
                class="flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                {@render address()}
              </div>
            {/if}
          {/if}
        </div>
      </div>
      {#if review.item1 || review.item2 || review.item3}
        <ul
          class={twMerge(
            'space-y-4 text-sm text-gray-500 dark:text-gray-400',
            ulclass
          )}
        >
          {#if review.item1}
            <li class={twMerge(liClass)}>
              {@render item1()}
            </li>
          {/if}
          {#if review.item2}
            <li class={twMerge('flex items-center', liClass)}>
              {@render item2()}
            </li>
          {/if}
          {#if review.item3}
            <li class={twMerge(liClass)}>
              {@render item3()}
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
        <p
          class="inline-flex items-center rounded bg-primary-700 p-1.5 text-sm font-semibold text-white"
        >
          {review.rating}
        </p>
      </div>
        {@render children()}
    </div>
  </article>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop address
@prop item1
@prop item2
@prop item3
@prop review
@prop articleclass
@prop divClass
@prop imgclass
@prop ulclass
@prop liClass
-->
