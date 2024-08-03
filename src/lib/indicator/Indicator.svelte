<script lang="ts">
  import { indicatorVariants, type IndicatorProps as Props } from './index';

  let {
    children,
    color = 'gray',
    rounded = false,
    size = 'md',
    border = false,
    placement,
    offset = true,
    class: className,
    ...attributes
  }: Props = $props();

  let hasChildren = !!children;
  const { base } = $derived(
    indicatorVariants({
      color,
      size,
      rounded,
      border,
      placement,
      offset,
      hasChildren
    })
  );
</script>

<div class={base({ className })} {...attributes}>
  {#if children}
    {@render children()}
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop color = 'gray'
@prop rounded = false
@prop size = 'md'
@prop border = false
@prop placement
@prop offset = true
@prop class: className
@prop ...attributes
-->
