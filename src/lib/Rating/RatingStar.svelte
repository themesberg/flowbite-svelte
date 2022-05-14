<script lang="ts">
  import classNames from 'classnames';
  import { getContext, SvelteComponent } from 'svelte';
  import { HiStarSolid } from 'svelte-icons/hi';

  export let filled: boolean = true;
  export let starIcon: typeof SvelteComponent = HiStarSolid;

  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10',
  };

  const size = getContext<'sm' | 'md' | 'lg'>('size');
</script>

<svelte:component
  this={starIcon}
  class={classNames(sizeClasses[size], {
    'text-yellow-400': filled,
    'text-gray-300 dark:text-gray-500': !filled,
  })}
  data-testid="rating-star"
/>
