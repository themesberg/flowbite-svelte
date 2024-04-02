<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props {
    children?: Snippet;
    class?: string | undefined;
  }
  import { twMerge } from 'tailwind-merge';
  let { children, class: classname }: Props = $props();
</script>

<div
  class={twMerge(
    'mx-auto max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r p-6 dark:border-gray-600 dark:bg-gray-900',
    classname
  )}
>
  {@render children()}
</div>
