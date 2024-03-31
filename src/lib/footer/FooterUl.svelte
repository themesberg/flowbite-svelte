<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    ulclass?: string | undefined;
  }

  let { ulclass, children, ...attributes }: Props = $props();
</script>


  <ul
    {...attributes}
    class={twMerge('text-gray-600 dark:text-gray-400', ulclass)}
  >
    {@render children()}
  </ul>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:ulclass?: string | undefined;
-->
