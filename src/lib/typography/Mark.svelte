<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement>{
    children: Snippet;
    markClass?: string | undefined;
    class?: string | undefined;
  }

  let { 
    children, 
    markClass = 'text-white dark:bg-blue-500 bg-blue-600 px-2 rounded',
    class: className, ...attributes 
  }: Props = $props();
  
</script>

<mark {...attributes} class={twMerge(markClass, className)}>
  {@render children()}
</mark>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop markClass = 'text-white dark:bg-blue-500 bg-blue-600 px-2 rounded'
@prop class: className
@prop ...attributes
-->
