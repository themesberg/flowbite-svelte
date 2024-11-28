<script lang="ts">
  import { getContext } from "svelte";
  import type { navbarType } from "$lib/types";
  import { navhamburger, type NavHamburgerProps as Props } from ".";

  let { toggleNav, class: className, ...restProps }: Props = $props();

  let breakPoint;
  const context = getContext<navbarType>("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  const toggleButton = $derived(navhamburger({ breakPoint, className }));
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
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: toggleNav: any;
@props:class: string;
-->
