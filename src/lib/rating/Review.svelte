<script lang="ts">
  import type { ReviewType } from '../types';
  import { twMerge } from 'tailwind-merge';
  
  interface $$Props {
    review: ReviewType;
    articleClass?: string;
    divClass?: string;
    imgClass?: string;
    ulClass?: string;
    liClass?: string;
  }

  export let review: $$Props['review'];
  export let articleClass: $$Props['articleClass'] = 'md:gap-8 md:grid md:grid-cols-3';
  export let divClass: $$Props['divClass'] = 'flex items-center mb-6 space-x-4 rtl:space-x-reverse';
  export let imgClass: $$Props['imgClass'] = 'w-10 h-10 rounded-full';
  export let ulClass: $$Props['ulClass'] = 'space-y-4 text-sm text-gray-500 dark:text-gray-400';
  export let liClass: $$Props['liClass'] = 'flex items-center';
</script>

<article class={twMerge(articleClass, $$props.classArticle)}>
  <div>
    <div class={twMerge(divClass, $$props.classDiv)}>
      <img class={twMerge(imgClass, $$props.classImg)} src={review.imgSrc} alt={review.imgAlt} />
      <div class="space-y-1 font-medium dark:text-white">
        <p>{review.name}</p>
        {#if review.address}
          <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <slot name="address" />
          </div>
        {/if}
      </div>
    </div>
    {#if $$slots.item1 || $$slots.item2 || $$slots.item3}
      <ul class={twMerge(ulClass, $$props.classUl)}>
        {#if $$slots.item1}
          <li class={twMerge(liClass, $$props.classLi)}>
            <slot name="item1" />
          </li>
        {/if}
        {#if $$slots.item2}
          <li class={twMerge(liClass, $$props.classLi)}>
            <slot name="item2" />
          </li>
        {/if}
        {#if $$slots.item3}
          <li class={twMerge(liClass, $$props.classLi)}>
            <slot name="item3" />
          </li>
        {/if}
      </ul>
    {/if}
  </div>
  <div class="col-span-2 mt-6 md:mt-0">
    <div class="flex items-start mb-5">
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
      <p class="bg-primary-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">
        {review.rating}
      </p>
    </div>
    <slot />
  </div>
</article>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let review: $$Props['review'];
@prop export let articleClass: $$Props['articleClass'] = 'md:gap-8 md:grid md:grid-cols-3';
@prop export let divClass: $$Props['divClass'] = 'flex items-center mb-6 space-x-4 rtl:space-x-reverse';
@prop export let imgClass: $$Props['imgClass'] = 'w-10 h-10 rounded-full';
@prop export let ulClass: $$Props['ulClass'] = 'space-y-4 text-sm text-gray-500 dark:text-gray-400';
@prop export let liClass: $$Props['liClass'] = 'flex items-center';
-->
