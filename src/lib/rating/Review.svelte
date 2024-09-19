<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type ReviewProps as Props, review as reviewVariants } from '.';

  let { children, address, item1, item2, item3, review, articleClass, divClass, div2Class, div3Class, imgClass, ulClass, liClass }: Props = $props();

  const { article, div, div2, div3, img, ul, li } = $derived(reviewVariants());
</script>

{#if review}
  <article class={article({ class: articleClass })}>
    <div>
      <div class={div({ class: divClass })}>
        <img class={img({ class: imgClass })} src={review.imgSrc} alt={review.imgAlt} />
        <div class={div2({ class: div2Class })}>
          <p>{review.name}</p>
          {#if review.address}
            {#if address}
              <div class={div3({ class: div3Class })}>
                {@render address()}
              </div>
            {/if}
          {/if}
        </div>
      </div>
      {#if review.item1 || review.item2 || review.item3}
        <ul class={ul({ class: ulClass })}>
          {#if review.item1}
            <li class={twMerge(li({ class: liClass }))}>
              {#if item1}
                {@render item1()}
              {/if}
            </li>
          {/if}
          {#if review.item2}
            <li class={liClass}>
              {#if item2}
                {@render item2()}
              {/if}
            </li>
          {/if}
          {#if review.item3}
            <li class={twMerge(liClass)}>
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
        <p class="inline-flex items-center rounded bg-primary-700 p-1.5 text-sm font-semibold text-white">
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
@prop div2Class
@prop div3Class
@prop imgClass
@prop ulClass
@prop liClass
-->
