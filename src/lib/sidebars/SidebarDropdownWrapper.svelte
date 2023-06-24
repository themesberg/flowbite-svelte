<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { fade, blur, fly, slide } from 'svelte/transition';
  // import { quintOut } from 'svelte/easing';
  import ChevronDown from '../utils/ChevronDown.svelte';
  import ChevronUp from '../utils/ChevronUp.svelte';
  import type { TransitionTypes, TransitionParamTypes } from '../types';

  export let btnClass: string =
    'flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
  export let label: string = '';
  export let spanClass: string = 'flex-1 ml-3 text-left whitespace-nowrap';
  export let ulClass: string = 'py-2 space-y-2';
  export let transitionType: TransitionTypes = 'slide';
  export let transitionParams: TransitionParamTypes = {};

  // make a custom transition function that returns the desired transition
  const multiple = (node: HTMLElement, params: any) => {
    switch (transitionType) {
      case 'blur':
        return blur(node, params);
      case 'fly':
        return fly(node, params);
      case 'fade':
        return fade(node, params);
      default:
        return slide(node, params);
    }
  };

  export let isOpen = false;
  const handleDropdown = () => {
    isOpen = !isOpen;
  };
</script>

<li>
  <button
    {...$$restProps}
    on:click={() => handleDropdown()}
    type="button"
    class={twMerge(btnClass, $$props.class)}
    aria-controls="sidebar-dropdown">
    <slot name="icon" />
    <span class={spanClass}>{label}</span>
    {#if isOpen}
      {#if $$slots.arrowup}
        <slot name="arrowup" />
      {:else}
        <ChevronUp />
      {/if}
    {:else if $$slots.arrowdown}
      <slot name="arrowdown" />
    {:else}
      <ChevronDown />
    {/if}
  </button>
  {#if isOpen}
    <ul class={ulClass} transition:multiple={transitionParams}>
      <slot />
    </ul>
  {/if}
</li>

<!--
  @component
  ## Features
  [Go to Sidebar](https://flowbite-svelte.com/docs/components/sidebar)
  ## Props
  @prop btnClass: string = 'flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
  @prop label: string = '';
  @prop spanClass: string = 'flex-1 ml-3 text-left whitespace-nowrap';
  @prop ulClass: string = 'py-2 space-y-2';
  @prop transitionType: TransitionTypes = 'slide';
  @prop transitionParams: TransitionParamTypes = {};
  ## Example
  ```
  <script>
    import { page } from '$app/stores';
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem } from 'flowbite-svelte';
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';
    $: activeUrl = $page.url.pathname
    $: containPath = ()=>{
      // add your logic here
      true
    }
  </script>

  <Sidebar>
    <SidebarWrapper>
      <SidebarGroup>
        <SidebarItem label="Dashboard" active={activeUrl === '/dashboard'} />
        <SidebarDropdownWrapper label="E-commerce" isOpen={containPath}>
          <SidebarDropdownItem label="Products" href='/components/products' active={activeUrl === '/components/products'} />
          <SidebarDropdownItem label="Sidebar" href='/docs/components/sidebar' active={activeUrl === '/docs/components/sidebar'}/>
        </SidebarDropdownWrapper>
        <SidebarDropdownWrapper label="Items">
          <SidebarDropdownItem label="Item 1" href='/components/item1' active={activeUrl === '/components/item'} />
          <SidebarDropdownItem label="Item 2" href='/components/item2' active={activeUrl === '/components/billing'} />
        </SidebarDropdownWrapper>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
  ```
  
-->
