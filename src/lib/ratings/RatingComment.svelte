<script lang="ts">
  import Button from '../buttons/Button.svelte';
  import Star from './Star.svelte';
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
    {#each Array(roundedRating) as _}
      <slot name="ratingUp">
        <Star variation="solid" size="24" class="text-yellow-300 dark:text-yellow-200" />
      </slot>
    {/each}
    {#each Array(grayStars) as _}
      <slot name="ratingDown">
        <Star size="24" class="px-0.5 text-gray-300 dark:text-gray-500" />
      </slot>
    {/each}
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
            class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >Report abuse</a>
        {/if}
      </div>
    {/if}
  </aside>
</article>
