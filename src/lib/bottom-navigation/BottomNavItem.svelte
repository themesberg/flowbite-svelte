<script lang="ts">
  import { getContext } from "svelte";
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from "svelte/elements";
  import { bottomNavItem } from "./index";
  import type { BottomNavItemProps, BottomNavContextType, BottomNavVariantType } from "$lib/types";
  import { twMerge } from "tailwind-merge";

  let { children, btnName, appBtnPosition = "middle", target, activeClass, href = "", btnClass, spanClass, active: manualActive, ...restProps }: BottomNavItemProps = $props();

  const navType: BottomNavVariantType = getContext("navType");
  const context = getContext<BottomNavContextType>("bottomNavType") ?? {};

  const activeUrlStore = getContext("activeUrl") as { subscribe: (callback: (value: string) => void) => void };

  let navUrl = $state("");
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });

  const { base, span } = bottomNavItem({ navType, appBtnPosition });

  // Determine active state based on manual prop or URL matching
  let isActive = $derived(manualActive !== undefined ? !!manualActive : navUrl ? (href === "/" ? navUrl === "/" : href && (navUrl === href || navUrl.startsWith(href + "/") || (href !== "/" && navUrl.replace(/^https?:\/\/[^/]+/, "").startsWith(href)))) : false);

  function getCommonClass() {
    return twMerge(base({ class: btnClass }), isActive && (activeClass ?? context.activeClass));
  }

  function getSpanClass() {
    return twMerge(span({ class: spanClass }), isActive && (activeClass ?? context.activeClass));
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

{#if typeof href === "string" && href.length > 0}
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
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L259)
## Props
@prop children
@prop btnName
@prop appBtnPosition = "middle"
@prop target
@prop activeClass
@prop href = ""
@prop btnClass
@prop spanClass
@prop active: manualActive
@prop ...restProps
-->
