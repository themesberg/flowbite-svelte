<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children?: Snippet;
    class?: string;
    padding?: string;
  }
  let {
    children,
    class: className,
    padding = '',
    ...attributes
  }: Props = $props();
</script>

<th {...attributes} class={twMerge('px-6 py-3',padding, className)}>
  {#if children}
    {@render children()}
  {/if}
</th>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:class?: string;
@props:padding?:  string; = '';
-->
