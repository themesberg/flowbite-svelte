<script lang="ts">
  import { getContext } from "svelte";
  import { type BottomNavItemProps as Props, type BottomNavContextType, type BottomNavVariantType, bottomNavItem } from "./index";
  import { twMerge } from "tailwind-merge";
  import { page } from "$app/stores";

  let { children, btnName, appBtnPosition = "middle", target, activeClass, href = "", btnClass, spanClass, ...restProps }: Props = $props();

  const navType: BottomNavVariantType = getContext("navType");
  const context = getContext<BottomNavContextType>("bottomNavType") ?? {};
  console.log("context", context);
  let currentUrl = $state($page.url.pathname);
  let active: boolean = $state(false);
  // let btnCls: string = $state('');
  // let spanCls: string = $state('');
  const { base, span } = bottomNavItem({ navType, appBtnPosition });
  $effect(() => {
    currentUrl = $page.url.pathname;
    active = href === currentUrl;
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
@props:appBtnPosition: AppBtnVariantProps<typeof bottomNav>['position'] = 'middle';
@props:target: string;
@props:activeClass: string;
@props:href: string = '';
@props:btnClass: string;
@props:spanClass: string;
-->
