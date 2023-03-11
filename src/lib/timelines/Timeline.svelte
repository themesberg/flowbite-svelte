<script lang="ts">
  import { setContext } from 'svelte';
  export let customClass: string = '';
  export let order: 'default' | 'vertical' | 'horizontal' | 'activity' | 'group' | 'custom' = 'default';

  setContext('order', order);
  let olClasses = {
    group: 'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700',
    horizontal: 'sm:flex',
    activity: 'relative border-l border-gray-200 dark:border-gray-700',
    vertical: 'relative border-l border-gray-200 dark:border-gray-700',
    default: 'relative border-l border-gray-200 dark:border-gray-700',
    custom: customClass
  };
</script>

<ol class={olClasses[order]}>
  <slot />
</ol>
