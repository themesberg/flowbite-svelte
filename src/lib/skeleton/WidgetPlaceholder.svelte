<script lang="ts">
    interface Props{
        class?: string | undefined;
    }
    import { twMerge } from 'tailwind-merge';
    let { class: classname } = $props<Props>();
    let divClass: string = twMerge('p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700', classname);
  </script>
  
  <div role="status" class={divClass}>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5" />
    <div class="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
    <div class="flex items-baseline mt-4 space-x-6 rtl:space-x-reverse">
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