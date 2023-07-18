<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let itemName: string = '';
  export let active: boolean = false;
  export let defaultClass: string =
    'px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg';
  export let activeClass: string =
    'px-5 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg';

  $: btnClass = active ? activeClass : defaultClass;
</script>

<button
  class={twMerge(btnClass, $$props.class)}
  {...$$restProps}
  on:click
  on:change
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave>
  {itemName}
</button>

<!--
  @component
  ## Features
  [Go to Bottom Navigation](https://flowbite-svelte.com/docs/components/bottom-navigation)
  ## Props
  @prop itemName: string = '';
  @prop active: boolean = false;
  @prop defaultClass: string = 'px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg';
  @prop activeClass: string = 'px-5 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg';
  ## event
  - on:click
  - on:change
  - on:keydown
  - on:keyup
  - on:focus
  - on:blur
  - on:mouseenter
  - on:mouseleave
-->
