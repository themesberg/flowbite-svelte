<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children: Snippet;
    ulclass?: string | undefined;
    borderClass?: string | undefined;
    border?: boolean;
  }

  let {
    children,
    ulclass,
    borderClass,
    border = false,
    ...attributes
  }: Props = $props();

  let ulCls: string = $state(twMerge('space-y-2', ulclass));
  let borderCls: string = twMerge(
    'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700',
    borderClass
  );
</script>

<ul {...attributes} class={border ? borderCls : ulCls}>

    {@render children()}

</ul>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop ulclass
@prop borderClass
@prop border = false
@prop ...attributes
-->
