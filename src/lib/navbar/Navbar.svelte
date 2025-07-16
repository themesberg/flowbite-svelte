<script lang="ts">
  import clsx from "clsx";
  import { setContext } from "svelte";
  import { NavContainer } from "$lib";
  import { navbar } from "./theme";
  import type { NavbarState, NavbarProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  // propagate props type from underlying Frame

  let { children, fluid, navContainerClass, class: className, closeOnClickOutside = true, ...restProps }: NavbarProps = $props();

  const theme = getTheme("navbar");

  let navState = $state({ hidden: true });
  setContext<NavbarState>("navState", navState);

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

<nav bind:this={navbarElement}>
  <div {...restProps} class={navbar({ class: clsx(theme, className) })}>
    <NavContainer {fluid} class={clsx(navContainerClass)}>
      {@render children({ hidden: navState.hidden, toggle, NavContainer })}
    </NavContainer>
  </div>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1093)
## Props
@prop children
@prop fluid
@prop navContainerClass
@prop class: className
@prop closeOnClickOutside = true
@prop ...restProps
-->
