<script lang="ts">
  import { indicator, type IndicatorProps as Props } from "./index";

  let { children, color = "primary", cornerStyle = "circular", size = "md", border = false, placement, offset = true, class: className, ...restProps }: Props = $props();

  let hasChildren = !!children;
  const { base } = $derived(
    indicator({
      color,
      size,
      cornerStyle,
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
@props: children: Snippet;
@props:color: VariantProps<typeof indicator>['color'] = 'primary';
@props:cornerStyle: 'rounded' | 'circular' = 'circular';
@props:size: VariantProps<typeof indicator>['size'] = 'md';
@props:border: boolean = false;
@props:placement: VariantProps<typeof indicator>['placement'] | undefined;
@props:offset: boolean = true;
@props:class: string;
-->
