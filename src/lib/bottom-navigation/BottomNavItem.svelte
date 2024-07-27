<script lang="ts">
  import { getContext } from 'svelte';
  import {
    type BottomNavItemProps as Props,
    type BottomNavContextType,
    type BottomNavVariantType,
    bottomNavItemVariants,
    bottomNavItemSpanVariants
  } from './index';
  import { twMerge } from 'tailwind-merge';
  import { page } from '$app/stores';

  let {
    children,
    btnName,
    appBtnPosition = 'middle',
    target,
    activeClass,
    href = '',
    exact = true,
    btnClass,
    spanClass,
    ...attributes
  }: Props = $props();

  const navType: BottomNavVariantType = getContext('navType');
  const context = getContext<BottomNavContextType>('bottomNavType') ?? {};

  let currentUrl = $state($page.url.pathname);
  let active: boolean = $state(false);
  let btnCls: string = $state('');
  let spanCls: string = $state('');
  $effect(() => {
    currentUrl = $page.url.pathname;
    active = href === currentUrl;

    btnCls = twMerge(
      bottomNavItemVariants({ navType, appBtnPosition, active }),
      active && (activeClass ?? context.activeClass),
      btnClass
    );

    spanCls = twMerge(
      bottomNavItemSpanVariants({ navType, active }),
      active && (activeClass ?? context.activeClass),
      spanClass
    );
  });
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  aria-label={btnName}
  {href}
  {target}
  role={href ? 'link' : 'button'}
  {...attributes}
  class={btnCls}
>
  {@render children()}
  <span class={spanCls}>{btnName}</span>
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop btnName
@prop appBtnPosition = 'middle'
@prop target
@prop activeClass
@prop href = ''
@prop exact = true
@prop btnClass
@prop spanClass
@prop ...attributes
-->
