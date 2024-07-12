<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLParagraphElement> {
    children: Snippet;
    class?: string;
    color?: 'gray' | 'green' | 'red' | 'disabled';
  }
  let { children, class: className, color = 'gray', ...attributes }: Props = $props();
  const colorClasses = {
    gray: 'text-gray-900 dark:text-gray-300',
    green: 'text-green-700 dark:text-green-500',
    red: 'text-red-700 dark:text-red-500',
    disabled: 'text-gray-400 dark:text-gray-500'
  };
</script>
  <p
    {...attributes}
    class={twMerge(
      'text-xs font-normal text-gray-500 dark:text-gray-300',
      colorClasses[color],
      className
    )}
  >
    {@render children()}
  </p>
