<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement>{
    children: Snippet;
    class?: string | undefined;
  }

  let {
    children,
    class: className,
    ...attributes
  }: Props = $props();

  let classDiv = twMerge('grid grid-cols-1 sm:grid-cols-2', className);
</script>

<div {...attributes} class={classDiv}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...attributes
-->
