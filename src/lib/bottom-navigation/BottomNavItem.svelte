<script lang="ts">
  import { getContext } from "svelte";
  import { type BottomNavItemProps as Props, type BottomNavContextType, type BottomNavVariantType, bottomNavItem } from "./index";
  import { twMerge } from "tailwind-merge";

  let { children, btnName, appBtnPosition = "middle", target, activeClass, href = "", btnClass, spanClass, ...restProps }: Props = $props();

  const navType: BottomNavVariantType = getContext("navType");
  const context = getContext<BottomNavContextType>("bottomNavType") ?? {};
  
  let active: boolean = $state(false);

  const activeUrlStore = getContext('activeUrl') as { subscribe: (callback: (value: string) => void) => void };

  let navUrl = $state('');
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  // let btnCls: string = $state('');
  // let spanCls: string = $state('');
  const { base, span } = bottomNavItem({ navType, appBtnPosition });
  $effect(() => {
    active = navUrl ? href === navUrl : navUrl ? navUrl.startsWith(href) : false;
  });

  let btnCls = $derived(twMerge(base({ class: btnClass }), active && (activeClass ?? context.activeClass)));

  let spanCls = $derived(twMerge(span({ class: spanClass }), active && (activeClass ?? context.activeClass)));
</script>

<svelte:element this={href ? "a" : "button"} aria-label={btnName} {href} {target} role={href ? "link" : "button"} {...restProps} class={btnCls}>
  {@render children()}
  <span class={spanCls}>{btnName}</span>
</svelte:element>

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
