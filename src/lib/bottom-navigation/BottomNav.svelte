<script lang="ts">
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import {
    type BottomNavProps as Props,
    type BottomNavContextType,
    bottomNav
  } from './index';

  let {
    children,
    header,
    position = 'fixed',
    navType = 'default',
    outerClass,
    innerClass,
    activeClass,
    ...restProps
  }: Props = $props();

  const activeCls = twMerge(
    'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900',
    activeClass
  );

  setContext('navType', navType);
  setContext<BottomNavContextType>('bottomNavType', { activeClass: activeCls });

  $inspect('position: ', position);
  const { outer, inner } = bottomNav({ position, navType });
  const outerCls = $derived(outer({ class: outerClass }));
  const innerCls = $derived(inner({ class: innerClass }));
</script>

<div {...restProps} class={outerCls}>
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
@prop ...restProps
-->
