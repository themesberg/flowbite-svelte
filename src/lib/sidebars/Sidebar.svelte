<script lang="ts" context="module">
  export type SidebarType = {
    activeClass: string;
    nonActiveClass: string;
  };
</script>

<script lang="ts">
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { writable } from 'svelte/store';

  const activeUrlStore = writable('');

  export let activeUrl: string = '';
  export let asideClass: string = 'w-64';
  export let nonActiveClass: string = 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
  export let activeClass: string = 'flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';

  setContext<SidebarType>('sidebarContext', { activeClass, nonActiveClass });

  $: {
    activeUrlStore.set(activeUrl);
  }
  setContext('activeUrl', activeUrlStore);
</script>

<aside {...$$restProps} class={twMerge(asideClass, $$props.class)} aria-label="Sidebar">
  <slot />
</aside>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let activeUrl: string = '';
@prop export let asideClass: string = 'w-64';
@prop export let nonActiveClass: string = 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
@prop export let activeClass: string = 'flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
-->
