<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children: Snippet;
    color?: string;
    secondaryClass?: string;
    class?: string;
  }
  let { children, color = 'text-gray-500 dark:text-gray-400', secondaryClass = 'font-semibold', class: className, ...attributes }: Props = $props();
</script>

<small {...attributes} class={twMerge(color, secondaryClass, className)}>
  {@render children()}
</small>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop color = 'text-gray-500 dark:text-gray-400'
@prop secondaryClass = 'font-semibold'
@prop class: className
@prop ...attributes
-->
