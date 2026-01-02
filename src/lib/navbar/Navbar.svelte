<script lang="ts">
  import clsx from "clsx";
  import NavContainer from "./NavContainer.svelte";
  import { navbar } from "./theme";
  import type { NavbarState, NavbarProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { setNavbarStateContext, setNavbarBreakpointContext } from "$lib/context";

  let { children, fluid, class: className, classes, closeOnClickOutside = true, breakpoint = "md", ...restProps }: NavbarProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("navbar"));

  let { base, content, container: navContainerClass } = $derived(navbar());

  let navState = $state<NavbarState>({ hidden: true });
  setNavbarStateContext(navState);

  // Update context when breakpoint prop changes
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
    // Check if the click was outside the navbar AND the dropdown is open
    if (!navState.hidden && navbarElement && !navbarElement.contains(event.target as Node)) {
      navState.hidden = true;
    }
  }
</script>

<svelte:document onclick={handleDocumentClick} />

<nav data-scope="navbar" data-part="base" class={base({ class: clsx(className) })} bind:this={navbarElement}>
  <div {...restProps} data-part="content" class={content({ class: clsx(theme?.content, styling?.content) })}>
    <NavContainer {fluid} class={navContainerClass({ class: clsx(theme?.container, styling?.container) })}>
      {@render children({ hidden: navState.hidden, toggle, NavContainer })}
    </NavContainer>
  </div>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1090)
## Props
@prop children
@prop fluid
@prop class: className
@prop classes
@prop closeOnClickOutside = true
@prop breakpoint = "md"
@prop ...restProps
-->
