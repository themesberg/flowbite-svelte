<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import { type LiProps as Props } from './index';

  let { children, icon, class: className, ...attributes }: Props = $props();
  const ctxclass: string = getContext('ctxclass');
  let liCls = twMerge(ctxclass, icon && 'flex items-center', className);
</script>

<li {...attributes} class={liCls}>
  {@render children()}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop icon
@prop class: className
@prop ...attributes
-->
