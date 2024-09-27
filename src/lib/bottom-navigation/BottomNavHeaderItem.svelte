<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface $$Props extends HTMLButtonAttributes {
    itemName: string;
    active: boolean;
    defaultClass: string;
    activeClass: string;
  }

  export let itemName: $$Props['itemName'] = '';
  export let active: $$Props['active'] = false;
  export let defaultClass: $$Props['defaultClass'] = 'px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg';
  export let activeClass: $$Props['activeClass'] = 'px-5 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg';

  $: btnClass = active ? activeClass : defaultClass;
</script>

<button class={twMerge(btnClass, $$props.class)} {...$$restProps} on:click on:change on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave>
  {itemName}
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let itemName: $$Props['itemName'] = '';
@prop export let active: $$Props['active'] = false;
@prop export let defaultClass: $$Props['defaultClass'] = 'px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg';
@prop export let activeClass: $$Props['activeClass'] = 'px-5 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg';
-->
