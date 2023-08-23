<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let rounded: boolean = false;
  let svgClass: string = twMerge('text-gray-400 bg-gray-100 dark:bg-gray-600', rounded ? 'rounded' : 'rounded-full', $$props.class);
</script>

<svg class={svgClass} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let rounded: boolean = false;
-->
