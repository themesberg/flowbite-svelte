<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import type { SidebarType } from '$lib/types';
  import { page } from '$app/stores';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    iconSlot?: Snippet;
    subtext?: Snippet;
    onclick?: () => void;
    href?: string ;
    label?: string ;
    spanclass?: string ;
    activeClass?: string ;
    nonActiveClass?: string ;
    aclass?: string;
  }

  let {
    iconSlot,
    subtext,
    onclick,
    href,
    label,
    spanclass,
    activeClass,
    nonActiveClass,
    aclass,
    ...attributes
  }: Props = $props();
  
  const context = getContext<SidebarType>('sidebarContext') ?? {};
  let currentUrl = $state();
  let spanCls: string = twMerge('ms-3', spanclass);

  $effect(() => {
    currentUrl = $page.url.pathname;
  });

  let aCls = $derived(
    currentUrl === href
      ? activeClass ?? context.activeClass
      : nonActiveClass ?? context.nonActiveClass
  );
  // $inspect('aCls', aCls)
</script>

<li>
  <a {...attributes} {onclick} {href} aria-current={currentUrl === href} class={twMerge(aCls, aclass)}>
    {#if iconSlot}
      {@render iconSlot()}
    {/if}
    <span class={spanCls}>{label}</span>
    {#if subtext}
      {@render subtext()}
    {/if}
  </a>
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: iconSlot?: Snippet;
@props:subtext?: Snippet;
@props:onclick?: () => void;
@props:href?: string ;
@props:label?: string ;
@props:spanclass?: string ;
@props:activeClass?: string ;
@props:nonActiveClass?: string ;
@props:aclass?: string;
-->
