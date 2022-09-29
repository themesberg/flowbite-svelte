<script lang="ts">
  import classNames from 'classnames';
  import { getContext, setContext } from 'svelte';
  export let size: 'sm' | 'md' | 'lg' = 'md';

  // tinted if put in component having its own background
  let background: boolean = getContext('background');

  const borderClasses = {
    base: 'border-gray-300 dark:border-gray-600',
    tinted: 'border-gray-300 dark:border-gray-500',
    green: 'border-green-500 dark:border-green-400',
    red: 'border-red-500 dark:border-red-400'
  };

  const textSizes = { sm: 'sm:text-xs', md: 'text-sm', lg: 'sm:text-base' };
  const prefixPadding = { sm: 'px-2', md: 'px-3', lg: 'px-4' };

  $: prefixClass = classNames(
    textSizes[size],
    prefixPadding[size],
    background ? borderClasses['tinted'] : borderClasses['base'],
    'text-gray-500 bg-gray-200',
    background ? 'dark:bg-gray-500 dark:text-gray-300' : 'dark:bg-gray-600 dark:text-gray-400',
    'inline-flex items-center rounded-l-md border border-r-0'
  );
</script>

<div class={prefixClass}>
  <slot />
</div>
