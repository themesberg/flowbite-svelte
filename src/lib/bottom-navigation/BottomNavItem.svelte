<script lang="ts">
  import { getContext } from "svelte";
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from "svelte/elements";
  import { bottomNavItem } from "./index";
  import type { BottomNavItemProps, BottomNavContextType, BottomNavVariantType } from "$lib/types";
  import { twMerge } from "tailwind-merge";

  let { children, btnName, appBtnPosition = "middle", target, activeClass, href = "", btnClass, spanClass, ...restProps }: BottomNavItemProps = $props();

  const navType: BottomNavVariantType = getContext("navType");
  const context = getContext<BottomNavContextType>("bottomNavType") ?? {};

  let active: boolean = $state(false);

  const activeUrlStore = getContext("activeUrl") as { subscribe: (callback: (value: string) => void) => void };

  let navUrl = $state("");
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });

  const { base, span } = bottomNavItem({ navType, appBtnPosition });

  $effect(() => {
    active = navUrl ? href === navUrl : navUrl ? navUrl.startsWith(href) : false;
  });

  function getCommonClass() {
    return twMerge(base({ class: btnClass }), active && (activeClass ?? context.activeClass));
  }

  function getSpanClass() {
    return twMerge(span({ class: spanClass }), active && (activeClass ?? context.activeClass));
  }

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const commonProps: Record<string, any> = $derived({
    "aria-label": btnName,
    class: getCommonClass(),
    ...restProps
  });

  const anchorProps: HTMLAnchorAttributes = $derived({
    ...commonProps,
    href,
    target
  });

  const buttonProps: HTMLButtonAttributes = $derived({
    ...commonProps,
    type: "button" as const
  });
</script>

{#if href}
  <a {...anchorProps}>
    {@render children()}
    <span class={getSpanClass()}>{btnName}</span>
  </a>
{:else}
  <button {...buttonProps}>
    {@render children()}
    <span class={getSpanClass()}>{btnName}</span>
  </button>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[BottomNavItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L297)
## Props
@prop children
@prop btnName
@prop appBtnPosition = "middle"
@prop target
@prop activeClass
@prop href = ""
@prop btnClass
@prop spanClass
@prop ...restProps
-->
