<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';

  export let divClass: string = 'relative overflow-x-auto shadow-md sm:rounded-lg';
  export let inputValue: string = '';
  export let striped: boolean = false;
  export let hoverable: boolean = false;
  export let placeholder: string = 'Search';
  export let customColor: string = '';
  export let color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'default' | 'custom' = 'default';
  export let innerDivClass: string = 'p-4';
  export let searchClass: string = 'relative mt-1';
  export let svgDivClass: string = 'absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none';
  export let svgClass: string = 'w-5 h-5 text-gray-500 dark:text-gray-400';
  export let inputClass: string = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

  let inputCls = twMerge(inputClass, $$props.classInput);
  let svgDivCls = twMerge(svgDivClass, $$props.classSvgDiv);

  const colors = {
    default: 'text-gray-500 dark:text-gray-400',
    blue: 'text-blue-100 dark:text-blue-100',
    green: 'text-green-100 dark:text-green-100',
    red: 'text-red-100 dark:text-red-100',
    yellow: 'text-yellow-100 dark:text-yellow-100',
    purple: 'text-purple-100 dark:text-purple-100',
    custom: customColor
  };

  $: setContext('striped', striped);
  $: setContext('hoverable', hoverable);
  $: setContext('color', color);
</script>

<div class={divClass}>
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
      <input bind:value={inputValue} type="text" id="table-search" class={inputCls} {placeholder} />
    </div>
    <slot name="header" />
  </div>
  <table {...$$restProps} class={twMerge('w-full text-left text-sm', colors[color], $$props.class)}>
    <slot />
  </table>
  <slot name="footer" />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'relative overflow-x-auto shadow-md sm:rounded-lg';
@prop export let inputValue: string = '';
@prop export let striped: boolean = false;
@prop export let hoverable: boolean = false;
@prop export let placeholder: string = 'Search';
@prop export let customColor: string = '';
@prop export let color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'default' | 'custom' = 'default';
@prop export let innerDivClass: string = 'p-4';
@prop export let searchClass: string = 'relative mt-1';
@prop export let svgDivClass: string = 'absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none';
@prop export let svgClass: string = 'w-5 h-5 text-gray-500 dark:text-gray-400';
@prop export let inputClass: string = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
-->
