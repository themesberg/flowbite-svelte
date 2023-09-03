<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  export let aClass: string = 'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
  export let href: string = '';
  export let label: string = '';
  export let activeClass: string = 'flex items-center p-2 pl-11 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
  export let nonActiveClass: string = aClass;
  export let active: boolean = false;

  const activeUrlStore = getContext('activeUrl') as { subscribe: (callback: (value: string) => void) => void };

  let sidebarUrl = '';
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });

  $: active = sidebarUrl ? href === sidebarUrl : false;

  $: aClass = twMerge(active ? activeClass : nonActiveClass, $$props.class);
</script>

<li>
  <a {...$$restProps} {href} on:blur on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover class={aClass}>
    {label}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let aClass: string = 'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
@prop export let href: string = '';
@prop export let label: string = '';
@prop export let activeClass: string = 'flex items-center p-2 pl-11 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
@prop export let active: boolean = false;
-->
