<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children?: Snippet;
    divclass?: string | undefined;
    cols?: string | undefined;
    // gap?: number;
  }

  let { children, divclass, cols = 'grid-cols-1 sm:grid-cols-2', ...attributes }: Props = $props();

  let classDiv = twMerge('grid', cols, divclass);
</script>

<div {...attributes} class={classDiv}>
  {#if children}
  {@render children()}
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:divclass?: string | undefined;
@props:cols?: string | undefined;
@props:// gap?: number;
-->
