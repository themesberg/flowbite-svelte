<script lang="ts">
  import { getContext } from 'svelte';
  import { page } from '$app/stores';
  import type { navbarType } from '$lib/types';
  import { type NavLiProps as Props, navLi } from '.';

  let { closeNav, href, children, aClass, activeClass, nonActiveClass, class: className, ...restProps }: Props = $props();

  let breakPoint: navbarType['breakPoint'];

  const context = getContext<navbarType>('navbarContext');
  breakPoint = context.breakPoint ?? 'md';
  closeNav = context.closeNav ?? closeNav;
  let currentUrl = $state($page.url.pathname);
  let isActive = $derived(currentUrl === href);
  $effect(() => {
    currentUrl = $page.url.pathname;
  });

  const { base, link } = $derived(navLi({ active: isActive, breakPoint }));
</script>

<li class={base({ class: className })}>
  <a {href} onclick={closeNav} {...restProps} aria-current={currentUrl === href} class={link({ class: aClass })}>
    {@render children()}
  </a>
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop closeNav
@prop href
@prop children
@prop aClass
@prop activeClass
@prop nonActiveClass
@prop class: className
@prop ...restProps
-->
