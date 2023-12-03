<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { NavbarLiType } from './NavUl.svelte';

  export let href: string = '';
  export let activeClass: string | undefined = undefined;
  export let nonActiveClass: string | undefined = undefined;

  const context = getContext<NavbarLiType>('navbarContext') ?? {};
  const activeUrlStore = getContext('activeUrl') as { subscribe: (callback: (value: string) => void) => void };

  let navUrl = '';
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });

  $: active = navUrl ? href === navUrl : false;

  $: liClass = twMerge('block py-2 pe-4 ps-3 md:p-0 rounded md:border-0', active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass, $$props.class);
  // $: console.log()
</script>

<li>
  <svelte:element this={href ? 'a' : 'div'} role={href ? undefined : 'link'} {href} {...$$restProps} on:blur on:change on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover class={liClass}>
    <slot />
  </svelte:element>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let href: string = '';
@prop export let activeClass: string | undefined = undefined;
@prop export let nonActiveClass: string | undefined = undefined;
-->
