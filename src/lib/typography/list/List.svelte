<script lang="ts">
  import { setContext } from 'svelte';
  import { type ListProps as Props, list } from './index';

  let { children, tag = 'ul', position = 'inside', ctxClass, class: className, ...restProps }: Props = $props();

  let contextClass = $state(ctxClass || '');

  setContext('ctxClass', () => contextClass);

  $effect(() => {
    contextClass = ctxClass || '';
  });

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
@prop ctxClass
@prop class: className
@prop ...restProps
-->
