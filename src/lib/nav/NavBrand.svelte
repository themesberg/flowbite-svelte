<script lang="ts">
  import { type NavBrandProps as Props, navbrand } from ".";
  import { getContext } from "svelte";
  import type { navbarType } from "$lib/types";

  let { children, siteName, closeNav, aClass, spanClass, ...restProps }: Props = $props();

  const context = getContext<navbarType>("navbarContext");
  closeNav = context.closeNav ?? closeNav;

  const { base, span } = $derived(navbrand());
</script>

<a href="/" onclick={closeNav} {...restProps} class={base({ class: aClass })}>
  {#if children}
    {@render children()}
  {/if}
  {#if siteName}
    <span class={span({ class: spanClass })}>{siteName}</span>
  {/if}
</a>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:siteName: string | undefined | null;
@props:closeNav: () => void;
@props:aClass: string;
@props:spanClass: string;
-->
