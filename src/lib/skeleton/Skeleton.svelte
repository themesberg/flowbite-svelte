<script lang="ts">
    import { twMerge } from 'tailwind-merge';
  
    interface Sizes {
      [key: string]: string;
    }
  
    interface Props{
        size?:keyof Sizes;
        class?: string | undefined;
    }
    const sizes: Sizes = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      xxl: 'max-w-2xl'
    };
  
    let { size = 'sm', class:classname} = $props<Props>();
    let outDivclass = $state(twMerge(sizes[size], 'animate-pulse', classname));
  </script>
  
  <div role="status" class={outDivclass}>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12 mb-2.5" />
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12 mb-2.5" />
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5" />
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12" />
    <span class="sr-only">Loading...</span>
  </div>