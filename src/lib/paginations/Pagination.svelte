<script lang="ts">
  import classNames from 'classnames';
  import { createEventDispatcher, setContext } from 'svelte';
  import type { LinkType } from '../types';
  import PaginationItem from './PaginationItem.svelte';

  export let pages: LinkType[] = [];
  export let ulClass: string = 'inline-flex -space-x-px items-center';
  export let table: boolean = false;
  export let active: boolean = false;

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
      <PaginationItem on:click={previous} class={table ? 'rounded-l' : 'rounded-l-lg'}>
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
          {href}>{name}</PaginationItem>
      </li>
    {/each}
    <li>
      <PaginationItem on:click={next} class={table ? 'rounded-r' : 'rounded-r-lg'}>
        <slot name="next">Next</slot>
      </PaginationItem>
    </li>
  </ul>
</nav>
