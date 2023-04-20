<script lang="ts">
  import classNames from 'classnames';
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
    class={classNames(btnClass, $$props.class)}
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
    <ul class={ulClass} transition:multiple|local={transitionParams}>
      <slot />
    </ul>
  {/if}
</li>
