<script lang="ts">
  import type { HTMLOlAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';

  interface $$Props extends HTMLOlAttributes {
    order?: 'default' | 'vertical' | 'horizontal' | 'activity' | 'group';
  }

  export let order: NonNullable<$$Props['order']> = 'default';

  setContext('order', order);
  let olClasses = {
    group: 'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700',
    horizontal: 'sm:flex',
    activity: 'relative border-s border-gray-200 dark:border-gray-700',
    vertical: 'relative border-s border-gray-200 dark:border-gray-700',
    default: 'relative border-s border-gray-200 dark:border-gray-700'
  };
</script>

<ol {...$$restProps} class={twMerge(olClasses[order], $$props.class)} >
  <slot />
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let order: NonNullable<$$Props['order']> = 'default';
-->
