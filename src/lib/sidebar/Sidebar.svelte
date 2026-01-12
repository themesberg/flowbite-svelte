<script lang="ts">
  import { innerWidth } from "svelte/reactivity/window";
  import type { Attachment } from "svelte/attachments";
  import type { SidebarContextType, SidebarProps } from "$lib/types";
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
    transitionParams,
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

  let isLargeScreen = $derived(disableBreakpoints ? false : alwaysOpen || (innerWidth.current ?? 0) >= breakpointValues[breakpoint]);

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

  const defaultTransitionParams = { x: -320, duration: 200, easing: sineIn };

  let finalTransitionParams = $derived(isBrowser && prefersReducedMotion.current ? { ...(transitionParams ?? defaultTransitionParams), duration: 0 } : (transitionParams ?? defaultTransitionParams));

  setSidebarContext(sidebarCtx);

  const trapFocusAttachment: Attachment<HTMLElement> = (node) => {
    $effect(() => {
      const shouldTrap = disableBreakpoints ? isOpen : !isLargeScreen && isOpen && !alwaysOpen;

      if (!shouldTrap) return;

      const previous = document.activeElement as HTMLElement | null;

      function focusable(): HTMLElement[] {
        return Array.from(node.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
      }

      function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Tab") {
          const elements = focusable();
          const first = elements[0];
          const last = elements.at(-1);
          const current = document.activeElement;

          if (event.shiftKey && current === first) {
            last?.focus();
            event.preventDefault();
          }

          if (!event.shiftKey && current === last) {
            first?.focus();
            event.preventDefault();
          }
        }

        if (event.key === "Escape") {
          event.preventDefault();
          closeSidebar?.();
        }
      }

      const elements = focusable();
      elements[0]?.focus();

      node.addEventListener("keydown", handleKeydown);

      return () => {
        node.removeEventListener("keydown", handleKeydown);
        previous?.focus({ preventScroll: true });
      };
    });
  };
</script>

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
      {@attach trapFocusAttachment}
      transition:transition={!alwaysOpen ? finalTransitionParams : undefined}
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
  <aside {@attach trapFocusAttachment} {...restProps} data-scope="sidebar" data-part="base" class={base({ class: clsx(theme?.base, className) })} aria-label={ariaLabel}>
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
@prop transitionParams
@prop ariaLabel
@prop activeUrl = ""
@prop class: className
@prop classes
@prop disableBreakpoints = false
@prop ...restProps
-->
