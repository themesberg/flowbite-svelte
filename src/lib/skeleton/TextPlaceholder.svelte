<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  interface Props {
    size?: keyof Sizes;
    divclass?: string | undefined;
  }
  interface Sizes {
    [key: string]: string;
  }

  const sizes: Sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    xxl: 'max-w-2xl'
  };

  let { size = 'sm', divclass }: Props = $props();
  let outDivcls = twMerge(sizes[size], 'space-y-2.5 animate-pulse', divclass);
</script>

<div role="status" class={outDivcls}>
  <div class="flex w-full items-center space-x-2 rtl:space-x-reverse">
    <div class="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
    <div class="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
    <div class="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
  </div>
  <div class="flex w-11/12 items-center space-x-2 rtl:space-x-reverse">
    <div class="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
    <div class="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
    <div class="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
  </div>
  <div class="flex w-9/12 items-center space-x-2 rtl:space-x-reverse">
    <div class="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
    <div class="h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700" />
    <div class="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
  </div>
  <div class="flex w-11/12 items-center space-x-2 rtl:space-x-reverse">
    <div class="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
    <div class="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
    <div class="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
  </div>
  <div class="flex w-10/12 items-center space-x-2 rtl:space-x-reverse">
    <div class="h-2.5 w-32 rounded-full bg-gray-300 dark:bg-gray-600" />
    <div class="h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
    <div class="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
  </div>
  <div class="flex w-8/12 items-center space-x-2 rtl:space-x-reverse">
    <div class="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
    <div class="h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700" />
    <div class="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600" />
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: size?:  keyof Sizes; = 'sm', divclass;
@props:divclass?: string | undefined;
-->
