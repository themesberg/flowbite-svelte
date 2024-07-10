<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children: Snippet;
    footerType?: 'sitemap' | 'default' | 'logo' | 'socialmedia' | undefined;
    class?: string | undefined;
  }

  let {
    children,
    footerType = 'default',
    class: footerclass,
    ...attributes
  }: Props = $props();

  let footerCls = twMerge(
    footerType === 'sitemap' && 'bg-gray-800',
    footerType === 'socialmedia' && 'p-4 bg-white sm:p-6 dark:bg-gray-800',
    footerType === 'logo' &&
      'p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800',
    footerType === 'default' &&
      'p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800',
    footerclass
  );
</script>

<footer {...attributes} class={footerCls}>
    {@render children()}
</footer>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop footerType = 'default'
@prop class: footerclass
@prop ...attributes
-->
