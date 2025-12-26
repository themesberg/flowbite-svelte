<script lang="ts">
  import clsx from "clsx";
  import NavContainer from "./NavContainer.svelte";
  import { navbar } from "./theme";
  import type { NavbarState, NavbarProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";
  import { setNavbarStateContext, setNavbarBreakpointContext } from "$lib/context";

  let { children, fluid, class: className, classes, closeOnClickOutside = true, breakpoint = "md", ...restProps }: NavbarProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("navbar"));

  let { base, container: navContainerClass } = $derived(navbar());

  // Create reactive state that properly tracks mutations from any depth
  let state = $state({
    hidden: true,
    activeClass: undefined as string | undefined,
    nonActiveClass: undefined as string | undefined,
    activeUrl: undefined as string | undefined
  });

  // Use an object with getters/setters that reference the raw state
  const navState: NavbarState = {
    get hidden() { return state.hidden; },
    set hidden(v) { state.hidden = v; },
    get activeClass() { return state.activeClass; },
    set activeClass(v) { state.activeClass = v; },
    get nonActiveClass() { return state.nonActiveClass; },
    set nonActiveClass(v) { state.nonActiveClass = v; },
    get activeUrl() { return state.activeUrl; },
    set activeUrl(v) { state.activeUrl = v; }
  };

  setNavbarStateContext(navState);

  $effect(() => {
    setNavbarBreakpointContext(breakpoint);
  });

  // Add reference to the navbar element
  let navbarElement: HTMLElement;

  let toggle = () => {
    navState.hidden = !navState.hidden;
  };

  function handleDocumentClick(event: MouseEvent) {
    if (!closeOnClickOutside) return;
    
    const target = event.target as Node;

    // 1. Only run if the menu is actually open
    // 2. Only run if the click is outside the navbar
    // 3. Ensure the target is still in the DOM (Svelte sometimes unmounts elements mid-click)
    if (!navState.hidden && navbarElement && !navbarElement.contains(target)) {
      navState.hidden = true;
    }
  }
</script>

<svelte:document onclick={handleDocumentClick} />

<nav bind:this={navbarElement}>
  <div {...restProps} class={base({ class: clsx(theme?.base, className) })}>
    <NavContainer {fluid} class={navContainerClass({ class: clsx(theme?.container, styling?.container) })}>
      {@render children({ hidden: navState.hidden, toggle, NavContainer })}
    </NavContainer>
  </div>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1129)
## Props
@prop children
@prop fluid
@prop class: className
@prop classes
@prop closeOnClickOutside = true
@prop breakpoint = "md"
@prop ...restProps
-->
