<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let rounded: boolean = false;
  export let border: boolean = false;
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20',
    xl: 'w-36 h-36'
  };

  const borderedSizes = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-16 h-16',
    xl: 'w-32 h-32'
  };

  let svgClass: string = twMerge('text-gray-400 bg-gray-100 dark:bg-gray-600', rounded ? 'rounded' : 'rounded-full', border ? borderedSizes[size] : sizes[size], $$props.class);
</script>

<svg class={svgClass} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let rounded: boolean = false;
@prop export let border: boolean = false;
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
-->
