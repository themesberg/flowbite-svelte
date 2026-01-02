<script lang="ts">
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import type { NavLiProps } from "$lib/types";
  import clsx from "clsx";
  import { navLi } from "./theme";
  import { getNavbarStateContext, getNavbarBreakpointContext } from "$lib/context";

  let navState = getNavbarStateContext();

  // Reactively get the breakpoint - use $derived to ensure it updates
  let navBreakpoint = $derived(getNavbarBreakpointContext());

  let { children, onclick, activeClass, nonActiveClass, class: className, classes, ...restProps }: NavLiProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("navLi"));

  let active = $derived(navState?.activeUrl ? restProps.href === navState.activeUrl : false);
  const { base, item } = $derived(navLi());
  
  // Combine item class from theme with itemClass from context and local styling
  let itemClass = $derived(
    item({
      breakpoint: navBreakpoint ?? "md",
      hidden: navState?.hidden ?? true,
      class: clsx(
        active ? (activeClass ?? navState?.activeClass) : (nonActiveClass ?? navState?.nonActiveClass),
        navState?.itemClass,
        theme?.item,
        styling?.item
      )
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

<li data-scope="nav-li" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  {#if restProps.href === undefined}
    <button role="presentation" data-part="item" onclick={handleClick} {...restProps} class={itemClass}>
      {@render children?.()}
    </button>
  {:else}
    <a {...restProps} class={itemClass} data-part="item" onclick={handleClick}>
      {@render children?.()}
    </a>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavLiProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1120)
## Props
@prop children
@prop onclick
@prop activeClass
@prop nonActiveClass
@prop class: className
@prop ...restProps
-->
