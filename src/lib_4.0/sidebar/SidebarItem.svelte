<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import type { Action } from 'svelte/action';
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { SidebarType } from './Sidebar.svelte';

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  interface $$Props extends HTMLAnchorAttributes {
    action?: Action<HTMLElement, any>;
    params?: any;
    href?: string;
    label?: string;
    spanClass?: string;
    activeClass?: string;
    nonActiveClass?: string;
  }

  export let action: NonNullable<$$Props['action']> = () => {};
  export let params: $$Props['params'] = {};
  export let href: $$Props['href'] = '';
  export let label: $$Props['label'] = '';
  export let spanClass: $$Props['spanClass'] = 'ms-3';
  export let activeClass: $$Props['activeClass'] = undefined;
  export let nonActiveClass: $$Props['nonActiveClass'] = undefined;

  const context = getContext<SidebarType>('sidebarContext') ?? {};
  const activeUrlStore = getContext('activeUrl') as { subscribe: (callback: (value: string) => void) => void };

  let sidebarUrl = '';
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });

  $: active = sidebarUrl ? href === sidebarUrl : false;

  $: aClass = twMerge(active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass, $$props.class);
</script>

<li>
  <a {...$$restProps} {href} use:action={params} on:blur on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover class={aClass}>
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
@prop export let action: NonNullable<$$Props['action']> = () => {};
@prop export let params: $$Props['params'] = {};
@prop export let href: $$Props['href'] = '';
@prop export let label: $$Props['label'] = '';
@prop export let spanClass: $$Props['spanClass'] = 'ms-3';
@prop export let activeClass: $$Props['activeClass'] = undefined;
@prop export let nonActiveClass: $$Props['nonActiveClass'] = undefined;
-->
