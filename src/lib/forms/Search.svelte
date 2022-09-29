<script lang="ts">
  import Input from './Input.svelte';
  import type { Size } from '$lib/types';
  export let inputClass: string = 'pl-10';
  export let size: Size = 'lg';

  $: {
    $$restProps.placeholder = $$restProps.placeholder || 'Search';
  }
  const svgSize = {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  };
</script>

<div class="relative w-full text-sm text-gray-500 dark:text-gray-400 {$$props.class}">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg
      class={svgSize[size]}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <Input
    on:blur
    on:change
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:paste
    type="search"
    {size}
    {...$$restProps}
    class={inputClass} />
  <div class="flex absolute inset-y-0 right-0 items-center pr-2.5">
    <slot />
  </div>
</div>
