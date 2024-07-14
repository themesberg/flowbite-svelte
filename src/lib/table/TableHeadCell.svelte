<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLThAttributes } from 'svelte/elements';

  interface Props extends HTMLThAttributes{
    children?: Snippet;
    class?: string | undefined | null;
  }
  let {
    children,
    class: className,
    ...attributes
  }: Props = $props();
</script>

<th {...attributes} class={twMerge('px-6 py-3', className)}>
  {#if children}
    {@render children()}
  {/if}
</th>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...attributes
-->
