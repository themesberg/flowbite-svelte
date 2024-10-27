<script lang="ts" generics="T">
  import type { HTMLTableAttributes } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { twMerge, twJoin } from 'tailwind-merge';
  import { setContext } from 'svelte';
  import type { TableColorType } from '../types';

  interface $$Props extends HTMLTableAttributes {
    divClass?: string;
    striped?: boolean;
    hoverable?: boolean;
    noborder?: boolean;
    shadow?: boolean;
    color?: TableColorType;
    customeColor?: string;
    items?: T[];
    filter?:  ((t: T, term: string) => boolean) | null;
    placeholder?: string;
    innerDivClass?: string;
    searchClass?: string;
    svgDivClass?: string;
    svgClass?: string;
    inputClass?: string;
    classInput?: string;
    classSvgDiv?: string;
  }

  export let divClass: $$Props['divClass'] = 'relative overflow-x-auto';
  export let striped: $$Props['striped'] = false;
  export let hoverable: $$Props['hoverable'] = false;
  export let noborder: $$Props['noborder'] = false;
  export let shadow: $$Props['shadow'] = false;
  export let color: NonNullable<$$Props['color']> = 'default';
  export let customeColor: $$Props['customeColor'] = '';
  export let items: $$Props['items'] = [];
  export let filter: $$Props['filter'] = null;
  export let placeholder: $$Props['placeholder'] = 'Search';
  export let innerDivClass: $$Props['innerDivClass'] = 'p-4';
  export let searchClass: $$Props['searchClass'] = 'relative mt-1';
  export let svgDivClass: $$Props['svgDivClass'] = 'absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none';
  export let svgClass: $$Props['svgClass'] = 'w-5 h-5 text-gray-500 dark:text-gray-400';
  export let inputClass: $$Props['inputClass'] = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
  export let classInput: $$Props['classInput'] = '';
  export let classSvgDiv: $$Props['classSvgDiv'] = '';

  let searchTerm = '';
  let inputCls = twMerge(inputClass, classInput);
  let svgDivCls = twMerge(svgDivClass, classSvgDiv);

  const colors = {
    default: 'text-gray-500 dark:text-gray-400',
    blue: 'text-blue-100 dark:text-blue-100',
    green: 'text-green-100 dark:text-green-100',
    red: 'text-red-100 dark:text-red-100',
    yellow: 'text-yellow-100 dark:text-yellow-100',
    purple: 'text-purple-100 dark:text-purple-100',
    indigo: 'text-indigo-100 dark:text-indigo-100',
    pink: 'text-pink-100 dark:text-pink-100',
    custom: customeColor
  };

  $: setContext('striped', striped);
  $: setContext('hoverable', hoverable);
  $: setContext('noborder', noborder);
  $: setContext('color', color);
  $: setContext('items', items);
  const searchTermStore = writable(searchTerm);
  const filterStore = writable(filter);
  setContext('searchTerm', searchTermStore);
  setContext('filter', filterStore);
  $: searchTermStore.set(searchTerm);
  $: {
    if(filter) filterStore.set(filter)
  }
  setContext('sorter', writable(null));
</script>

<div class={twJoin(divClass, shadow && 'shadow-md sm:rounded-lg')}>
  {#if filter}
    <slot name="search">
      <div class={innerDivClass}>
        <label for="table-search" class="sr-only">Search</label>
        <div class={searchClass}>
          <div class={svgDivCls}>
            <slot name="svgSearch">
              <svg class={svgClass} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </slot>
          </div>
          <input bind:value={searchTerm} type="text" id="table-search" class={inputCls} {placeholder} />
        </div>
        <slot name="header" />
      </div>
    </slot>
  {/if}
  <table {...$$restProps} class={twMerge('w-full text-left text-sm', colors[color], $$props.class)}>
    <slot />
  </table>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: $$Props['divClass'] = 'relative overflow-x-auto';
@prop export let striped: $$Props['striped'] = false;
@prop export let hoverable: $$Props['hoverable'] = false;
@prop export let noborder: $$Props['noborder'] = false;
@prop export let shadow: $$Props['shadow'] = false;
@prop export let color: NonNullable<$$Props['color']> = 'default';
@prop export let customeColor: $$Props['customeColor'] = '';
@prop export let items: $$Props['items'] = [];
@prop export let filter: $$Props['filter'] = null;
@prop export let placeholder: $$Props['placeholder'] = 'Search';
@prop export let innerDivClass: $$Props['innerDivClass'] = 'p-4';
@prop export let searchClass: $$Props['searchClass'] = 'relative mt-1';
@prop export let svgDivClass: $$Props['svgDivClass'] = 'absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none';
@prop export let svgClass: $$Props['svgClass'] = 'w-5 h-5 text-gray-500 dark:text-gray-400';
@prop export let inputClass: $$Props['inputClass'] = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
@prop export let classInput: $$Props['classInput'] = '';
@prop export let classSvgDiv: $$Props['classSvgDiv'] = '';
-->
