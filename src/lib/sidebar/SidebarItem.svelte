<script lang="ts">
  import { getContext } from "svelte";
  import { twMerge } from "tailwind-merge";
  import { type SidebarCtxType, type SidebarItemProps as Props } from "./";

  let { iconSlot, subtext, href, label, spanClass = "ms-3", activeClass, nonActiveClass, aClass, class: className, ...restProps }: Props = $props();

  const context = getContext<SidebarCtxType>("sidebarContext") ?? {};
  const activeUrlStore = getContext('activeUrl') as { subscribe: (callback: (value: string) => void) => void };

  let sidebarUrl = $state("");
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let active = $state();

  $effect(() => {
    active = sidebarUrl ? href === sidebarUrl : false;
  });

  let aCls = $derived((active ?? sidebarUrl === href) ? (activeClass ?? context.activeClass) : (nonActiveClass ?? context.nonActiveClass));
</script>

<li class={className}>
  <a onclick={context.closeSidebar} {...restProps} {href} aria-current={active ?? sidebarUrl === href} class={twMerge(aCls, aClass)}>
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
