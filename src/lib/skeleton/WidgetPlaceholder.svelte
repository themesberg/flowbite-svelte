<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let divClass: string =
    'p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700';
</script>

<div role="status" class={twMerge(divClass, $$props.class)}>
  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5" />
  <div class="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
  <div class="flex items-baseline mt-4 space-x-6">
    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
    <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
    <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
    <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
    <div class="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
    <div class="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
  @component
  ## Features
  [Go to Skeleton Widget Placeholder](https://flowbite-svelte.com/docs/components/skeleton#Widget_placeholder)
  ## Props
  @prop divClass: string = 'p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700';
  ## Example
  ```
  <script>
    import { WidgetPlaceholder } from 'flowbite-svelte'
  </script>

  <WidgetPlaceholder />
  ```
-->
