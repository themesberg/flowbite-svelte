<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props {
    children?: Snippet;
    class?: string | undefined;
  }
  let { children, class: className, ...attributes }: Props = $props();
</script>

<tbody class={className} {...attributes}>
  {#if children}
    {@render children()}
  {/if}
</tbody>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...attributes
-->
