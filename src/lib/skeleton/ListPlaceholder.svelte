<script lang="ts">
  interface Props {
    divclass?: string | undefined;
  }
  import { twMerge } from 'tailwind-merge';
  let { divclass } = $props<Props>();
  let divCls: string = twMerge('p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700', divclass);
</script>

<div role="status" class={divCls}>
  <div class="flex items-center justify-between">
    <div>
      <div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
      <div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
    </div>
    <div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
  </div>
  <div class="flex items-center justify-between pt-4">
    <div>
      <div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
      <div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
    </div>
    <div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
  </div>
  <div class="flex items-center justify-between pt-4">
    <div>
      <div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
      <div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
    </div>
    <div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
  </div>
  <div class="flex items-center justify-between pt-4">
    <div>
      <div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
      <div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
    </div>
    <div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
  </div>
  <div class="flex items-center justify-between pt-4">
    <div>
      <div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
      <div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
    </div>
    <div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: divclass?: string | undefined;
-->
