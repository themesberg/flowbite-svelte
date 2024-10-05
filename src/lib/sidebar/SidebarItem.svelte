<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import { page } from '$app/stores';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { type SidebarCtxType } from './';

  interface Props extends HTMLAnchorAttributes {
    iconSlot?: Snippet;
    subtext?: Snippet;
    label?: string;
    spanClass?: string;
    activeClass?: string;
    nonActiveClass?: string;
    aClass?: string;
    active?: boolean;
  }

  let { iconSlot, subtext, href, label, spanClass = 'ms-3', activeClass, nonActiveClass, aClass, active, class: className, ...restProps }: Props = $props();

  const context = getContext<SidebarCtxType>('sidebarContext') ?? {};
  let currentUrl = $state();

  $effect(() => {
    currentUrl = $page.url.pathname;
  });

  let aCls = $derived((active ?? currentUrl === href) ? (activeClass ?? context.activeClass) : (nonActiveClass ?? context.nonActiveClass));
</script>

<li class={className}>
  <a onclick={context.closeSidebar} {...restProps} {href} aria-current={active ?? currentUrl === href} class={twMerge(aCls, aClass)}>
    {#if iconSlot}
      {@render iconSlot()}
    {/if}
    <span class={spanClass}>{label}</span>
    {#if subtext}
      {@render subtext()}
    {/if}
  </a>
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: iconSlot: any;
@props:subtext: any;
@props:href: any;
@props:label: any;
@props:spanClass: any = 'ms-3';
@props:activeClass: any;
@props:nonActiveClass: any;
@props:aClass: any;
@props:active: any;
@props:class: string;
-->
