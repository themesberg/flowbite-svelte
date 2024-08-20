<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { TransitionTypes, TransitionParamTypes } from '../types';
  import { twMerge } from 'tailwind-merge';
  import { uiHelpers, applyTransition } from '$lib';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface Props extends HTMLButtonAttributes {
    children: Snippet;
    arrowup?: Snippet;
    arrowdown?: Snippet;
    iconSlot?: Snippet;
    isOpen?: boolean | undefined;
    btnClass?: string | undefined;
    label: string | undefined;
    spanClass?: string | undefined;
    ulClass?: string | undefined;
    transitionType?: TransitionTypes;
    transitionParams?: TransitionParamTypes;
    svgClass?: string | undefined | null;
  }

  let { children, arrowup, arrowdown, iconSlot, isOpen, btnClass, label, spanClass, ulClass, transitionType = 'slide', transitionParams, svgClass, class: className, ...restProps }: Props = $props();

  let btnCls = twMerge('flex items-center w-full text-base font-normal text-gray-900 rounded transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700', btnClass);

  let spanCls: string = twMerge('flex-1 ms-3 text-left whitespace-nowrap', spanClass);
  let ulCls: string = twMerge('py-2 space-y-2', ulClass);
  let svgCls: string = twMerge('h-3 w-3 text-gray-800 dark:text-white', svgClass);

  let sidebarDropdown = uiHelpers();
  sidebarDropdown.isOpen = isOpen ? isOpen : false;
  let handleDropdown = sidebarDropdown.toggle;

  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    isOpen = sidebarDropdown.isOpen;
    // $inspect('dropdown isOpen: ', isOpen)
  });
</script>

<li class={className}>
  <button {...restProps} onclick={() => handleDropdown()} type="button" class={btnCls} aria-controls="sidebar-dropdown">
    {#if iconSlot}
      {@render iconSlot()}
    {/if}
    <span class={spanCls}>{label}</span>
    {#if isOpen}
      {#if arrowup}
        {@render arrowup()}
      {:else}
        <svg class={svgCls} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
      {/if}
    {:else if arrowdown}
      {@render arrowdown()}
    {:else}
      <svg class={svgCls} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    {/if}
  </button>
  {#if isOpen}
    <ul class={ulCls} transition:applyTransition={transitionParams}>
      {@render children()}
    </ul>
  {/if}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop arrowup
@prop arrowdown
@prop iconSlot
@prop isOpen
@prop btnClass
@prop label
@prop spanClass
@prop ulClass
@prop transitionType = 'slide'
@prop transitionParams
@prop svgClass
@prop class: className
@prop ...restProps
-->
