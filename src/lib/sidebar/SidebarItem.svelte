<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import type { SidebarType } from '$lib/types';
  import { page } from '$app/stores';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    icon?: Snippet;
    subtext?: Snippet;
    href?: string | undefined;
    label?: string | undefined;
    spanclass?: string | undefined;
    activeClass?: string | undefined;
    nonActiveClass?: string | undefined;
  }

  let {
    icon,
    subtext,
    href,
    label,
    spanclass,
    activeClass,
    nonActiveClass,
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
  <a {...attributes} {href} aria-current={currentUrl === href} class={aCls}>
    {#if icon}
      {@render icon()}
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
@props: icon?: Snippet;
@props:subtext?: Snippet;
@props:href?: string | undefined;
@props:label?: string | undefined;
@props:spanclass?: string | undefined;
@props:activeClass?: string | undefined;
@props:nonActiveClass?: string | undefined;
-->
