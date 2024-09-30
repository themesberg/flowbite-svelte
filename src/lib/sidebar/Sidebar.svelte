<script lang="ts" context="module">
  export type SidebarType = {
    activeClass: string;
    nonActiveClass: string;
  };
</script>

<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { writable } from 'svelte/store';

  interface $$Props extends HTMLAttributes<HTMLElement> {
    activeUrl?: string;
    asideClass?: string;
    nonActiveClass?: string;
    activeClass?: string;
    ariaLabel?: string;
  }

  export let activeUrl: NonNullable<$$Props['activeUrl']> = '';
  export let asideClass: $$Props['asideClass'] = 'w-64';
  export let nonActiveClass: NonNullable<$$Props['nonActiveClass']> = 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
  export let activeClass: NonNullable<$$Props['activeClass']> = 'flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
  export let ariaLabel: $$Props['ariaLabel'] = 'Sidebar';

  const activeUrlStore = writable('');
  setContext<SidebarType>('sidebarContext', { activeClass, nonActiveClass });

  $: {
    activeUrlStore.set(activeUrl);
  }
  setContext('activeUrl', activeUrlStore);
</script>

<aside {...$$restProps} class={twMerge(asideClass, $$props.class)} aria-label={ariaLabel}>
  <slot />
</aside>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let activeUrl: NonNullable<$$Props['activeUrl']> = '';
@prop export let asideClass: $$Props['asideClass'] = 'w-64';
@prop export let nonActiveClass: NonNullable<$$Props['nonActiveClass']> = 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
@prop export let activeClass: NonNullable<$$Props['activeClass']> = 'flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
@prop export let ariaLabel: $$Props['ariaLabel'] = 'Sidebar';
-->
