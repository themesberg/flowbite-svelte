<script lang="ts">
  import { getTheme } from "$lib/theme/themeUtils";
  import type { NavLiProps } from "$lib/types";
  import clsx from "clsx";
  import { navbarLi } from "./theme";
  import { getNavbarStateContext, getNavbarBreakpointContext } from "$lib/context";
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

  let navState = getNavbarStateContext();
  let navBreakpoint = getNavbarBreakpointContext();

  let { children, onclick, href, activeClass, nonActiveClass, class: className, ...restProps }: NavLiProps = $props();

  const theme = $derived(getTheme("navbarLi"));

  let active = $derived(navState?.activeUrl ? href === navState.activeUrl : false);
  let liClass = $derived(
    navbarLi({
      breakpoint: navBreakpoint ?? "md",
      hidden: navState?.hidden ?? true,
      class: clsx(active ? (activeClass ?? navState?.activeClass) : (nonActiveClass ?? navState?.nonActiveClass), theme, className)
    })
  );

  // Anchor-specific attributes to exclude from button
  const anchorOnlyAttrs = new Set([
    'download',
    'hreflang',
    'media',
    'ping',
    'referrerpolicy',
    'rel',
    'target'
  ]);

  // Button-specific attributes to exclude from anchor
  const buttonOnlyAttrs = new Set([
    'disabled',
    'form',
    'formaction',
    'formenctype',
    'formmethod',
    'formnovalidate',
    'formtarget',
    'name',
    'type',
    'value'
  ]);

  // Filter props appropriately for button vs anchor elements
  const buttonProps = $derived.by(() => {
    const props: Record<string, any> = {};
    for (const [key, value] of Object.entries(restProps)) {
      if (!anchorOnlyAttrs.has(key)) {
        props[key] = value;
      }
    }
    return props as Partial<HTMLButtonAttributes>;
  });

  const anchorProps = $derived.by(() => {
    const props: Record<string, any> = {};
    for (const [key, value] of Object.entries(restProps)) {
      if (!buttonOnlyAttrs.has(key)) {
        props[key] = value;
      }
    }
    return props as Partial<HTMLAnchorAttributes>;
  });

  function handleClick(event: MouseEvent) {
    event.stopPropagation();
    // Call original onclick handler first if provided
    if (onclick) {
      (onclick as (event: MouseEvent) => void)(event);
    }

    // Always close the mobile menu when clicked
    if (navState) {
      navState.hidden = true;
    }
  }
</script>

<li>
  {#if href === undefined}
    <button class={liClass} {...buttonProps} onclick={handleClick}>
      {@render children?.()}
    </button>
  {:else}
    <a {href} class={liClass} {...anchorProps} onclick={handleClick}>
      {@render children?.()}
    </a>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavLiProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1164)
## Props
@prop children
@prop onclick
@prop activeClass
@prop nonActiveClass
@prop class: className
@prop ...restProps
-->
