<script lang="ts">
  import { getContext, setContext } from "svelte";
  import { sineIn } from "svelte/easing";
  import { prefersReducedMotion } from "svelte/motion";
  import { writable } from "svelte/store";
  import { slide, fly, fade, scale } from "svelte/transition";
  import clsx from "clsx";
  import { navbarUl, type NavbarUlTheme } from "./theme";
  import type { NavbarState, NavUlProps } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let navState = getContext<NavbarState>("navState");

  let { children, activeUrl, ulClass, slideParams, transition = slide, transitionParams, activeClass, nonActiveClass, respectMotionPreference = true, class: clasName, classes, ...restProps }: NavUlProps = $props();

  warnThemeDeprecation("NavUl", { ulClass, activeClass, nonActiveClass }, { ulClass: "ul", activeClass: "active", nonActiveClass: "nonActive" });
  const styling = $derived(classes ?? { ul: ulClass, active: activeClass, nonActive: nonActiveClass });

  const theme = getTheme("navUl");

  // Default parameters for different transitions
  const getDefaultParams = (transitionFn: any) => {
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

  const activeUrlStore = writable<string>("");

  let hidden: boolean = $derived(navState.hidden ?? true);

  let { base, ul, active, nonActive } = $derived(navbarUl({ hidden }));

  $effect(() => {
    navState.activeClass = active({ class: clsx((theme as NavbarUlTheme)?.active, styling.active) });
    navState.nonActiveClass = nonActive({ class: clsx((theme as NavbarUlTheme)?.nonActive, styling.nonActive) });
  });

  $effect(() => {
    activeUrlStore.set(activeUrl ?? "");
  });
  setContext("activeUrl", activeUrlStore);

  let divCls: string = $derived(base({ class: clsx((theme as NavbarUlTheme)?.base, clasName) }));
  let ulCls: string = $derived(ul({ class: clsx((theme as NavbarUlTheme)?.ul, styling.ul) }));
</script>

{#if !hidden}
  <div {...restProps} class={divCls} transition:transition={transitionOptions()}>
    <ul class={ulCls}>
      {@render children?.()}
    </ul>
  </div>
{:else}
  <div {...restProps} class={divCls}>
    <ul class={ulCls}>
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
@prop activeUrl
@prop ulClass
@prop slideParams
@prop transition = slide
@prop transitionParams
@prop activeClass
@prop nonActiveClass
@prop respectMotionPreference = true
@prop class: clasName
@prop classes
@prop ...restProps
-->
