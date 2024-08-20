<script lang="ts">
  import { setContext } from 'svelte';
  import { type ListProps as Props, list } from './index';

  let { children, tag = 'ul', position = 'inside', ctxclass = '', class: className, ...restProps }: Props = $props();

  setContext('ctxclass', ctxclass);

  let classList = $derived(list({ position, tag, className }));
</script>

<svelte:element this={tag} {...restProps} class={classList}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop tag = 'ul'
@prop position = 'inside'
@prop ctxclass = ''
@prop class: className
@prop ...restProps
-->
