<script lang="ts">
  import Button from '../buttons/Button.svelte';
  import Rating from './Rating.svelte';
  // default is floor
  export let ceil: boolean = false;
  export let helpfullink: string = '';
  export let abuselink: string = '';
  export let comment: {
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

  let roundedRating: number = ceil ? Math.ceil(comment.rating) : Math.floor(comment.rating);
  let grayStars: number = comment.total - roundedRating;
</script>

<article>
  <div class="flex items-center mb-4 space-x-4">
    <img class="w-10 h-10 rounded-full" src={comment.user.img.src} alt={comment.user.img.alt} />
    <div class="space-y-1 font-medium dark:text-white">
      <p>
        {comment.user.name}
        <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400"
          >{comment.user.joined}</time>
      </p>
    </div>
  </div>
  <div class="flex items-center mb-1">
    <Rating total={comment.total} rating={comment.rating}>
      <p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        {comment.rating} out of {comment.total}
      </p>
    </Rating>
    {#if comment.heading}
      <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
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
      <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
        {#if helpfullink}
          <Button size="xs" href="/" color="dark">Helpful</Button>
        {/if}
        {#if abuselink}
          <a
            href={abuselink}
            class="pl-4 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Report abuse</a>
        {/if}
      </div>
    {/if}
  </aside>
</article>

<!--
  @component
  ## Features
  [Go to Rating](https://flowbite-svelte.com/docs/components/rating)
  ## Props
  @prop ceil: boolean = false;
  @prop helpfullink: string = '';
  @prop abuselink: string = '';
  @prop comment: {
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
  ## Example
  ```
  <script>
    import { RatingComment } from 'flowbite-svelte';
  </script>

  <RatingComment {comment} helpfullink="/" abuselink="/">
    <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
      This is my third Invicta Pro Diver. They are just fantastic value.
    </p>
    <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
      It is obviously not the same build quality as those very expensive watches.
    </p>
    <a
      href="/"
      class="block mb-5 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
      >Read more</a
    >
    <svelte:fragment slot="evaluation">19 people found this helpful</svelte:fragment>
  </RatingComment>
  ```
-->
