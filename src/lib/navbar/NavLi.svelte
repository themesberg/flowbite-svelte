<script lang="ts">
  import { getTheme } from "$lib/theme/themeUtils";
  import type { NavbarState, NavLiProps } from "$lib/types";
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { navbarLi } from "./theme";

  let navState = getContext<NavbarState>("navState");

  let { children, activeClass, nonActiveClass, class: className, ...restProps }: NavLiProps = $props();

  const theme = getTheme("navbarLi");

  const activeUrl: { value?: string } = getContext("activeUrl") ?? {};

  let active = $derived(activeUrl.value ? restProps.href === activeUrl.value : false);
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
[NavLiProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1125)
## Props
@prop children
@prop activeClass
@prop nonActiveClass
@prop class: className
@prop ...restProps
-->
