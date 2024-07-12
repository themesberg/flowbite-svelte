<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement>{
    children: Snippet;
    secondaryClass?: string | undefined | null;
    class?: string | undefined | null;
  }
  let { 
    children,
    secondaryClass = 'text-gray-500 dark:text-gray-400 font-semibold',
    class: className, 
    ...attributes 
  }: Props = $props();
</script>

<small {...attributes} class={twMerge(secondaryClass, className)}>
  {@render children()}
</small>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop secondaryClass = 'text-gray-500 dark:text-gray-400 font-semibold'
@prop class: className
@prop ...attributes
-->
