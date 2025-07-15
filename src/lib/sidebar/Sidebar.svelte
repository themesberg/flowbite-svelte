<script lang="ts">
  import { setContext } from "svelte";
  import { fly } from "svelte/transition";
  import { writable } from "svelte/store";
  import { sineIn } from "svelte/easing";
  import { sidebar, type SidebarTheme } from ".";
  import { trapFocus, type SidebarProps, type SidebarCtxType } from "$lib";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";

  let {
    children,
    isOpen = false, // Keep isOpen prop for context, trapFocus, etc.
    closeSidebar,
    isSingle = true,
    breakpoint = "md",
    alwaysOpen = false,
    position = "fixed",
    activateClickOutside = true,
    backdrop = true, // Sidebar's own backdrop should only be used if not in Drawer mode
    backdropClass,
    transition = fly,
    params,
    divClass,
    ariaLabel,
    nonActiveClass,
    activeClass,
    activeUrl = "",
    class: className,
    disableBreakpoints = false, // This prop still crucial
    ...restProps
  }: SidebarProps = $props();

  const theme = getTheme("sidebar");

  const breakpointValues = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
  };

  let innerWidth: number = $state(-1);
  // isLargeScreen only active if NOT disabling breakpoints and criteria met
  let isLargeScreen = $derived(disableBreakpoints ? false : (alwaysOpen || innerWidth >= breakpointValues[breakpoint]));

  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  $effect(() => {
    activeUrlStore.set(activeUrl);
  });

  // Pass isOpen to the sidebar utility ONLY for styling variants it might need (not display)
  // Ensure alwaysOpen in utility respects disableBreakpoints
  const { base, active, nonactive, div, backdrop: backdropCls } = $derived(
    sidebar({ breakpoint, position, backdrop: backdrop && !disableBreakpoints, alwaysOpen: alwaysOpen && !disableBreakpoints })
  ); // isOpen removed as a direct prop here

  let sidebarCtx: SidebarCtxType = {
    get closeSidebar() {
      return closeSidebar;
    },
    get activeClass() {
      return cn(active(), clsx(activeClass), (theme as SidebarTheme)?.active);
    },
    get nonActiveClass() {
      return cn(nonactive(), clsx(nonActiveClass), (theme as SidebarTheme)?.nonactive);
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
    {#if isOpen && !alwaysOpen && backdrop}
      <div
        role="presentation"
        class={cn(backdropCls(), clsx(backdropClass), (theme as SidebarTheme)?.backdrop)}
        onclick={activateClickOutside ? closeSidebar : undefined}
      ></div>
    {/if}
    <aside
      use:trapFocus={!isLargeScreen && isOpen && !alwaysOpen ? { onEscape: closeSidebar ? handleEscape : undefined } : null}
      transition:transition={!alwaysOpen ? transitionParams : undefined}
      {...restProps}
      class={cn(base(), clsx(clsx(className)), (theme as SidebarTheme)?.base)}
      aria-label={ariaLabel}
    >
      <div class={cn(div(), clsx(divClass), (theme as SidebarTheme)?.base)}>
        {@render children()}
      </div>
    </aside>
  {/if}
{:else}
  <aside
    use:trapFocus={isOpen ? { onEscape: closeSidebar ? handleEscape : undefined } : null}
    transition:transition={!alwaysOpen ? transitionParams : undefined}
    {...restProps}
    class={cn(base(), clsx(clsx(className)), (theme as SidebarTheme)?.base)}
    aria-label={ariaLabel}
  >
    <div class={cn(div(), clsx(divClass), (theme as SidebarTheme)?.base)}>
      {@render children()}
    </div>
  </aside>
  {/if}