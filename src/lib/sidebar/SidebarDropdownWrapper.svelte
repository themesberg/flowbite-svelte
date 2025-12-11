<script lang="ts">
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import type { ParamsType, SidebarDropdownWrapperProps } from "$lib/types";
  import clsx from "clsx";
  import { getSidebarContext } from "$lib/context";
  import { writable } from "svelte/store";
  import { slide } from "svelte/transition";
  import { sidebarDropdownWrapper } from "./theme";
  import { untrack } from "svelte";

  let {
    children,
    arrowup,
    arrowdown,
    icon,
    isOpen = $bindable(),
    btnClass,
    label,
    spanClass,
    ulClass,
    transition = slide,
    params,
    svgClass,
    class: className,
    classes,
    onclick,
    ...restProps
  }: SidebarDropdownWrapperProps = $props();

  warnThemeDeprecation(
    "SidebarDropdownWrapper",
    untrack(() => ({ btnClass, spanClass, ulClass, svgClass })),
    { btnClass: "btn", spanClass: "span", ulClass: "ul", svgClass: "svg" }
  );

  const styling = $derived(
    classes ?? {
      btn: btnClass,
      span: spanClass,
      ul: ulClass,
      svg: svgClass
    }
  );

  const theme = getTheme("sidebarDropdownWrapper");
  const { base, btn, span, svg, ul } = sidebarDropdownWrapper();
  const isControlled = $derived(isOpen !== undefined);

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

<li class={base({ class: clsx(theme?.base, className) })}>
  <button {...restProps} onclick={handleDropdown} type="button" class={btn({ class: clsx(theme?.btn, styling.btn) })} aria-controls="sidebar-dropdown">
    {#if icon}
      {@render icon()}
    {/if}
    <span class={span({ class: clsx(theme?.span, styling.span) })}>{label}</span>
    {#if openState}
      {#if arrowup}
        {@render arrowup()}
      {:else}
        <svg class={svg({ class: clsx(theme?.svg, styling.svg) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
      {/if}
    {:else if arrowdown}
      {@render arrowdown()}
    {:else}
      <svg class={svg({ class: clsx(theme?.svg, styling.svg) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    {/if}
  </button>
  {#if openState}
    <ul class={ul({ class: clsx(theme?.ul, styling.ul) })} transition:transition={params as ParamsType}>
      {@render children()}
    </ul>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarDropdownWrapperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1501)
## Props
@prop children
@prop arrowup
@prop arrowdown
@prop icon
@prop isOpen = $bindable()
@prop btnClass
@prop label
@prop spanClass
@prop ulClass
@prop transition = slide
@prop params
@prop svgClass
@prop class: className
@prop classes
@prop onclick
@prop ...restProps
-->
