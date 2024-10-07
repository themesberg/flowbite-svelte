<script lang="ts">
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';
  import { type ToolbarGroupProps as Props, toolbarGroup } from './';

  let { children, spacing = 'default', padding = 'default', position = 'middle', class: className, divClass = 'flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 sm:ps-4 first:sm:ps-0 last:sm:pe-0', ...restProps }: Props = $props();

  const groupClass = $derived(toolbarGroup({ spacing, padding, position, class: className }));

  const options: Writable<boolean> = getContext('toolbar');
  if (options) $options = true;
</script>

<div class={groupClass} {...restProps}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: type Snippet } from 'svelte';
import { toolbar, toolbarGroup, toolbarButton };
@props:spacing: VariantProps<typeof toolbarGroup>['spacing'] = 'default';
@props:padding: VariantProps<typeof toolbarGroup>['padding'] = 'default';
@props:position: VariantProps<typeof toolbarGroup>['position'] = 'middle';
@props:class: string;
@props:divClass: string = 'flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 sm:ps-4 first:sm:ps-0 last:sm:pe-0';
-->
