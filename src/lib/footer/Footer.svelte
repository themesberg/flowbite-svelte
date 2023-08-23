<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let footerType: 'sitemap' | 'default' | 'logo' | 'socialmedia' = 'default';

  let footerClass = twMerge(footerType === 'sitemap' && 'bg-gray-800', footerType === 'socialmedia' && 'p-4 bg-white sm:p-6 dark:bg-gray-800', footerType === 'logo' && 'p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800', footerType === 'default' && 'p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800', $$props.class);
</script>

<footer {...$$restProps} class={footerClass}>
  <slot />
</footer>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let footerType: 'sitemap' | 'default' | 'logo' | 'socialmedia' = 'default';
-->
