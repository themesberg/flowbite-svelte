<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children?: Snippet;
    markclass?: string | undefined;
  }

  let { children, markclass, ...attributes }: Props = $props();
  let markCls: string = 'text-white dark:bg-blue-500 bg-blue-600 px-2 rounded';
</script>

<mark {...attributes} class={twMerge(markCls, markclass)}>
  {#if children}
  {@render children()}
  {/if}
</mark>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:markclass?: string | undefined;
-->
