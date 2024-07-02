<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    divClass?: string | undefined;
    cols?: string | undefined;
    // gap?: number;
  }

  let {
    children,
    divClass,
    cols = '',
    ...attributes
  }: Props = $props();

  let classDiv = twMerge('grid grid-cols-1 sm:grid-cols-2', cols, divClass);
</script>

<div {...attributes} class={classDiv}>
  
    {@render children()}
  
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop divClass
@prop cols = ''
@prop ...attributes
-->
