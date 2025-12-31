<script lang="ts">
  import type { SidebarContextType, SidebarProps } from "$lib/types";
  import { trapFocus } from "$lib/utils/actions";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";
  import { setSidebarContext, setActiveUrlContext } from "$lib/context";
  import { sineIn } from "svelte/easing";
  import { prefersReducedMotion } from "svelte/motion";
  import { writable } from "svelte/store";
  import { fly } from "svelte/transition";
  import { sidebar } from "./theme";

  let {
    children,
    isOpen = false,
    closeSidebar,
    isSingle = true,
    breakpoint = "md",
    alwaysOpen = false,
    position = "fixed",
    activateClickOutside = true,
    backdrop = true,
    transition = fly,
    params,
    ariaLabel,
    activeUrl = "",
    class: className,
    classes,
    disableBreakpoints = false,
    ...restProps
  }: SidebarProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("sidebar"));

  const breakpointValues = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
  };

  let innerWidth: number = $state(-1);
  let isLargeScreen = $derived(disableBreakpoints ? false : alwaysOpen || innerWidth >= breakpointValues[breakpoint]);

  // Create reactive context for activeUrl using getter
  const activeUrlContext = {
    get value() {
      return activeUrl;
    }
  };
  setActiveUrlContext(activeUrlContext);

  $effect(() => {
    if (disableBreakpoints) isOpen = true;
  });
  const { base, active, nonactive, content, backdrop: backdropCls } = $derived(sidebar({ isOpen, breakpoint, position, backdrop, alwaysOpen: alwaysOpen && !disableBreakpoints }));

  const selectedStore = $derived(isSingle ? writable<object | null>(null) : undefined);
  let sidebarCtx: SidebarContextType = {
    get closeSidebar() {
      return closeSidebar;
    },
    get activeClass() {
      return active({ class: clsx(theme?.active, styling?.active) });
    },
    get nonActiveClass() {
      return nonactive({ class: clsx(theme?.nonactive, styling?.nonactive) });
    },
    get isSingle() {
      return isSingle;
    },
    get selected() {
      return selectedStore;
    }
  };

  const isBrowser = typeof window !== "undefined";

  let transitionParams = $derived(
    isBrowser && prefersReducedMotion.current ? { ...(params ? params : { x: -320, duration: 200, easing: sineIn }), duration: 0 } : params ? params : { x: -320, duration: 200, easing: sineIn }
  );

  setSidebarContext(sidebarCtx);

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
        <div role="presentation" data-part="backdrop" class={backdropCls({ class: clsx(theme?.backdrop, styling?.backdrop) })} onclick={closeSidebar}></div>
      {:else if backdrop && !activateClickOutside}
        <div role="presentation" data-part="backdrop" class={backdropCls({ class: clsx(theme?.backdrop, styling?.backdrop) })}></div>
      {:else if !backdrop && activateClickOutside}
        <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full" onclick={closeSidebar}></div>
      {:else if !backdrop && !activateClickOutside}
        <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>
      {/if}
    {/if}
    <aside
      use:trapFocus={!isLargeScreen && isOpen && !alwaysOpen ? { onEscape: closeSidebar ? handleEscape : undefined } : null}
      transition:transition={!alwaysOpen ? transitionParams : undefined}
      {...restProps}
      data-scope="sidebar"
      data-part="base"
      class={base({ class: clsx(theme?.base, className) })}
      aria-label={ariaLabel}
    >
      <div data-part="content" class={content({ class: clsx(theme?.content, styling?.content) })}>
        {@render children()}
      </div>
    </aside>
  {/if}
{:else}
  <aside
    use:trapFocus={isOpen ? { onEscape: closeSidebar ? handleEscape : undefined } : null}
    {...restProps}
    data-scope="sidebar"
    data-part="base"
    class={base({ class: clsx(theme?.base, className) })}
    aria-label={ariaLabel}
  >
    <div data-part="content" class={content({ class: clsx(theme?.content, styling?.content) })}>
      {@render children()}
    </div>
  </aside>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1331)
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
@prop transition = fly
@prop params
@prop ariaLabel
@prop activeUrl = ""
@prop class: className
@prop classes
@prop disableBreakpoints = false
@prop ...restProps
-->
