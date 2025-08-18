<script lang="ts">
  import { getTheme } from "$lib/theme/themeUtils";
  import type { NavbarState, NavLiProps, NavbarBreakpoint } from "$lib/types";
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { navbarLi } from "./theme";

  let navState = getContext<NavbarState>("navState");
  let navBreakpoint = getContext<NavbarBreakpoint>("breakpoint");

  let { children, onclick, activeClass, nonActiveClass, class: className, ...restProps }: NavLiProps = $props();

  const theme = getTheme("navbarLi");

  let active = $derived(navState.activeUrl ? restProps.href === navState.activeUrl : false);
  let liClass = $derived(navbarLi({ breakpoint: navBreakpoint, hidden: navState.hidden, class: clsx(active ? (activeClass ?? navState.activeClass) : (nonActiveClass ?? navState.nonActiveClass), theme, className) }));

  function handleClick(event: any) {
    // Close the mobile menu when a link is clicked
    if (restProps.href !== undefined && !navState.hidden) {
      navState.hidden = true;
    }

    // Call original onclick handler if provided
    if (onclick) {
      onclick(event);
    }
  }
</script>

<li>
  {#if restProps.href === undefined}
    <button role="presentation" {...restProps} class={liClass}>
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
[NavLiProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1113)
## Props
@prop children
@prop onclick
@prop activeClass
@prop nonActiveClass
@prop class: className
@prop ...restProps
-->
