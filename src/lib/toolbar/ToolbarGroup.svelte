<script lang="ts">
  // import { twMerge } from 'tailwind-merge';
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';
  import { type ToolbarGroupProps as Props, toolbarGroup } from './';


  let { children, spacing = 'default', padding = 'default', position = 'middle', class: className, divClass = 'flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 sm:ps-4 first:sm:ps-0 last:sm:pe-0', ...restProps }: Props = $props();

  const groupClass = $derived(toolbarGroup({ spacing, padding, position,class: className }));

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
@prop children
@prop class: className
@prop divClass = 'flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 sm:ps-4 first:sm:ps-0 last:sm:pe-0'
@prop ...restProps
-->
