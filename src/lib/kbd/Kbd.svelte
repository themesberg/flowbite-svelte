<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children?: Snippet;
    kbdclass: string;
  }

  let { children, kbdclass }: Props = $props();
  let kbdCls: string = 'text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500';
</script>

{#if children}
<kbd class={twMerge(kbdCls, kbdclass)}>
  {@render children()}
</kbd>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:kbdclass: string;
-->
