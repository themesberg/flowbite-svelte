<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  type ReviewType = {
    name?: string | undefined | null;
    imgSrc?: string | undefined | null;
    imgAlt?: string | undefined | null;
    address?: string | undefined;
    reviewDate?: string | undefined;
    title?: string | undefined | null;
    rating?: number;
    item1?: string | undefined;
    item2?: string | undefined;
    item3?: string | undefined;
  };

  interface Props extends HTMLAttributes<HTMLElement>{
    children: Snippet;
    address?: any;
    item1?: any;
    item2?: any;
    item3?: any;
    review?: ReviewType;
    articleClass?: string | undefined | null;
    divClass?: string | undefined | null;
    div2Class?: string | undefined | null;
    div3Class?: string | undefined | null;
    imgClass?: string | undefined | null;
    ulClass?: string | undefined | null;
    liClass?: string | undefined | null;
  }

  let {
    children,
    address,
    item1,
    item2,
    item3,
    review,
    articleClass = 'md:grid md:grid-cols-3 md:gap-8',
    divClass = 'mb-6 flex items-center space-x-4 rtl:space-x-reverse',
    div2Class = 'space-y-1 font-medium dark:text-white',
    div3Class = 'flex items-center text-sm text-gray-500 dark:text-gray-400',
    imgClass = 'h-10 w-10 rounded-full',
    ulClass = 'space-y-4 text-sm text-gray-500 dark:text-gray-400',
    liClass = 'flex items-center'
  }: Props = $props();
</script>

{#if review}
  <article class={articleClass}>
    <div>
      <div class={divClass}>
        <img
          class={imgClass}
          src={review.imgSrc}
          alt={review.imgAlt}
        />
        <div class={div2Class}>
          <p>{review.name}</p>
          {#if review.address}
            {#if address}
              <div class={div3Class}>
                {@render address()}
              </div>
            {/if}
          {/if}
        </div>
      </div>
      {#if review.item1 || review.item2 || review.item3}
        <ul class={ulClass}>
          {#if review.item1}
            <li class={twMerge(liClass)}>
              {@render item1()}
            </li>
          {/if}
          {#if review.item2}
            <li class={liClass}>
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
@prop articleClass
@prop divClass
@prop imgClass
@prop ulClass
@prop liClass
-->
