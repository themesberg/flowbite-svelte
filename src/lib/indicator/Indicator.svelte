<script lang="ts">
  import { indicatorVariants, type IndicatorProps as Props } from './index'

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
  const { base } = indicatorVariants({ color, size, rounded, border, placement, offset, hasChildren });

</script>

<div class={base({ className })} {...attributes}>
  {#if children}
    {@render children()}
  {/if}
</div>

