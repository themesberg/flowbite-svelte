<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import type { SidebarType } from '$lib/types';
  import { page } from '$app/stores';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends HTMLAnchorAttributes {
    iconSlot?: Snippet;
    subtext?: Snippet;
    label?: string;
    spanClass?: string;
    activeClass?: string;
    nonActiveClass?: string;
    aClass?: string;
  }

  let { iconSlot, subtext, href, label, spanClass = 'ms-3', activeClass, nonActiveClass, aClass, class: className, ...restProps }: Props = $props();

  const context = getContext<SidebarType>('sidebarContext') ?? {};
  let currentUrl = $state();

  $effect(() => {
    currentUrl = $page.url.pathname;
  });

  let aCls = $derived(currentUrl === href ? (activeClass ?? context.activeClass) : (nonActiveClass ?? context.nonActiveClass));
</script>

<li class={className}>
  <a {...restProps} {href} aria-current={currentUrl === href} class={twMerge(aCls, aClass)}>
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
@prop iconSlot
@prop subtext
@prop href
@prop label
@prop spanClass = 'ms-3'
@prop activeClass
@prop nonActiveClass
@prop aClass
@prop class: className
@prop ...restProps
-->
