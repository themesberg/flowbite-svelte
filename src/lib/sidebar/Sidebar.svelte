<script lang="ts">
  import { setContext } from "svelte";
  import { fly } from "svelte/transition";
  import { writable } from "svelte/store";
  import { sineIn } from "svelte/easing";
  import { sidebar, type SidebarTheme } from ".";
  import { trapFocus, type SidebarProps, type SidebarCtxType } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";

  let { children, isOpen = false, closeSidebar, isSingle = true, breakpoint = "md", alwaysOpen = false, position = "fixed", activateClickOutside = true, backdrop = true, backdropClass, transition = fly, params, divClass, ariaLabel, nonActiveClass, activeClass, activeUrl = "", class: className, classes, disableBreakpoints = false, ...restProps }: SidebarProps = $props();

  warnThemeDeprecation("Sidebar", { backdropClass, divClass, nonActiveClass, activeClass }, { backdropClass: "backdrop", divClass: "div", nonActiveClass: "nonactive", activeClass: "active" });
  const styling = $derived(
    classes ?? {
      backdrop: backdropClass,
      div: divClass,
      nonactive: nonActiveClass,
      active: activeClass
    }
  );

  const theme = getTheme("sidebar");

  const breakpointValues = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
  };

  let innerWidth: number = $state(-1);
  // isLargeScreen should only be true if not disabling breakpoints and it meets the criteria
  let isLargeScreen = $derived(disableBreakpoints ? false : alwaysOpen || innerWidth >= breakpointValues[breakpoint]);

  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  $effect(() => {
    activeUrlStore.set(activeUrl);
  });

  if (disableBreakpoints) isOpen = true;
  const { base, active, nonactive, div, backdrop: backdropCls } = $derived(sidebar({ isOpen, breakpoint, position, backdrop, alwaysOpen: alwaysOpen && !disableBreakpoints }));

  let sidebarCtx: SidebarCtxType = {
    get closeSidebar() {
      return closeSidebar;
    },
    get activeClass() {
      return active({ class: clsx((theme as SidebarTheme)?.active, styling.active) });
    },
    get nonActiveClass() {
      return nonactive({ class: clsx((theme as SidebarTheme)?.nonactive, styling.nonactive) });
    },
    isSingle
  };

  let transitionParams = params ? params : { x: -320, duration: 200, easing: sineIn };

  setContext("sidebarContext", sidebarCtx);

  // Handler for Escape key
  const handleEscape = () => {
    closeSidebar?.();
  };
</script>

<svelte:window bind:innerWidth />

{#if !disableBreakpoints}
  {#if isOpen || isLargeScreen}
    {#if isOpen && !alwaysOpen}
      {#if backdrop && activateClickOutside}
        <div role="presentation" class={backdropCls({ class: clsx((theme as SidebarTheme)?.backdrop, styling.backdrop) })} onclick={closeSidebar}></div>
      {:else if backdrop && !activateClickOutside}
        <div role="presentation" class={backdropCls({ class: clsx((theme as SidebarTheme)?.backdrop, styling.backdrop) })}></div>
      {:else if !backdrop && activateClickOutside}
        <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full" onclick={closeSidebar}></div>
      {:else if !backdrop && !activateClickOutside}
        <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>
      {/if}
    {/if}
    <aside use:trapFocus={!isLargeScreen && isOpen && !alwaysOpen ? { onEscape: closeSidebar ? handleEscape : undefined } : null} transition:transition={!alwaysOpen ? transitionParams : undefined} {...restProps} class={base({ class: clsx((theme as SidebarTheme)?.base, className) })} aria-label={ariaLabel}>
      <div class={div({ class: clsx((theme as SidebarTheme)?.base, styling.div) })}>
        {@render children()}
      </div>
    </aside>
  {/if}
{:else}
  <aside use:trapFocus={isOpen ? { onEscape: closeSidebar ? handleEscape : undefined } : null} {...restProps} class={base({ class: clsx((theme as SidebarTheme)?.base, className) })} aria-label={ariaLabel}>
    <div class={div({ class: clsx((theme as SidebarTheme)?.base, styling.div) })}>
      {@render children()}
    </div>
  </aside>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1344)
## Props
@prop children
@prop isOpen = false
@prop closeSidebar
@prop isSingle = true
@prop breakpoint = "md"
@prop alwaysOpen = false
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
@prop classes
@prop disableBreakpoints = false
@prop ...restProps
-->
