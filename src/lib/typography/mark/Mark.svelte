<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type MarkProps as Props, mark } from './index';

  let { children, class: className, ...restProps }: Props = $props();
</script>

<mark {...restProps} class={twMerge(mark(), className)}>
  {@render children()}
</mark>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
