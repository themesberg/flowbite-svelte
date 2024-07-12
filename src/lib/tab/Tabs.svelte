<script context="module" lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export interface TabCtxType {
    activeClasses: string | undefined | null;
    inactiveClasses: string | undefined | null;
    selected: Writable<HTMLElement>;
  }
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';

  interface Props {
    children: Snippet;
    style?: 'full' | 'pill' | 'underline' | 'none';
    defaultClass?: string | undefined | null;
    contentClass?: string | undefined | null;
    divider?: boolean;
    activeClasses?: string | undefined | null;
    inactiveClasses?: string | undefined | null;
    class?: string | undefined | null;
  }
  let { children, style = 'none', defaultClass, contentClass, divider = true, activeClasses, inactiveClasses, class:classname, ...attributes }: Props = $props();

  let defaultCls: string = twMerge('flex flex-wrap space-x-2 rtl:space-x-reverse', defaultClass);
  let contentCls: string = twMerge('p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4', contentClass);
  let activeCls: string = twMerge('p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500', activeClasses);
  let inactiveCls: string = twMerge('p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300', inactiveClasses);

  // styles
  const styledActiveClasses = {
    full: 'p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white',
    pill: 'py-3 px-4 text-white bg-primary-600 rounded-lg',
    underline: 'p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500',
    none: ''
  };

  const styledInactiveClasses = {
    full: 'p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700',
    pill: 'py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
    underline: 'p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400',
    none: ''
  };

  const ctx: TabCtxType = {
    activeClasses: styledActiveClasses[style] || activeCls,
    inactiveClasses: styledInactiveClasses[style] || inactiveCls,
    selected: writable<HTMLElement>()
  };

  let dividerBool = $derived(['full', 'pill'].includes(style) ? false : divider);

  setContext('ctx', ctx);

  function init(node: HTMLElement) {
    const destroy = ctx.selected.subscribe((x: HTMLElement) => {
      if (x) node.replaceChildren(x);
    });
    return { destroy };
  }

  let ulClass = twMerge(defaultCls, style === 'underline' && '-mb-px', classname,);
</script>

<ul class={ulClass}>
  {@render children()}
</ul>
{#if divider}
    <div class="h-px bg-gray-200 dark:bg-gray-700" ></div>
{/if}
<div class={contentCls} role="tabpanel" aria-labelledby="id-tab" use:init></div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop style = 'none'
@prop defaultClass
@prop contentClass
@prop divider = true
@prop activeClasses
@prop inactiveClasses
@prop class:classname
@prop ...attributes
-->
