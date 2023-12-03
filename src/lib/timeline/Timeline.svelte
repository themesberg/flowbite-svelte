<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';
  export let order: 'default' | 'vertical' | 'horizontal' | 'activity' | 'group' = 'default';

  setContext('order', order);
  let olClasses = {
    group: 'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700',
    horizontal: 'sm:flex',
    activity: 'relative border-s border-gray-200 dark:border-gray-700',
    vertical: 'relative border-s border-gray-200 dark:border-gray-700',
    default: 'relative border-s border-gray-200 dark:border-gray-700'
  };
</script>

<ol class={twMerge(olClasses[order], $$props.class)}>
  <slot />
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let order: 'default' | 'vertical' | 'horizontal' | 'activity' | 'group' = 'default';
-->
