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

<!--
  @component
  ## Features
  [Go to Pagination](https://flowbite-svelte.com/docs/components/pagination)
  - Setup
  - Default pagination
  - Pagination with icons
  - Previous and next
  - Previous and next with icons
  - Table data pagination
  - Table data pagination with icons
  - Event example
  ## Props
  @prop pages: LinkType[] = [];
  @prop activeClass: string = 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
  @prop normalClass: string = 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
  @prop ulClass: string = 'inline-flex -space-x-px items-center';
  @prop table: boolean = false;
  ## Event
  - on:blur
  - on:change
  - on:click
  - on:focus
  - on:keydown
  - on:keypress
  - on:keyup
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
  ## Example
  ```
  <script>
    import { page } from '$app/stores';
    import { Pagination } from 'flowbite-svelte'

    $: activeUrl = $page.url.searchParams.get('page')
    let pages = [
      { name: 1, href: '/components/pagination?page=1'},
      { name: 2, href: '/components/pagination?page=2'},
      { name: 3, href: '/components/pagination?page=3'},
      { name: 4, href: '/components/pagination?page=4'},
      { name: 5, href: '/components/pagination?page=5'}
    ];

    $:{ 
        pages.forEach((page)=>{
        let splitUrl = page.href.split('?');
        let queryString = splitUrl.slice(1).join('?');
        const hrefParams = new URLSearchParams(queryString);
        let hrefValue = hrefParams.get('page');
        if ( hrefValue === activeUrl){
          page.active=true
        }else{
          page.active=false
        }
      })
        pages=pages
    }

    const previous = () => {
      alert('Previous btn clicked. Make a call to your server to fetch data.');
    };
    const next = () => {
      alert('Next btn clicked. Make a call to your server to fetch data.');
    };
  </script>

  <Pagination {pages} on:previous={previous} on:next={next} />
  ```
-->
