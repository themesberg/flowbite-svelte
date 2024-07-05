<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children: Snippet;
    id?: string;
    class?: string;
    color?: 'gray' | 'green' | 'red' | 'disabled';
  }
  let { children, id, class: className, color = 'gray', ...attributes }: Props = $props();
  const colorClasses = {
    gray: 'text-gray-900 dark:text-gray-300',
    green: 'text-green-700 dark:text-green-500',
    red: 'text-red-700 dark:text-red-500',
    disabled: 'text-gray-400 dark:text-gray-500'
  };
</script>


  <p
    {...attributes}
    {id}
    class={twMerge(
      'text-xs font-normal text-gray-500 dark:text-gray-300',
      colorClasses[color],
      className
    )}
  >
    {@render children()}
  </p>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop id
@prop class
@prop color = 'gray'
@prop ...attributes
-->
