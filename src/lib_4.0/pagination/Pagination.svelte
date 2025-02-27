<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import { createEventDispatcher, setContext } from 'svelte';
  import type { LinkType } from '../types';
  import PaginationItem from './PaginationItem.svelte';

  interface $$Props extends HTMLAttributes<HTMLUListElement> {
    pages: LinkType[];
    activeClass?: string;
    normalClass?: string;
    ulClass?: string;
    table?: boolean;
    large?: boolean;
    ariaLabel?: string;
  }

  export let pages: $$Props['pages'] = [];
  export let activeClass: $$Props['activeClass'] = 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
  export let normalClass: $$Props['normalClass'] = 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
  export let ulClass: $$Props['ulClass'] = 'inline-flex -space-x-px rtl:space-x-reverse items-center';
  export let table: NonNullable<$$Props['table']> = false;
  export let large: $$Props['large'] = false;
  export let ariaLabel: $$Props['ariaLabel'] = 'Page navigation';

  const dispatch = createEventDispatcher();

  setContext<boolean>('group', true);
  setContext<boolean>('table', table);

  const previous = () => {
    dispatch('previous');
  };
  const next = () => {
    dispatch('next');
  };
</script>

<nav aria-label={ariaLabel}>
  <ul class={twMerge(ulClass, table && 'divide-x rtl:divide-x-reverse dark divide-gray-700 dark:divide-gray-700', $$props.class)}>
    <li>
      <PaginationItem {large} on:click={previous} {normalClass} class={table ? 'rounded-l' : 'rounded-s-lg'}>
        <slot name="prev">Previous</slot>
      </PaginationItem>
    </li>
    {#each pages as { name, href, active }}
      <li>
        <PaginationItem {large} {active} {activeClass} {normalClass} {href} on:blur on:change on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover>
          {name}
        </PaginationItem>
      </li>
    {/each}
    <li>
      <PaginationItem {large} on:click={next} {normalClass} class={table ? 'rounded-r' : 'rounded-e-lg'}>
        <slot name="next">Next</slot>
      </PaginationItem>
    </li>
  </ul>
</nav>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let pages: $$Props['pages'] = [];
@prop export let activeClass: $$Props['activeClass'] = 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
@prop export let normalClass: $$Props['normalClass'] = 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
@prop export let ulClass: $$Props['ulClass'] = 'inline-flex -space-x-px rtl:space-x-reverse items-center';
@prop export let table: NonNullable<$$Props['table']> = false;
@prop export let large: $$Props['large'] = false;
@prop export let ariaLabel: $$Props['ariaLabel'] = 'Page navigation';
-->
