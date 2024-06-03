<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  interface Sizes {
    [key: string]: string;
  }

  interface Props {
    size?: keyof Sizes;
    divclass?: string | undefined;
  }
  const sizes: Sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    xxl: 'max-w-2xl'
  };

  let { size = 'sm', divclass }: Props = $props();
  let outDivcls = $state(twMerge(sizes[size], 'animate-pulse', divclass));
</script>

<div role="status" class={outDivcls}>
  <div class="mb-4 h-2.5 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
  <div class="mb-2.5 h-2 w-9/12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
  <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
  <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
  <div class="mb-2.5 h-2 w-10/12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
  <div class="mb-2.5 h-2 w-11/12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
  <div class="h-2 w-9/12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop size = 'sm'
@prop divclass
-->
