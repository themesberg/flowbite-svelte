<script lang="ts">
  import { getContext } from "svelte";
  import { twMerge } from "tailwind-merge";
  import type { SidebarCtxType, SidebarItemProps } from "$lib/types";

  let { icon, subtext, href, label, spanClass = "ms-3", activeClass, nonActiveClass, aClass, active, class: className, ...restProps }: SidebarItemProps = $props();

  const context = getContext<SidebarCtxType>("sidebarContext") ?? {};

  const activeUrlStore = getContext("activeUrl") as { subscribe: (callback: (value: string) => void) => void };

  let sidebarUrl = $state("");
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let activeItem = $state();

  // $effect(() => {
  //   activeItem = sidebarUrl ? href === sidebarUrl : false;
  // });
  $effect(() => {
    // Prioritize the explicit 'active' prop if provided
    activeItem = active !== undefined ? active : sidebarUrl ? href === sidebarUrl : false;
  });

  // let aCls = $derived((activeItem ?? sidebarUrl === href) ? (activeClass ?? context.activeClass) : (nonActiveClass ?? context.nonActiveClass));
  let aCls = $derived((activeItem ?? sidebarUrl === href) ? (activeClass ?? context.activeClass) : (nonActiveClass ?? context.nonActiveClass));
</script>

<li class={className}>
  <a onclick={context.closeSidebar} {...restProps} {href} aria-current={(activeItem ?? sidebarUrl === href) ? "page" : undefined} class={twMerge(aCls, aClass)}>
    {#if icon}
      {@render icon()}
    {/if}
    <span class={spanClass}>{label}</span>
    {#if subtext}
      {@render subtext()}
    {/if}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1332)
## Props
@prop icon
@prop subtext
@prop href
@prop label
@prop spanClass = "ms-3"
@prop activeClass
@prop nonActiveClass
@prop aClass
@prop active
@prop class: className
@prop ...restProps
-->
