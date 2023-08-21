<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let kbdClass: string = 'text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500';
</script>

<kbd class={twMerge(kbdClass, $$props.class)}>
  <slot />
</kbd>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let kbdClass: string = 'text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500';
-->
