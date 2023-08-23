<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import CloseButton from '../utils/CloseButton.svelte';
  import { createEventDispatcher } from 'svelte';

  export let position: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky' = 'sticky';
  export let dismissable: boolean = true;
  export let bannerType: 'default' | 'bottom' | 'cta' | 'signup' | 'info' = 'default';
  export let divClass: string = 'z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600';
  export let innerClass: string = 'flex';

  let open = true;
  const dispatch = createEventDispatcher();
  $: dispatch(open ? 'open' : 'close');

  const divClasses = {
    default: 'top-0 left-0 w-full border-b border-gray-200 bg-gray-50',
    bottom: 'bottom-0 left-0 w-full border-t border-gray-200 bg-gray-50',
    cta: 'flex-col md:flex-row  w-[calc(100%-2rem)] -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6',
    signup: 'top-0 left-0 w-full border-b border-gray-200 bg-gray-50',
    info: 'top-0 left-0 flex-col w-full border-b border-gray-200 md:flex-row bg-gray-50'
  };

  const insideDivClasses = {
    default: 'items-center mx-auto',
    bottom: 'items-center mx-auto',
    cta: 'flex-col items-start mb-3 mr-4 md:items-center md:flex-row md:mb-0',
    signup: 'items-center flex-shrink-0 w-full mx-auto sm:w-auto',
    info: 'items-center flex-shrink-0'
  };

  $: divClass = twMerge(position, divClass, divClasses[bannerType], $$props.classDiv);
  $: div2Class = twMerge(innerClass, insideDivClasses[bannerType], $$props.classInner);

  function close(e: MouseEvent) {
    e.preventDefault();
    open = false;
  }
</script>

{#if open}
  <div tabindex="-1" class={divClass} {...$$restProps}>
    <slot name="header" />
    <div class={div2Class}>
      <slot />
    </div>
    {#if dismissable}
      <div class="flex items-center">
        <CloseButton class="-mx-1.5 -my-1.5" color={$$restProps.color} on:click={close} on:click on:change on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave />
      </div>
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let position: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky' = 'sticky';
@prop export let dismissable: boolean = true;
@prop export let bannerType: 'default' | 'bottom' | 'cta' | 'signup' | 'info' = 'default';
@prop export let divClass: string = 'z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600';
@prop export let innerClass: string = 'flex';
-->
