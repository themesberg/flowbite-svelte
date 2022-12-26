<script lang="ts">
  import classNames from 'classnames';
  import { createEventDispatcher, setContext } from 'svelte';
  import type { LinkType } from '../types';
  import PaginationItem from './PaginationItem.svelte';

  export let pages: LinkType[] = [];
  export let activeClass: string =
    'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
  export let normalClass: string =
    'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
  export let ulClass: string = 'inline-flex -space-x-px items-center';
  export let table: boolean = false;

  const dispatch = createEventDispatcher();

  setContext('group', true);
  setContext('table', table);

  const previous = () => {
    dispatch('previous');
  };
  const next = () => {
    dispatch('next');
  };
</script>

<nav aria-label="Page navigation">
  <ul class={classNames(ulClass, table && 'divide-x divide-gray-700', $$props.class)}>
    <li>
      <PaginationItem
        on:click={previous}
        class={classNames(normalClass, table ? 'rounded-l' : 'rounded-l-lg')}>
        <slot name="prev">Previous</slot>
      </PaginationItem>
    </li>
    {#each pages as { name, href, active }}
      <li>
        <PaginationItem
          {active}
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
          {activeClass}
          {normalClass}
          {href}>{name}</PaginationItem>
      </li>
    {/each}
    <li>
      <PaginationItem on:click={next} class={classNames(normalClass, table ? 'rounded-r' : 'rounded-r-lg')}>
        <slot name="next">Next</slot>
      </PaginationItem>
    </li>
  </ul>
</nav>
