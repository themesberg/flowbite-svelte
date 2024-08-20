<script lang="ts">
  import { type LayoutProps as Props, layout } from './index';

  let { children, class: className, ...restProps }: Props = $props();

  let classDiv = $derived(layout({ className }));
</script>

<div {...restProps} class={classDiv}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
