<script lang="ts">
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import {
    outerDivVariants,
    innerDivVariants,
    type BottomNavProps as Props,
    type BottomNavContextType
  } from './index';

  let {
    children,
    header,
    position = 'fixed',
    navType = 'default',
    outerClass,
    innerClass,
    activeClass,
    ...attributes
  }: Props = $props();

  const activeCls = twMerge(
    'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900',
    activeClass
  );

  setContext('navType', navType);
  setContext<BottomNavContextType>('bottomNavType', { activeClass: activeCls });

  $inspect('position: ', position);
  const outerCls = twMerge(outerDivVariants({ position, navType }), outerClass);
  const innerCls = twMerge(innerDivVariants({ navType }), innerClass);
</script>

<div {...attributes} class={outerCls}>
  {#if header}
    {@render header()}
  {/if}

  <div class={innerCls}>
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop header
@prop position = 'fixed'
@prop navType = 'default'
@prop outerClass
@prop innerClass
@prop activeClass
@prop ...attributes
-->
