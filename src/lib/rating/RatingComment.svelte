<script lang="ts">
  import Button from '../buttons/Button.svelte';
  import Rating from './Rating.svelte';
  
  interface $$Props {
    helpfullink?: string;
    abuselink?: string;
    comment: {
      id: string;
      user: {
        name: string;
        img: {
          src: string;
          alt: string;
        };
        joined: string;
      };
      total: number;
      rating: number;
      heading: string;
      address: string;
      datetime: string;
    };
  }

  // export let ceil: $$Props['ceil'] = false;
  export let helpfullink: $$Props['helpfullink'] = '';
  export let abuselink: $$Props['abuselink'] = '';
  export let comment: $$Props['comment'];
</script>

<article>
  <div class="flex items-center mb-4 space-x-4 rtl:space-x-reverse">
    <img class="w-10 h-10 rounded-full" src={comment.user.img.src} alt={comment.user.img.alt} />
    <div class="space-y-1 font-medium dark:text-white">
      <p>
        {comment.user.name}
        <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">
          {comment.user.joined}
        </time>
      </p>
    </div>
  </div>
  <div class="flex items-center mb-1">
    <Rating total={comment.total} rating={comment.rating}>
      <p slot="text" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        {comment.rating} out of {comment.total}
      </p>
    </Rating>
    {#if comment.heading}
      <h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
        {comment.heading}
      </h3>
    {/if}
  </div>
  {#if comment.address || comment.datetime}
    <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
      <p>Reviewed in {comment.address} on {comment.datetime}</p>
    </footer>
  {/if}
  <slot />
  <aside>
    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
      <slot name="evaluation" />
    </p>
    {#if helpfullink || abuselink}
      <div class="flex items-center mt-3 space-x-3 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600">
        {#if helpfullink}
          <Button size="xs" href={helpfullink} color="dark">Helpful</Button>
        {/if}
        {#if abuselink}
          <a href={abuselink} class="ps-4 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"> Report abuse </a>
        {/if}
      </div>
    {/if}
  </aside>
</article>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let ceil: $$Props['ceil'] = false;
@prop export let helpfullink: $$Props['helpfullink'] = '';
@prop export let abuselink: $$Props['abuselink'] = '';
@prop export let comment: $$Props['comment'];
-->
