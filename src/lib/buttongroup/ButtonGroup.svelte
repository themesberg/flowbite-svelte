<script lang="ts">
  import { setContext } from 'svelte';
  import { type ButtonGroupProps as Props, buttonGroup } from './index';

  let { children, size = 'md', class: className, ...restProps }: Props = $props();

  let groupClass = $derived(buttonGroup({ size, className }));
  setContext('group', size);
</script>

<div {...restProps} class={groupClass} role="group">
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop size = 'md'
@prop class: className
@prop ...restProps
-->
