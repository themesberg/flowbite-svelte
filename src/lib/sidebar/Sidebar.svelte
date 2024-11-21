<script lang="ts">
  import { setContext } from "svelte";
  import { fly } from "svelte/transition";
  import { writable } from 'svelte/store';
  import { sineIn } from "svelte/easing";
  import { type SidebarProps as Props, sidebar, type SidebarCtxType } from ".";

  let { children, isOpen = false, closeSidebar, isSingle = true, breakpoint = "md", position = "fixed", activateClickOutside = true, backdrop = true, backdropClass, transition = fly, params, divClass, ariaLabel, nonActiveClass, activeClass, activeUrl = '', class: className, ...restProps }: Props = $props();

  const breakpointValues = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
  };

  let isLargeScreen = $state(false);

  const activeUrlStore = writable('');
  setContext('activeUrl', activeUrlStore);
  $effect(() => {
    activeUrlStore.set(activeUrl);
  });

  function checkScreenSize() {
    isLargeScreen = window.innerWidth >= breakpointValues[breakpoint];
  }

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
  $effect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  });
</script>

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
  <aside transition:transition={transitionParams} {...restProps} class={base({ className })} aria-label={ariaLabel}>
    <div class={div({ class: divClass })}>
      {@render children()}
    </div>
  </aside>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:isOpen: boolean = false;
@props:closeSidebar: () => void;
@props:isSingle: boolean = true;
@props:breakpoint: "sm" | "md" | "lg" | "xl" | "2xl" | undefined = "md";
@props:position: "fixed" | "absolute" | "static" | undefined = "fixed";
@props:activateClickOutside: boolean = true;
@props:backdrop: boolean = true;
@props:backdropClass: string;
@props:transition: TransitionFunc = fly;
@props:params: ParamsType;
@props:divClass: string;
@props:ariaLabel: string;
@props:nonActiveClass: string;
@props:activeClass: string;
@props:class: string;
-->
