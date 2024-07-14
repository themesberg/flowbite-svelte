<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLUListElement>{
    children: Snippet;
    class?: string | undefined;
  }

  let { class:ulClass, children, ...attributes }: Props = $props();
</script>


  <ul
    {...attributes}
    class={twMerge('text-gray-600 dark:text-gray-400', ulClass)}
  >
    {@render children()}
  </ul>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop class:ulClass
@prop children
@prop ...attributes
-->
