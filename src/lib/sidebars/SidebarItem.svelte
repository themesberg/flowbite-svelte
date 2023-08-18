<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { SidebarType } from './Sidebar.svelte';

  export let href: string = '';
  export let label: string = '';
  export let spanClass: string = 'ml-3';
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
  [Go to Sidebar](https://flowbite-svelte.com/docs/components/sidebar)
  ## Props
  @prop aClass: string = 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
  @prop href: string = '';
  @prop label: string = '';
  @prop spanClass: string = 'ml-3';
  @prop activeClass: string = 'flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
  @prop active: boolean = false; 
-->
