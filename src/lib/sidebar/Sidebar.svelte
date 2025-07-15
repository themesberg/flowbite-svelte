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
    isOpen = false, // Controls the *overlay* state on small screens
    closeSidebar,
    isSingle = true,
    breakpoint = "md", // e.g., 'md'
    alwaysOpen = false, // When true, sidebar is always visible, no hamburger menu
    position = "fixed",
    activateClickOutside = true,
    backdrop = true,
    backdropClass,
    transition = fly,
    params,
    divClass,
    ariaLabel,
    nonActiveClass,
    activeClass,
    activeUrl = "",
    class: className,
    disableBreakpoints = false, // Key prop for Drawer integration
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
  // This derived state is now primarily for trapFocus and transition,
  // NOT for rendering the main sidebar element in standalone mode.
  // It determines if the screen size *would* make it "large" if alwaysOpen were applied.
  let isLargeScreen = $derived(innerWidth >= breakpointValues[breakpoint]);

  // Determine if the sidebar should be "open" based on explicit isOpen or large screen AND alwaysOpen
  // This state is what should drive the 'hidden' / 'block' classes for the sidebar itself,
  // which will be passed to tailwind-variants.
  let shouldBeOpen = $derived(isOpen || (alwaysOpen && isLargeScreen));

  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  $effect(() => {
    activeUrlStore.set(activeUrl);
  });

  // Pass shouldBeOpen to sidebar utility for `isOpen` variant and other relevant styling.
  // Pass alwaysOpen directly to sidebar utility for the `alwaysOpen` variant.
  const { base, active, nonactive, div, backdrop: backdropCls } = $derived(
    sidebar({
      isOpen: shouldBeOpen, // Now dynamically drives the tv `isOpen` variant
      breakpoint: alwaysOpen ? undefined : breakpoint, // Apply breakpoint variant ONLY if not alwaysOpen
      position,
      backdrop: backdrop && !disableBreakpoints, // Backdrop for standalone sidebar
      alwaysOpen // Pass alwaysOpen directly
    })
  );

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

  // Transition parameters for the fly effect when opening/closing
  let transitionParams = params ? params : { x: -320, duration: 200, easing: sineIn };

  setContext("sidebarContext", sidebarCtx);

  const handleEscape = () => {
    closeSidebar?.();
  };
</script>

<svelte:window bind:innerWidth />

{#if !disableBreakpoints}
  <aside
    use:trapFocus={isOpen ? { onEscape: closeSidebar ? handleEscape : undefined } : null}
    transition:transition={isOpen && !alwaysOpen ? transitionParams : undefined}
    {...restProps}
    class={cn(base(), clsx(clsx(className)), (theme as SidebarTheme)?.base)}
    aria-label={ariaLabel}
  >
    <div class={cn(div(), clsx(divClass), (theme as SidebarTheme)?.base)}>
      {@render children()}
    </div>
  </aside>

  {#if isOpen && !alwaysOpen && backdrop}
    <div
      role="presentation"
      class={cn(backdropCls(), clsx(backdropClass), (theme as SidebarTheme)?.backdrop)}
      onclick={activateClickOutside ? closeSidebar : undefined}
    ></div>
  {/if}
{:else}
  <aside
    use:trapFocus={isOpen ? { onEscape: closeSidebar ? handleEscape : undefined } : null}
    transition:transition={isOpen && !alwaysOpen ? transitionParams : undefined}
    {...restProps}
    class={cn(base(), clsx(clsx(className)), (theme as SidebarTheme)?.base)}
    aria-label={ariaLabel}
  >
    <div class={cn(div(), clsx(divClass), (theme as SidebarTheme)?.base)}>
      {@render children()}
    </div>
  </aside>
{/if}