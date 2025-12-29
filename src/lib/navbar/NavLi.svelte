<script lang="ts">
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import type { NavLiProps } from "$lib/types";
  import clsx from "clsx";
  import { navbarLi } from "./theme";
  import { getNavbarStateContext, getNavbarBreakpointContext } from "$lib/context";

  let navState = getNavbarStateContext();

  // Reactively get the breakpoint - use $derived to ensure it updates
  let navBreakpoint = $derived(getNavbarBreakpointContext());

  let { children, onclick, activeClass, nonActiveClass, class: className, ...restProps }: NavLiProps = $props();

  const theme = $derived(getTheme("navbarLi"));

  let active = $derived(navState?.activeUrl ? restProps.href === navState.activeUrl : false);
  let liClass = $derived(
    navbarLi({
      breakpoint: navBreakpoint ?? "md",
      hidden: navState?.hidden ?? true,
      class: clsx(active ? (activeClass ?? navState?.activeClass) : (nonActiveClass ?? navState?.nonActiveClass), theme, className)
    })
  );

  function handleClick(event: MouseEvent) {
    const tagName = (event.currentTarget as HTMLElement).tagName;
    // Close the mobile menu when a link is clicked
    const state = navState;
    if (state && tagName === "A" && !state.hidden) {
      state.hidden = true;
    }

    // Call original onclick handler if provided
    if (onclick) {
      // Cast the handler to accept a standard MouseEvent
      (onclick as (event: MouseEvent) => void)(event);
    }
  }
</script>

<li>
  {#if restProps.href === undefined}
    <button role="presentation" onclick={handleClick} {...restProps} class={liClass}>
      {@render children?.()}
    </button>
  {:else}
    <a {...restProps} class={liClass} onclick={handleClick}>
      {@render children?.()}
    </a>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavLiProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1149)
## Props
@prop children
@prop onclick
@prop activeClass
@prop nonActiveClass
@prop class: className
@prop ...restProps
-->
