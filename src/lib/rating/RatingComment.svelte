<script lang="ts">
  import Button from '../buttons/Button.svelte';
  import Rating from './Rating.svelte';
  import { type RatingCommentProps as Props } from '.';

  let { children, evaluation, helpfullink, abuselink, comment }: Props = $props();
</script>

<article>
  <div class="mb-4 flex items-center space-x-4 rtl:space-x-reverse">
    <img class="h-10 w-10 rounded-full" src={comment.user.img.src} alt={comment.user.img.alt} />
    <div class="space-y-1 font-medium dark:text-white">
      <p>
        {comment.user.name}
        <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">
          {comment.user.joined}
        </time>
      </p>
    </div>
  </div>
  <div class="mb-1 flex items-center">
    <Rating total={comment.total} rating={comment.rating}>
      {#snippet text()}
        <p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
          {comment.rating} out of {comment.total}
        </p>
      {/snippet}
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

  {@render children()}

  <aside>
    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
      {#if evaluation}
        {@render evaluation()}
      {/if}
    </p>
    {#if helpfullink || abuselink}
      <div class="mt-3 flex items-center space-x-3 divide-x divide-gray-200 rtl:space-x-reverse rtl:divide-x-reverse dark:divide-gray-600">
        {#if helpfullink}
          <Button size="xs" href="/" color="dark">Helpful</Button>
        {/if}
        {#if abuselink}
          <a href={abuselink} class="ps-4 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Report abuse</a>
        {/if}
      </div>
    {/if}
  </aside>
</article>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop evaluation
@prop helpfullink
@prop abuselink
@prop comment
-->
