<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { navbarLi } from "./theme";
  import type { NavbarState, NavLiProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let navState = getContext<NavbarState>("navState");

  let { children, activeClass, nonActiveClass, class: className, ...restProps }: NavLiProps = $props();

  const theme = getTheme("navLi");

  const activeUrlStore = getContext("activeUrl") as { subscribe: (callback: (value: string) => void) => void };

  let navUrl = $state("");
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });

  let active = $derived(navUrl ? restProps.href === navUrl : false);
  let liClass = $derived(navbarLi({ hidden: navState.hidden, class: clsx(active ? (activeClass ?? navState.activeClass) : (nonActiveClass ?? navState.nonActiveClass), theme, className) }));
</script>

<li>
  {#if restProps.href === undefined}
    <button role="presentation" {...restProps} class={liClass}>
      {@render children?.()}
    </button>
  {:else}
    <a {...restProps} class={liClass}>
      {@render children?.()}
    </a>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavLiProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1101)
## Props
@prop children
@prop activeClass
@prop nonActiveClass
@prop class: className
@prop ...restProps
-->
