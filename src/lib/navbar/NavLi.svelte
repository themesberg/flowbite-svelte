<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { navbar_li } from "./theme";
  import type { NavbarState, NavLiProps as Props } from "./type";

  let navState = getContext<NavbarState>("navState");

  let { children, activeClass, nonActiveClass, class: className, onclick, ...restProps }: Props = $props();

  const activeUrlStore = getContext("activeUrl") as { subscribe: (callback: (value: string) => void) => void };

  let navUrl = $state("");
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });

  let active = $derived(navUrl ? restProps.href === navUrl : false);
  let liClass = $derived(navbar_li({ hidden: navState.hidden, class: clsx(active ? (activeClass ?? navState.activeClass) : (nonActiveClass ?? navState.nonActiveClass), className) }));
</script>

<li>
  {#if restProps.href === undefined}
    <button role="presentation" {...restProps} class={liClass} {onclick}>
      {@render children?.()}
    </button>
  {:else}
    <a {...restProps} class={liClass}>
      {@render children?.()}
    </a>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:activeClass: any = context.activeClass;
@props:nonActiveClass: any = context.nonActiveClass;
@props:class: string;
-->
