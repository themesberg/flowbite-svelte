<script lang="ts">
  import type { Snippet } from 'svelte';
  import Button from '../buttons/Button.svelte';
  import Rating from './Rating.svelte';
  interface Props {
    children?: Snippet;
    evaluation?: Snippet;
    ceil?: boolean;
    helpfullink?: string;
    abuselink?: string;
    comment: {
      id?: string;
      user: {
        name?: string;
        img: {
          src: string;
          alt?: string;
        };
        joined?: string;
      };
      total?: number;
      rating: number;
      heading?: string;
      address?: string;
      datetime?: string;
    };
  }

  let { children, evaluation, ceil, helpfullink, abuselink, comment }: Props = $props();

  let roundedRating: number = ceil ? Math.ceil(comment.rating) : Math.floor(comment.rating);
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
        <p class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">
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
  {#if children}
    {@render children()}
  {/if}
  <aside>
    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
      {#if evaluation}
        {@render evaluation()}
      {/if}
    </p>
    {#if helpfullink || abuselink}
      <div class="mt-3 flex items-center space-x-3 divide-x divide-gray-200 dark:divide-gray-600 rtl:space-x-reverse rtl:divide-x-reverse">
        {#if helpfullink}
          <Button size="xs" href="/" color="dark">Helpful</Button>
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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:evaluation?: any;
@props:ceil?: boolean;
@props:helpfullink?: string;
@props:abuselink?: string;
@props:comment: {
@props:id?: string;
@props:user: {
@props:name?: string;
@props:img: {
@props:src: string;
@props:alt?: string;
-->
