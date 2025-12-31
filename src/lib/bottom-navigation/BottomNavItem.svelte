<script lang="ts">
  import type { BottomNavItemProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";
  import { getBottomNavContext } from "$lib/context";
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
  import { bottomNavItem } from "./theme";

  let { children, btnName, appBtnPosition = "middle", class: className, classes, active: manualActive, ...restProps }: BottomNavItemProps = $props();

  // Support for deprecated props with fallback to new props
  const styling = $derived(classes);

  // Theme context
  const theme = $derived(getTheme("bottomNavItem"));

  const context = getBottomNavContext();

  let navUrl = $derived(context?.activeUrl || "");

  const { base, span } = $derived(bottomNavItem({ navType: context?.navType, appBtnPosition }));

  // Determine active state based on manual prop or URL matching
  let isActive = $derived.by(() => {
    const href = restProps.href ?? "";
    return manualActive !== undefined
      ? !!manualActive
      : navUrl
        ? href === "/"
          ? navUrl === "/"
          : href && (navUrl === href || navUrl.startsWith(href + "/") || (href !== "/" && navUrl.replace(/^https?:\/\/[^/]+/, "").startsWith(href)))
        : false;
  });

  function getCommonClass() {
    // Priority: theme (lowest) -> className/btnClass (highest)
    // Note: Classes<T> type intentionally omits "base" - use class prop for base element
    return base({
      class: clsx(theme?.base, className, isActive && context?.activeClass)
    });
  }

  function getSpanClass() {
    // Priority: theme (lowest) -> classes.span/spanClass (highest)
    return span({
      class: clsx(theme?.span, styling?.span, isActive && context?.activeClass)
    });
  }

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const commonProps: Record<string, any> = $derived({
    "aria-label": btnName,
    class: getCommonClass(),
    ...restProps
  });

  const anchorProps: HTMLAnchorAttributes = $derived({
    ...commonProps
  });

  const buttonProps: HTMLButtonAttributes = $derived({
    ...commonProps,
    type: "button" as const
  });
</script>

{#if restProps.href === undefined}
  <button data-scope="bottom-nav-item" data-part="base" {...buttonProps}>
    {@render children()}
    <span data-part="label" class={getSpanClass()}>{btnName}</span>
  </button>
{:else}
  <a data-scope="bottom-nav-item" data-part="base" {...anchorProps}>
    {@render children()}
    <span data-part="label" class={getSpanClass()}>{btnName}</span>
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L283)
## Props
@prop children
@prop btnName
@prop appBtnPosition = "middle"
@prop class: className
@prop classes
@prop active: manualActive
@prop ...restProps
-->
