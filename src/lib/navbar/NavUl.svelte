<script lang="ts">
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import type { NavUlProps } from "$lib/types";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { prefersReducedMotion } from "svelte/motion";
  import { fade, fly, scale, slide } from "svelte/transition";
  import { navUl } from "./theme";
  import { getNavbarStateContext, getNavbarBreakpointContext } from "$lib/context";

  let navState = getNavbarStateContext();

  // Reactively get the breakpoint - use $derived to ensure it updates
  let navBreakpoint = $derived(getNavbarBreakpointContext());

  let { children, activeUrl = $bindable(), slideParams, transition = slide, transitionParams, respectMotionPreference = true, class: className, classes, ...restProps }: NavUlProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("navUl"));

  // Default parameters for different transitions
  const getDefaultParams = (transitionFn: typeof slide | typeof fly | typeof fade | typeof scale) => {
    if (transitionFn === slide) return { delay: 0, duration: 200, easing: sineIn };
    if (transitionFn === fly) return { delay: 0, duration: 200, y: -10, easing: sineIn };
    if (transitionFn === fade) return { delay: 0, duration: 200, easing: sineIn };
    if (transitionFn === scale) return { delay: 0, duration: 200, start: 0.95, easing: sineIn };
    return { delay: 0, duration: 200, easing: sineIn };
  };

  // Support legacy slideParams prop
  const defaultParams = $derived(getDefaultParams(transition));
  const finalParams = $derived(transitionParams ?? slideParams ?? defaultParams);

  // Create motion-aware parameters
  const transitionOptions = $derived(() => {
    if (respectMotionPreference && prefersReducedMotion.current) {
      return { ...finalParams, duration: 0, delay: 0 };
    }
    return finalParams;
  });

  // Use $derived.by for proper reactivity tracking across component boundaries
  let hidden: boolean = $derived.by(() => {
    if (!navState) return true;
    return navState.hidden;
  });

  let { base, list, active, nonActive } = $derived(navUl({ hidden, breakpoint: navBreakpoint ?? "md" }));

  $effect(() => {
    if (!navState) return;
    navState.activeClass = active({ class: clsx(theme?.active, styling?.active) });
    navState.nonActiveClass = nonActive({ class: clsx(theme?.nonActive, styling?.nonActive) });
    navState.itemClass = styling?.item;
    navState.activeUrl = activeUrl;
  });

  let divCls: string = $derived(base({ class: clsx(theme?.base, className) }));
  let ulCls: string = $derived(list({ class: clsx(theme?.list, styling?.list) }));
</script>

{#if !hidden}
  <div data-scope="nav-ul" data-part="base" {...restProps} class={divCls} transition:transition={transitionOptions()}>
    <ul class={ulCls} data-part="list">
      {@render children?.()}
    </ul>
  </div>
{:else}
  <div data-scope="nav-ul" data-part="base" {...restProps} class={divCls}>
    <ul class={ulCls} data-part="list">
      {@render children?.()}
    </ul>
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[NavUlProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1107)
## Props
@prop children
@prop activeUrl = $bindable()
@prop slideParams
@prop transition = slide
@prop transitionParams
@prop respectMotionPreference = true
@prop class: className
@prop classes
@prop ...restProps
-->
