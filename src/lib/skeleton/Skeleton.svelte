<script lang="ts">
  import { skeleton, type SkeletonProps as Props } from './index';
  let { size = 'sm', class: className, ...restProps }: Props = $props();
  const { wrapper, line } = $derived(skeleton({ size }));
</script>

<div role="status" class={wrapper({ className })} {...restProps}>
  <div class={line({ class: 'mb-4 h-2.5 w-1/2' })}></div>
  <div class={line({ class: 'mb-2.5 h-2 w-9/12' })}></div>
  <div class={line({ class: 'mb-2.5 h-2' })}></div>
  <div class={line({ class: 'mb-2.5 h-2' })}></div>
  <div class={line({ class: 'mb-2.5 h-2 w-10/12' })}></div>
  <div class={line({ class: 'mb-2.5 h-2 w-11/12' })}></div>
  <div class={line({ class: 'h-2 w-9/12' })}></div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop size = 'sm'
@prop class: className
@prop ...restProps
-->
