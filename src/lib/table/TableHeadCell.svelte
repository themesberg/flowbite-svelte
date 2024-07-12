<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children?: Snippet;
    class?: string | undefined | null;
    padding?: string | undefined | null;
    colspan?: number;
    rowspan?: number;
  }
  let {
    children,
    class: className,
    padding = '',
    colspan,
    rowspan,
    ...attributes
  }: Props = $props();
</script>

<th {...attributes} {colspan} {rowspan} class={twMerge('px-6 py-3',padding, className)}>
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
@prop padding = ''
@prop colspan
@prop rowspan
@prop ...attributes
-->
