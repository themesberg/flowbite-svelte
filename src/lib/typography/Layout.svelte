<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    divclass?: string | undefined;
    cols?: string | undefined;
    // gap?: number;
  }

  let {
    children,
    divclass,
    cols = '',
    ...attributes
  }: Props = $props();

  let classDiv = twMerge('grid grid-cols-1 sm:grid-cols-2', cols, divclass);
</script>

<div {...attributes} class={classDiv}>
  
    {@render children()}
  
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop divclass
@prop cols = ''
@prop ...attributes
-->
