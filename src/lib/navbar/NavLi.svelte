<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { navbar_li } from "./theme";
  import type { NavbarLiType, NavLiProps as Props } from "./type";

  const context = getContext<NavbarLiType>("navbarContext") ?? {};

  let { children, activeClass = context.activeClass, nonActiveClass = context.nonActiveClass, class: className, ...restProps }: Props = $props();

  const activeUrlStore = getContext("activeUrl") as { subscribe: (callback: (value: string) => void) => void };

  let navUrl = $state("");
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });

  let active = $derived(navUrl ? restProps.href === navUrl : false);
  let liClass = $derived(navbar_li({ class: clsx(active ? activeClass : nonActiveClass, className) }));

  console.log("CHANGE BUTTON TO DIV - NavLi");
</script>

<li>
  {#if restProps.href === undefined}
    <button role="presentation" {...restProps} class={[liClass]}>
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
@prop export let href: $$Props['href'] = '';
@prop export let activeClass: $$Props['activeClass'] = undefined;
@prop export let nonActiveClass: $$Props['nonActiveClass'] = undefined;
-->
