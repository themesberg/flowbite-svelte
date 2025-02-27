<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    divClass?: string;
  }

  export let divClass: $$Props['divClass'] = 'p-4 max-w-sm rounded-sm border border-gray-200 shadow-sm animate-pulse md:p-6 dark:border-gray-700';
</script>

<div role="status" class={twMerge(divClass, $$props.class)}>
  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
  <div class="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
  <div class="flex items-baseline mt-4 space-x-6 rtl:space-x-reverse">
    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
    <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
    <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
    <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
    <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: $$Props['divClass'] = 'p-4 max-w-sm rounded-sm border border-gray-200 shadow-sm animate-pulse md:p-6 dark:border-gray-700';
-->
