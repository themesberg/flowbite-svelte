<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    class?: string | undefined;
  }

  let { children, class: className, ...attributes }: Props = $props();
  let markCls: string = 'text-white dark:bg-blue-500 bg-blue-600 px-2 rounded';
</script>

<mark {...attributes} class={twMerge(markCls, className)}>
 
    {@render children()}

</mark>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...attributes
-->
