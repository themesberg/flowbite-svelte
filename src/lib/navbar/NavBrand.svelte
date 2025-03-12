<script lang="ts">
  import { type NavBrandProps as Props, navbrand } from ".";
  import { getContext } from "svelte";
  import type { NavbarType } from "$lib/types";

  let { children, siteName, closeNav, aClass, spanClass, ...restProps }: Props = $props();

  const context = getContext<NavbarType>("navbarContext");
  closeNav = context.closeNav ?? closeNav;

  const { base, span } = $derived(navbrand());
</script>

<a href="/" onclick={closeNav} {...restProps} class={base({ class: aClass })}>
  {@render children?.()}
  {#if siteName}
    <span class={span({ class: spanClass })}>{siteName}</span>
  {/if}
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:siteName: any;
@props:closeNav: any;
@props:aClass: any;
@props:spanClass: any;
-->
