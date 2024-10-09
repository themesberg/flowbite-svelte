<script lang="ts">
  import { getContext } from "svelte";
  import { page } from "$app/stores";
  import { twMerge } from "tailwind-merge";
  import { type SidebarCtxType, type SidebarItemProps as Props } from "./";

  let { iconSlot, subtext, href, label, spanClass = "ms-3", activeClass, nonActiveClass, aClass, active, class: className, ...restProps }: Props = $props();

  const context = getContext<SidebarCtxType>("sidebarContext") ?? {};
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
@props: iconSlot: Snippet;
@props:subtext: Snippet;
@props:href: any;
@props:label: string;
@props:spanClass: string = "ms-3";
@props:activeClass: string;
@props:nonActiveClass: string;
@props:aClass: string;
@props:active: boolean;
@props:class: string;
-->
