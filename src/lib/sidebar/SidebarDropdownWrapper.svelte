<script lang="ts">
  import { getContext } from "svelte";
  import { writable, type Writable } from "svelte/store";
  import { slide } from "svelte/transition";
  import { uiHelpers } from "$lib";
  import { sidebardropdownwrapper } from ".";
  import type { SidebarDropdownWrapperProps, ParamsType } from "$lib/types";
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";

  type SidebarContext = {
    selected?: Writable<object | null>;
    isSingle: boolean;
  };

  let { children, arrowup, arrowdown, icon, isOpen = $bindable(false), btnClass, label, spanClass, ulClass, transition = slide, params, svgClass, class: className, onclick, ...restProps }: SidebarDropdownWrapperProps = $props();

  const { base, btn, span, svg, ul } = sidebardropdownwrapper();

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

<li class={twMerge(base(), clsx(className))}>
  <button {...restProps} onclick={handleDropdown} type="button" class={twMerge(btn(), clsx(btnClass))} aria-controls="sidebar-dropdown">
    {#if icon}
      {@render icon()}
    {/if}
    <span class={twMerge(span(), clsx(spanClass))}>{label}</span>
    {#if isOpen}
      {#if arrowup}
        {@render arrowup()}
      {:else}
        <svg class={twMerge(svg(), clsx(svgClass))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
      {/if}
    {:else if arrowdown}
      {@render arrowdown()}
    {:else}
      <svg class={twMerge(svg(), clsx(svgClass))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    {/if}
  </button>
  {#if isOpen}
    <ul class={twMerge(ul(), clsx(ulClass))} transition:transition={params as ParamsType}>
      {@render children()}
    </ul>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarDropdownWrapperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1396)
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
