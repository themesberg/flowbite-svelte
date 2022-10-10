<script context="module" lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export interface TabCtxType {
    activeClasses: string;
    inactiveClasses: string;
    selected: Writable<HTMLElement>;
  }
  // styles
  const styledActiveClasses = {
    full: 'p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-gray-700 dark:text-white',
    pill: 'py-3 px-4 text-white bg-blue-600 rounded-lg',
    underline: 'p-4 text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500',
    none: ''
  };

  const styledInactiveClasses = {
    full: 'p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700',
    pill: 'py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
    underline:
      'p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400',
    none: ''
  };
</script>

<script lang="ts">
  import classNames from 'classnames';
  import { setContext } from 'svelte';

  export let style: 'full' | 'pill' | 'underline' | 'none' = 'none';
  export let defaultClass: string = 'flex flex-wrap space-x-2';
  export let contentClass: string = 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4';
  export let divider: boolean = true;
  export let activeClasses: string =
    'p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500';
  export let inactiveClasses: string =
    'p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300';

  const ctx: TabCtxType = {
    activeClasses: styledActiveClasses[style] || activeClasses,
    inactiveClasses: styledInactiveClasses[style] || inactiveClasses,
    selected: writable<HTMLElement>()
  };

  $: divider = ['full', 'pill'].includes(style) ? false : divider;

  setContext('ctx', ctx);

  function init(node: HTMLElement) {
    const destroy = ctx.selected.subscribe((x: HTMLElement) => {
      if (x) node.replaceChildren(x);
    });

    return { destroy };
  }

  $: ulClass = classNames(defaultClass, style === 'underline' && '-mb-px', $$props.class);
</script>

<ul class={ulClass}>
  <slot {style} />
</ul>
{#if divider}
  <slot name="divider">
    <div class="h-px bg-gray-200 dark:bg-gray-700" />
  </slot>
{/if}
<div class={contentClass} role="tabpanel" aria-labelledby="id-tab" use:init />
