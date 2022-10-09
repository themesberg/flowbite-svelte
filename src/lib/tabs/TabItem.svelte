<script lang="ts">
  import { getContext } from 'svelte';
  import type { TabCtxType } from './Tabs.svelte';
  import { writable } from 'svelte/store';

  export let contentDivClass: string = 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800';
  export let open: boolean = false;

  const ctx = getContext<TabCtxType>('ctx') ?? {};
  // single selection
  const selected = ctx.selected ?? writable<HTMLElement>();

  function init(node: HTMLElement) {
    const parent = node.parentNode;
    selected.set(node);
    buttonClass = activeClasses[ctx.style];

    const destroy = selected.subscribe((x) => {
      if (x !== node) {
        parent?.append(node);
        buttonClass = inactiveClasses[ctx.style];
        open = false;
      }
    });

    return { destroy };
  }

  // styles
  const liClasses = {
    default: 'mr1-2',
    full: 'w-full',
    pill: 'mr1-2',
    underline: 'mr1-2',
    custom: ''
  };

  const activeClasses = {
    default:
      'inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500',
    full: 'inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white',
    pill: 'active inline-block py-3 px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg',
    underline:
      'inline-block p-4 text-sm text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500',
    custom: ''
  };

  const inactiveClasses = {
    default:
      'inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300',
    full: 'inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700',
    pill: 'inline-block py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
    underline:
      'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-sm font-medium text-center text-gray-500 dark:text-gray-400',
    custom: ''
  };

  let buttonClass: string = inactiveClasses[ctx.style];
</script>

<li class={liClasses[ctx.style]} role="presentation">
  <button
    type="button"
    on:click={() => (open = true)}
    on:click
    role="tab"
    {...$$restProps}
    class={buttonClass}>
    <slot name="header" />
  </button>
</li>

{#if open}
  <div class={contentDivClass} role="tabpanel" aria-labelledby="id-tab" use:init>
    <slot />
  </div>
{/if}
