<script lang="ts">
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import type { ParamsType, SidebarDropdownWrapperProps } from "$lib/types";
  import clsx from "clsx";
  import { getSidebarContext } from "$lib/context";
  import { prefersReducedMotion } from "svelte/motion";
  import { writable } from "svelte/store";
  import { slide } from "svelte/transition";
  import { sidebarDropdownWrapper } from "./theme";

  let { children, arrowup, arrowdown, icon, isOpen = $bindable(), label, transition = slide, params, class: className, classes, onclick, ...restProps }: SidebarDropdownWrapperProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("sidebarDropdownWrapper"));
  const { base, trigger, label: labelCls, icon: iconCls, list } = sidebarDropdownWrapper();
  const isControlled = $derived(isOpen !== undefined);

  const isBrowser = typeof window !== "undefined";

  const effectiveParams = $derived(isBrowser && prefersReducedMotion.current ? { ...(params as ParamsType), duration: 0 } : (params as ParamsType));

  let ctx = getSidebarContext() || { isSingle: false };

  let self = {};

  if (ctx.isSingle && !ctx.selected) {
    ctx.selected = writable<object | null>(null);
  }

  const selectedStore = $derived(ctx.selected);
  let localOpen = $state(false);

  const openState = $derived(isControlled ? isOpen : ctx.isSingle ? $selectedStore === self : localOpen);

  function handleDropdown() {
    if (isControlled) {
      isOpen = !isOpen;
    } else if (ctx.isSingle) {
      ctx.selected!.update((current) => (current === self ? null : self));
    } else {
      localOpen = !localOpen;
    }

    if (onclick) onclick();
  }
</script>

<li data-scope="sidebar-dropdown-wrapper" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  <button {...restProps} onclick={handleDropdown} type="button" data-part="trigger" class={trigger({ class: clsx(theme?.trigger, styling?.trigger) })} aria-controls="sidebar-dropdown">
    {#if icon}
      {@render icon()}
    {/if}
    <span data-part="label" class={labelCls({ class: clsx(theme?.label, styling?.label) })}>{label}</span>
    {#if openState}
      {#if arrowup}
        {@render arrowup()}
      {:else}
        <svg data-part="icon" class={iconCls({ class: clsx(theme?.icon, styling?.icon) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
      {/if}
    {:else if arrowdown}
      {@render arrowdown()}
    {:else}
      <svg data-part="icon" class={iconCls({ class: clsx(theme?.icon, styling?.icon) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    {/if}
  </button>
  {#if openState}
    <ul data-part="menu" class={list({ class: clsx(theme?.list, styling?.list) })} transition:transition={effectiveParams}>
      {@render children()}
    </ul>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarDropdownWrapperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1370)
## Props
@prop children
@prop arrowup
@prop arrowdown
@prop icon
@prop isOpen = $bindable()
@prop label
@prop transition = slide
@prop params
@prop class: className
@prop classes
@prop onclick
@prop ...restProps
-->
