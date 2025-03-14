<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { navbar_li } from "./theme";
  import type { NavbarLiType, NavLiProps as Props } from "./type";
  import type { Writable } from "svelte/store";

  const context = getContext<NavbarLiType>("navbarContext") ?? {};
  let hiddenStore = getContext<Writable<boolean>>("navHidden");
  $effect(() => {
    console.log($hiddenStore, "hs");
  });
  let { children, activeClass = context.activeClass, nonActiveClass = context.nonActiveClass, class: className, ...restProps }: Props = $props();

  const activeUrlStore = getContext("activeUrl") as { subscribe: (callback: (value: string) => void) => void };

  let navUrl = $state("");
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });

  let active = $derived(navUrl ? restProps.href === navUrl : false);
  let liClass = $derived(navbar_li({ hidden: $hiddenStore, class: clsx(active ? activeClass : nonActiveClass, className) }));

  $effect(() => {
    console.log("CHANGE BUTTON TO DIV - NavLi", liClass);
  });
</script>

<li>
  {#if restProps.href === undefined}
    <button role="presentation" {...restProps} class={"hover:text-primary-500"}>
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
