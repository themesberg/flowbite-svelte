<script lang="ts">
  import { type AnchorProps as Props, anchor } from './index';

  let { children, color = 'primary', class: className, ...restProps }: Props = $props();
  let linkClass = $derived(anchor({ color, className }));
</script>

<a {...restProps} class={linkClass}>
  {@render children()}
</a>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop color = 'primary'
@prop class: className
@prop ...restProps
-->
