<script lang="ts">
  interface Props {
    divClass?: string | undefined;
  }

  import { twMerge } from 'tailwind-merge';
  let { divClass, ...attributes }: Props = $props();
</script>

<div
  {...attributes}
  class={twMerge('my-1 h-px bg-gray-100 dark:bg-gray-500', divClass)}
  ></div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop divClass
@prop ...attributes
-->
