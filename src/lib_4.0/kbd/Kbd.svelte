<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    kbdClass?: string;
  }

  export let kbdClass: $$Props['kbdClass'] = 'text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500';
</script>

<kbd class={twMerge(kbdClass, $$props.class)}>
  <slot />
</kbd>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let kbdClass: $$Props['kbdClass'] = 'text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500';
-->
