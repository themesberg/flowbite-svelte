<script lang="ts">
  import { setContext } from "svelte";
  import { fly } from "svelte/transition";
  import { writable } from "svelte/store";
  import { sineIn } from "svelte/easing";
  import { sidebar } from ".";
  import type { SidebarProps, SidebarCtxType } from "$lib/types";
  import clsx from "clsx";

  let { children, isOpen = false, closeSidebar, isSingle = true, breakpoint = "md", position = "fixed", activateClickOutside = true, backdrop = true, backdropClass, transition = fly, params, divClass, ariaLabel, nonActiveClass, activeClass, activeUrl = "", class: className, ...restProps }: SidebarProps = $props();

  const breakpointValues = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
  };

  let innerWidth: number = $state(-1);
  let isLargeScreen = $derived(innerWidth >= breakpointValues[breakpoint]);

  const initialPosition = position;

  $effect(() => {
    // position = isLargeScreen ? "static" : initialPosition;
  });

  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  $effect(() => {
    activeUrlStore.set(activeUrl);
  });

  const { base, active, nonactive, div, backdrop: backdropCls } = $derived(sidebar({ isOpen, breakpoint, position, backdrop }));

  let sidebarCtx: SidebarCtxType = {
    get closeSidebar() {
      return closeSidebar;
    },
    get activeClass() {
      return active({ class: activeClass });
    },
    get nonActiveClass() {
      return nonactive({ class: nonActiveClass });
    },
    isSingle
  };

  let transitionParams = params ? params : { x: -320, duration: 200, easing: sineIn };

  setContext("sidebarContext", sidebarCtx);
</script>

<svelte:window bind:innerWidth />

{#if isOpen || isLargeScreen}
  {#if isOpen}
    {#if backdrop && activateClickOutside}
      <div role="presentation" class={backdropCls({ class: backdropClass })} onclick={closeSidebar}></div>
    {:else if backdrop && !activateClickOutside}
      <div role="presentation" class={backdropCls({ class: backdropClass })}></div>
    {:else if !backdrop && activateClickOutside}
      <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full" onclick={closeSidebar}></div>
    {:else if !backdrop && !activateClickOutside}
      <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>
    {/if}
  {/if}
  <aside transition:transition={transitionParams} {...restProps} class={base({ class: clsx(className) })} aria-label={ariaLabel}>
    <div class={div({ class: divClass })}>
      {@render children()}
    </div>
  </aside>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1269)
## Props
@prop children
@prop isOpen = false
@prop closeSidebar
@prop isSingle = true
@prop breakpoint = "md"
@prop position = "fixed"
@prop activateClickOutside = true
@prop backdrop = true
@prop backdropClass
@prop transition = fly
@prop params
@prop divClass
@prop ariaLabel
@prop nonActiveClass
@prop activeClass
@prop activeUrl = ""
@prop class: className
@prop ...restProps
-->
