<script lang="ts">
  import { type NavBrandProps as Props, navbrand } from '.';
  import { getContext } from 'svelte';
  import type { navbarType } from '$lib/types';

  let { children, siteName, closeNav, aClass, spanClass, ...restProps }: Props = $props();

  const context = getContext<navbarType>('navbarContext');
  closeNav = context.closeNav ?? closeNav;

  const { base, span } = $derived(navbrand());
</script>

<a href="/" onclick={closeNav} class={base({class: aClass})} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
  {#if siteName}
    <span class={span({class: spanClass})}>{siteName}</span>
  {/if}
</a>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop siteName
@prop closeNav
@prop aClass
@prop spanClass
@prop ...restProps
-->
