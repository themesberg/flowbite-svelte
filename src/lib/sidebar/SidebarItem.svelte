<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { SidebarType } from './Sidebar.svelte';

  export let href: string = '';
  export let label: string = '';
  export let spanClass: string = 'ms-3';
  export let activeClass: string | undefined = undefined;
  export let nonActiveClass: string | undefined = undefined;
  // export let active: boolean = false;

  const context = getContext<SidebarType>('sidebarContext') ?? {};
  const activeUrlStore = getContext('activeUrl') as { subscribe: (callback: (value: string) => void) => void };

  let sidebarUrl = '';
  activeUrlStore.subscribe((value) => {
    // console.log('value: ', value)
    sidebarUrl = value;
  });
  // console.log('sidbarUrl: ', sidebarUrl)
  // console.log('href: ', href)
  $: active = sidebarUrl ? href === sidebarUrl : false;
  // console.log('active: ', active)

  $: aClass = twMerge(active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass, $$props.class);
</script>

<li>
  <a {...$$restProps} {href} on:blur on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover class={aClass}>
    <slot name="icon" />
    <span class={spanClass}>{label}</span>
    {#if $$slots.subtext}
      <slot name="subtext" />
    {/if}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let href: string = '';
@prop export let label: string = '';
@prop export let spanClass: string = 'ms-3';
@prop export let activeClass: string | undefined = undefined;
@prop export let nonActiveClass: string | undefined = undefined;
@prop export let active: boolean = false;
-->
