<script lang="ts">
  import type { ReviewType } from '../types';
  import { twMerge } from 'tailwind-merge';

  export let review: ReviewType;
  export let articleClass: string = 'md:gap-8 md:grid md:grid-cols-3';
  export let divClass: string = 'flex items-center mb-6 space-x-4';
  export let imgClass: string = 'w-10 h-10 rounded-full';
  export let ulClass: string = 'space-y-4 text-sm text-gray-500 dark:text-gray-400';
  export let liClass: string = 'flex items-center';
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
      <div class="pr-4">
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
  ## Features
  [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
  ## Props
  @prop review: ReviewType;
  @prop articleClass: string = 'md:gap-8 md:grid md:grid-cols-3';
  @prop divClass: string = 'flex items-center mb-6 space-x-4';
  @prop imgClass: string = 'w-10 h-10 rounded-full';
  @prop ulClass: string = 'space-y-4 text-sm text-gray-500 dark:text-gray-400';
  @prop liClass: string = 'flex items-center';
  ## Example
  ```
  <script>
    import { Review } from 'flowbite-svelte';
  </script>

  <Review {review}>
    <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
      The flat was spotless, very comfortable, and the host was amazing..
    </p>
    <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
      It is obviously not the same build quality as those very expensive watches.
    </p>
    <svelte:fragment slot="item1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2"><path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clip-rule="evenodd" /></svg>
      {review.item1}
    </svelte:fragment>
    <svelte:fragment slot="item2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2"><path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" /></svg>
      {review.item2}
    </svelte:fragment>
    <svelte:fragment slot="item3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2"><path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" /><path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" /></svg>
      {review.item3}
    </svelte:fragment>
    <aside class="flex items-center mt-3 space-x-5">
      <a
        href="/"
        class="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-1"><path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" /></svg>
        Helpful
      </a>
      <a
        href="/"
        class="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-1"><path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" /></svg>
        Not helpful
      </a>
    </aside>
  </Review>
  ```
-->
