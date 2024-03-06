<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';

  type TableSearchType = {
    striped?: boolean;
    hoverable?: boolean;
    color?: string;
  };
  interface Props {
    children?: any;
    svgSearch?: any;
    header?: any;
    footer?: any;
    divclass?: string;
    inputValue?: string;
    striped?: boolean;
    hoverable?: boolean;
    placeholder?: string;
    customColor?: string;
    color?: string;
    innerDivClass?: string;
    inputclass?: string;
    searchClass?: string;
    svgDivClass?: string;
    svgClass?: string;
    classDiv?: string;
    class?: string;
  }

  let { children, svgSearch, header, footer, divclass = 'relative overflow-x-auto shadow-md sm:rounded-lg', inputValue, striped, hoverable, placeholder = 'Search', customColor = '', color = 'default', innerDivClass = 'p-4', inputclass, searchClass = 'relative mt-1', svgDivClass, svgClass = 'w-5 h-5 text-gray-500 dark:text-gray-400', classDiv, class: className, ...attributes } = $props<Props>();

  let inputCls = twMerge('bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500', inputclass);
  let svgDivCls = twMerge('absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none', svgDivClass);

  const colors: { [key: string]: string } = {
    default: 'text-gray-500 dark:text-gray-400',
    blue: 'text-blue-100 dark:text-blue-100',
    green: 'text-green-100 dark:text-green-100',
    red: 'text-red-100 dark:text-red-100',
    yellow: 'text-yellow-100 dark:text-yellow-100',
    purple: 'text-purple-100 dark:text-purple-100',
    indigo: 'text-indigo-100 dark:text-indigo-100',
    pink: 'text-pink-100 dark:text-pink-100',
    custom: customColor
  };
  const tableSearchCtx: TableSearchType = {
    striped,
    hoverable,
    color
  };

  setContext('tableCtx', tableSearchCtx);
</script>

<div class={divclass}>
  <div class={innerDivClass}>
    <label for="table-search" class="sr-only">Search</label>
    <div class={searchClass}>
      <div class={svgDivCls}>
        <svg class={svgClass} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>
      <input bind:value={inputValue} type="text" id="table-search" class={inputCls} {placeholder} />
    </div>
    {#if header}
      {@render header()}
    {/if}
  </div>
  <table {...attributes} class={twMerge('w-full text-left text-sm', colors[color], className)}>
    {@render children()}
  </table>
  {#if footer}
    {@render footer()}
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: any;
@props:svgSearch?: any;
@props:header?: any;
@props:footer?: any;
@props:divclass?:  string; = 'relative overflow-x-auto shadow-md sm:rounded-lg';
@props:inputValue?: string;
@props:striped?: boolean;
@props:hoverable?: boolean;
@props:placeholder?:  string; = 'Search';
@props:customColor?:  string; = '';
@props:color?:  string; = 'default';
@props:innerDivClass?:  string; = 'p-4';
@props:inputclass?: string;
@props:searchClass?:  string; = 'relative mt-1';
@props:svgDivClass?: string;
@props:svgClass?:  string; = 'w-5 h-5 text-gray-500 dark:text-gray-400';
@props:classDiv?: string;
@props:class?: string;
-->
