<script lang="ts">
  import { type BottomNavContextType, type BottomNavItemProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { getContext } from "svelte";
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
  import { bottomNavItem, type BottomNavItemTheme } from ".";

  let { children, btnName, appBtnPosition = "middle", activeClass, class: className, classes, btnClass, spanClass, active: manualActive, ...restProps }: BottomNavItemProps = $props();

  warnThemeDeprecation("BottomNavItem", { spanClass, btnClass }, { spanClass: "span", btnClass: "class" });
  const styling = $derived(classes ?? { span: spanClass });

  // Theme context
  const theme = getTheme("bottomNavItem");

  const context = getContext<BottomNavContextType>("bottomNavType") ?? {};

  let navUrl = $derived(context.activeUrl || "");

  const { base, span } = $derived(bottomNavItem({ navType: context.navType, appBtnPosition }));

  // Determine active state based on manual prop or URL matching
  let isActive = $derived.by(() => {
    const href = restProps.href ?? "";
    return manualActive !== undefined ? !!manualActive : navUrl ? (href === "/" ? navUrl === "/" : href && (navUrl === href || navUrl.startsWith(href + "/") || (href !== "/" && navUrl.replace(/^https?:\/\/[^/]+/, "").startsWith(href)))) : false;
  });

  function getCommonClass() {
    return base({ class: clsx(isActive && (activeClass ?? context.activeClass), (theme as BottomNavItemTheme)?.base, className ?? btnClass) });
  }

  function getSpanClass() {
    return span({ class: clsx(isActive && (activeClass ?? context.activeClass), (theme as BottomNavItemTheme)?.span, styling.span) });
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
  <button {...buttonProps}>
    {@render children()}
    <span class={getSpanClass()}>{btnName}</span>
  </button>
{:else}
  <a {...anchorProps}>
    {@render children()}
    <span class={getSpanClass()}>{btnName}</span>
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BottomNavItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L263)
## Props
@prop children
@prop btnName
@prop appBtnPosition = "middle"
@prop activeClass
@prop class: className
@prop classes
@prop btnClass
@prop spanClass
@prop active: manualActive
@prop ...restProps
-->
