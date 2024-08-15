<script lang="ts">
  import { setContext } from 'svelte';
  import { type TimelineProps as Props, timeline } from '.';

  let {
    children,
    order = 'default',
    class: className,
    ...attributes
  }: Props = $props();

  setContext('order', order);
  const olCls = $derived(timeline({ order, className }));
</script>

<ol class={olCls} {...attributes}>
  {@render children()}
</ol>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop order = 'default'
@prop class: className
@prop ...attributes
-->
