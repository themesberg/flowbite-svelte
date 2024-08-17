<script lang="ts">
  import { indicator, type IndicatorProps as Props } from './index';

  let {
    children,
    color = 'primary',
    rounded = false,
    size = 'md',
    border = false,
    placement,
    offset = true,
    class: className,
    ...restProps
  }: Props = $props();

  let hasChildren = !!children;
  const { base } = $derived(
    indicator({
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

<div class={base({ className })} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop color = 'primary'
@prop rounded = false
@prop size = 'md'
@prop border = false
@prop placement
@prop offset = true
@prop class: className
@prop ...restProps
-->
