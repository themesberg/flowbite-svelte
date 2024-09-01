<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import { type LiProps as Props } from './index';

  let { children, icon, class: className, ...restProps }: Props = $props();

  const getCtxClass = getContext<() => string>('ctxClass');

  let liCls = $derived(twMerge(getCtxClass(), icon && 'flex items-center', className));
</script>

<li {...restProps} class={liCls}>
  {@render children()}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop icon
@prop class: className
@prop ...restProps
-->
