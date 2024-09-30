<script lang="ts">
  import { twMerge } from 'tailwind-merge';

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

  interface $$Props {
    divClass?: string;
    size?: keyof Sizes;
  }

  export let divClass: $$Props['divClass'] = 'animate-pulse';
  export let size: NonNullable<$$Props['size']> = 'sm';
  $: outDivclass = twMerge(sizes[size], divClass, $$props.class);
</script>

<div role="status" class={outDivclass}>
  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12 mb-2.5"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12 mb-2.5"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12"></div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: $$Props['divClass'] = 'animate-pulse';
@prop export let size: NonNullable<$$Props['size']> = 'sm';
-->
