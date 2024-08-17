<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type SecondaryProps as Props, secondary } from './index';

  let { children, class: className, ...restProps }: Props = $props();
</script>

<small {...restProps} class={twMerge(secondary(), className)}>
  {@render children()}
</small>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
