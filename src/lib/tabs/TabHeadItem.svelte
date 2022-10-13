<script lang="ts">
  import classNames from 'classnames';
  export let id: number;
  export let tabStyle: 'default' | 'full' | 'icon' | 'pill' | 'underline' | 'custom' = 'default';
  export let activeTabValue: number;
  export let customActiveClass: string = '';
  export let customInActiveClass: string = '';
  export let customLiClass: string = '';
  import { getContext } from 'svelte';
  import type { TabCtxType } from './Tabs.svelte';

  type classOptions = {
    [key: string]: string;
  };

  const ctx = getContext<TabCtxType>('ctx') ?? {};
  tabStyle = ctx.style;

  const activeClasses: classOptions = {
    default:
      'inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500',
    full: 'inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white',
    icon: 'inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group',
    pill: 'active inline-block py-3 px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg',
    underline:
      'inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500',
    custom: customActiveClass
  };

  const inactiveClasses: classOptions = {
    default:
      'inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300',
    full: 'inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700',
    icon: 'inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ',
    pill: 'inline-block py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
    underline:
      'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
    custom: customInActiveClass
  };

  const liClasses: classOptions = {
    default: 'mr-2',
    full: 'w-full',
    icon: 'mr-2',
    pill: 'mr-2',
    underline: 'mr-2',
    custom: customLiClass
  };
</script>

<li class={liClasses[tabStyle]} role="presentation">
  <button
    {...$$restProps}
    on:click
    on:blur
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    class={classNames(activeTabValue === id ? activeClasses[tabStyle] : inactiveClasses[tabStyle])}
    id="{id}-tabhead"
    type="button"
    role="tab">
    <slot />
  </button>
</li>
