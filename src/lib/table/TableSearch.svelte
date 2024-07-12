<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';

  type TableSearchType = {
    striped?: boolean;
    hoverable?: boolean;
    color?: string | undefined | null;
  };
  interface Props {
    children?: Snippet;
    svgSearch?: any;
    header?: Snippet;
    footer?: Snippet;
    divClass?: string | undefined | null;
    inputValue?: string | undefined | null;
    striped?: boolean;
    hoverable?: boolean;
    placeholder?: string | undefined | null;
    customColor?: string | undefined;
    color?: string | undefined;
    innerDivClass?: string | undefined | null;
    inputclass?: string | undefined | null;
    searchClass?: string | undefined | null;
    svgDivClass?: string | undefined | null;
    svgClass?: string | undefined | null;
    classDiv?: string | undefined | null;
    class?: string | undefined | null;
  }

  let {
    children,
    svgSearch,
    header,
    footer,
    divClass = '',
    inputValue = $bindable(),
    striped,
    hoverable,
    placeholder = 'Search',
    customColor = '',
    color = 'default',
    innerDivClass = '',
    inputclass,
    searchClass = '',
    svgDivClass,
    svgClass = '',
    classDiv,
    class: className,
    ...attributes
  }: Props = $props();

  let inputCls = twMerge(
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
    inputclass
  );
  let svgDivCls = twMerge(
    'absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none',
    svgDivClass
  );

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

<div class={twMerge('relative overflow-x-auto shadow-md sm:rounded-lg',divClass)}>
  <div class={twMerge('p-4',innerDivClass)}>
    <label for="table-search" class="sr-only">Search</label>
    <div class={twMerge('relative mt-1',searchClass)}>
      <div class={svgDivCls}>
        <svg
          class={twMerge('w-5 h-5 text-gray-500 dark:text-gray-400',svgClass)}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <input
        bind:value={inputValue}
        type="text"
        id="table-search"
        class={inputCls}
        {placeholder}
      />
    </div>
    {#if header}
      {@render header()}
    {/if}
  </div>
  <table
    {...attributes}
    class={twMerge('w-full text-left text-sm', colors[color], className)}
  >
    {#if children}
      {@render children()}
    {/if}
  </table>
  {#if footer}
    {@render footer()}
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop svgSearch
@prop header
@prop footer
@prop divClass = ''
@prop inputValue = $bindable()
@prop striped
@prop hoverable
@prop placeholder = 'Search'
@prop customColor = ''
@prop color = 'default'
@prop innerDivClass = ''
@prop inputclass
@prop searchClass = ''
@prop svgDivClass
@prop svgClass = ''
@prop classDiv
@prop class: className
@prop ...attributes
-->
