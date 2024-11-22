<script lang="ts">
  import { getContext } from "svelte";
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
  import { type BottomNavItemProps as Props, type BottomNavContextType, type BottomNavVariantType, bottomNavItem } from "./index";
  import { twMerge } from "tailwind-merge";

  let { children, btnName, appBtnPosition = "middle", target, activeClass, href = "", btnClass, spanClass, ...restProps }: Props = $props();

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

  $effect(() => {
    console.log('commonProps: ', commonProps)
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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:btnName: string;
@props:appBtnPosition: AppBtn"static" | "fixed" | "absolute" | "relative" | "sticky" | undefined = "middle";
@props:target: string;
@props:activeClass: string;
@props:href: string = "";
@props:btnClass: string;
@props:spanClass: string;
-->
