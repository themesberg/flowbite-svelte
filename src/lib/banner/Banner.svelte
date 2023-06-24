<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import CloseButton from '../utils/CloseButton.svelte';

  export let id: string = 'sticky-banner';
  export let position: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky' = 'sticky';
  export let dismissable: boolean = true;
  export let bannerType: 'default' | 'bottom' | 'cta' | 'signup' | 'info' = 'default';
  export let divClass: string = 'z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600';
  export let innerClass: string = 'flex';

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
  let show = true;
  $: handleHide = () => {
    show = !show;
  };
</script>

{#if show}
  <div {id} tabindex="-1" class={divClass} {...$$restProps}>
    <slot name="header" />
    <div class={div2Class}>
      <slot />
    </div>
    {#if dismissable}
      <div class="flex items-center">
        <CloseButton
          class="-mx-1.5 -my-1.5"
          color={$$restProps.color}
          on:click={handleHide}
          on:click
          on:change
          on:keydown
          on:keyup
          on:focus
          on:blur
          on:mouseenter
          on:mouseleave />
      </div>
    {/if}
  </div>
{/if}

<!--
  @component
  ## Features
  [Go to Banner](https://flowbite-svelte.com/docs/components/banner)
  - Setup
  - Default sticky banner
  - Bottom banner position
  - Marketing CTA banner
  - Newsletter sign-up banner
  - Informational banner
  ## Props
  @prop id: string = 'sticky-banner';
  @prop position: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky' = 'sticky';
  @prop dismissable: boolean = true;
  @prop bannerType: 'default' | 'bottom' | 'cta' | 'signup' | 'info' = 'default';
  @prop divClass: string = 'z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600';
  @prop insideDiv: string = 'flex';
  ## Event
  - on:click
  - on:change
  - on:keydown
  - on:keyup
  - on:focus
  - on:blur
  - on:mouseenter
  - on:mouseleave
  ## Example
  ```
  <script>
    import { Banner } from "flowbite-svelte"
  </script>

  <Banner id="default-banner" position="absolute">
    <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
      <span class="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
          </svg>
          <span class="sr-only">Light bulb</span>
      </span>
      <span>New brand identity has been launched for the <a href="https://flowbite.com" class="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">Flowbite Library</a></span>
    </p>
  </Banner>
  ```
-->
