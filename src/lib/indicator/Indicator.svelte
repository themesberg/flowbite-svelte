<script lang="ts">
  import { indicator, type IndicatorProps as Props } from './index';

  let { children, color = 'primary', cornerStyle = 'circular', size = 'md', border = false, placement, offset = true, class: className, ...restProps }: Props = $props();

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
@props: children: any;
@props:color: any = 'primary';
@props:cornerStyle: any = 'circular';
@props:size: any = 'md';
@props:border: any = false;
@props:placement: any;
@props:offset: any = true;
@props:class: any;
-->
