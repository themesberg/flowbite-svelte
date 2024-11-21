<script lang="ts">
  import { getContext } from "svelte";
  import type { navbarType } from "$lib/types";
  import { type NavLiProps as Props, navLi } from ".";

  let { closeNav, href, children, aClass, class: className, ...restProps }: Props = $props();

  let breakPoint: navbarType["breakPoint"];

  const context = getContext<navbarType>("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  closeNav = context.closeNav ?? closeNav;
  const activeUrlStore = getContext("activeUrl") as { subscribe: (callback: (value: string) => void) => void };

  let navUrl = $state("");
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });

  // let currentUrl = $state();
  let isActive = $derived(navUrl ? href === navUrl : false);
  $effect(() => {
    $inspect("navUrl: ", navUrl);
  });

  const { base, link } = $derived(navLi({ active: isActive, breakPoint }));
</script>

<li class={base({ class: className })}>
  <a {href} onclick={closeNav} {...restProps} aria-current={isActive} class={link({ class: aClass })}>
    {@render children()}
  </a>
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: closeNav: () => void;
@props:href: string;
@props:children: Snippet;
@props:aClass: string;
@props:class: string;
-->
