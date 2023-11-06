<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let footerType: 'sitemap' | 'default' | 'logo' | 'socialmedia' | undefined = 'default';

  const types = {
    sitemap: 'bg-gray-800',
    socialmedia: 'p-4 bg-white sm:p-6 dark:bg-gray-800',
    logo: 'p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800',
    default: 'p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'
  };
</script>

<footer {...$$restProps} class={twMerge(footerType && types[footerType], $$props.class)}>
  <slot />
</footer>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let footerType: 'sitemap' | 'default' | 'logo' | 'socialmedia' | undefined = undefined;
-->
