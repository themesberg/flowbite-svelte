<script lang="ts">
  import { type ActivityProps as Props, activity } from './index';

  let { children, class: className, ...restProps }: Props = $props();
  const base = activity({ class: className });
</script>

<ol class={base} {...restProps}>
  {@render children()}
</ol>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
