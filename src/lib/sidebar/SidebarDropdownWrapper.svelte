<script lang="ts">
  import { getContext } from "svelte";
  import { writable, type Writable } from "svelte/store";
  import { slide } from "svelte/transition";
  import { uiHelpers } from "$lib";
  import { sidebarDropdownWrapper, type SidebarDropdownWrapperTheme } from ".";
  import type { SidebarDropdownWrapperProps, ParamsType } from "$lib/types";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  type SidebarContext = {
    selected?: Writable<object | null>;
    isSingle: boolean;
  };

  let { children, arrowup, arrowdown, icon, isOpen = $bindable(false), btnClass, label, spanClass, ulClass, transition = slide, params, svgClass, class: className, onclick, ...restProps }: SidebarDropdownWrapperProps = $props();

  const theme = getTheme("sidebarDropdownWrapper");

  const { base, btn, span, svg, ul } = sidebarDropdownWrapper();

  let sidebarDropdown = uiHelpers();
  sidebarDropdown.isOpen = isOpen;
  let ctx = getContext<SidebarContext>("sidebarContext") || { isSingle: false };
  let self = {};

  // Create a new Writable store for tracking the selected dropdown if it doesn't exist in the context
  if (ctx.isSingle && !ctx.selected) {
    ctx.selected = writable<object | null>(null);
  }

  // Use the shared selected store if in single mode, otherwise use the local isOpen state
  let selected: Writable<object | null> = ctx.isSingle ? ctx.selected! : writable(self);

  $effect(() => {
    if (ctx.isSingle) {
      isOpen = $selected === self;
    } else {
      isOpen = sidebarDropdown.isOpen;
    }
  });

  function handleDropdown() {
    if (ctx.isSingle) {
      selected.update((current) => (current === self ? null : self));
    } else {
      sidebarDropdown.toggle();
    }

    if (onclick) onclick();
  }
</script>

<li class={base({ class: clsx((theme as SidebarDropdownWrapperTheme)?.base, className) })}>
  <button {...restProps} onclick={handleDropdown} type="button" class={btn({ class: clsx((theme as SidebarDropdownWrapperTheme)?.btn, btnClass) })} aria-controls="sidebar-dropdown">
    {#if icon}
      {@render icon()}
    {/if}
    <span class={span({ class: clsx((theme as SidebarDropdownWrapperTheme)?.span, spanClass) })}>{label}</span>
    {#if isOpen}
      {#if arrowup}
        {@render arrowup()}
      {:else}
        <svg class={svg({ class: clsx((theme as SidebarDropdownWrapperTheme)?.svg, svgClass) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
      {/if}
    {:else if arrowdown}
      {@render arrowdown()}
    {:else}
      <svg class={svg({ class: clsx((theme as SidebarDropdownWrapperTheme)?.svg, svgClass) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    {/if}
  </button>
  {#if isOpen}
    <ul class={ul({ class: clsx((theme as SidebarDropdownWrapperTheme)?.ul, ulClass) })} transition:transition={params as ParamsType}>
      {@render children()}
    </ul>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarDropdownWrapperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1376)
## Props
@prop children
@prop arrowup
@prop arrowdown
@prop icon
@prop isOpen = $bindable(false)
@prop btnClass
@prop label
@prop spanClass
@prop ulClass
@prop transition = slide
@prop params
@prop svgClass
@prop class: className
@prop onclick
@prop ...restProps
-->
