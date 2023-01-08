<script lang="ts">
  import Star from './Star.svelte';
  import classNames from 'classnames';

  export let divClass: string = 'flex items-center';
  export let size: string = '24';
  export let total: number = 5;
  export let rating: number = 4;
  // default is floor
  export let ceil: boolean = false;
  export let count: boolean = false;

  let roundedRating: number = ceil ? Math.ceil(rating) : Math.floor(rating);
  let grayStars: number = total - roundedRating;
</script>

<div class={classNames(divClass, $$props.class)}>
  {#if count}
    <Star variation="solid" {size} class="text-yellow-300 dark:text-yellow-200" />
    <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>
    <slot />
  {:else}
    {#each Array(roundedRating) as _}
      <slot name="ratingUp">
        <Star variation="solid" {size} class="text-yellow-300 dark:text-yellow-200" />
      </slot>
    {/each}
    {#each Array(grayStars) as _}
      <slot name="ratingDown">
        <Star {size} class="text-gray-300 dark:text-gray-500" />
      </slot>
    {/each}
    {#if $$slots.text}
      <slot name="text" />
    {/if}
  {/if}
</div>
