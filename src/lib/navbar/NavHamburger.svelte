<script lang="ts">
  import { getContext } from "svelte";
  import type { NavbarType } from "$lib/types";
  import { navhamburger, type NavHamburgerProps as Props } from ".";
  import clsx from "clsx";

  let { toggleNav, class: className, ...restProps }: Props = $props();

  const context = getContext<NavbarType>("navbarContext");
  let breakPoint = $derived(context.breakPoint ?? "md");
  const toggleButton = $derived(navhamburger({ breakPoint, class: clsx(className) }));
  // const handletoggleNav = () => {
  //   toggleNav();
  //   console.log('toggleNav clicked')
  // }
</script>

<button onclick={toggleNav} type="button" {...restProps} class={toggleButton}>
  <span class="sr-only">Open main menu</span>
  <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
  </svg>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: toggleNav: any;
@props:class: string;
-->
