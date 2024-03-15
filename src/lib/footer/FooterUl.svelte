<script lang="ts">
  interface Props {
    children?: any;
    ulclass?: string | undefined;
  }

  import { twMerge } from 'tailwind-merge';

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
@props: children?: any;
@props:ulclass?: string | undefined;
-->
