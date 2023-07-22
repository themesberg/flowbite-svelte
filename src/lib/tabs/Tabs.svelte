<script context="module" lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export interface TabCtxType {
    activeClasses: string;
    inactiveClasses: string;
    selected: Writable<HTMLElement>;
  }
</script>

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';

  export let style: 'full' | 'pill' | 'underline' | 'none' = 'none';
  export let defaultClass: string = 'flex flex-wrap space-x-2';
  export let contentClass: string = 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4';
  export let divider: boolean = true;
  export let activeClasses: string =
    'p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500';
  export let inactiveClasses: string =
    'p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300';

  // styles
  const styledActiveClasses = {
    full: 'p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white',
    pill: 'py-3 px-4 text-white bg-primary-600 rounded-lg',
    underline:
      'p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500',
    none: ''
  };

  const styledInactiveClasses = {
    full: 'p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700',
    pill: 'py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
    underline:
      'p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400',
    none: ''
  };

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

  $: ulClass = twMerge(defaultClass, style === 'underline' && '-mb-px', $$props.class);
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

<!--
  @component
  ## Features
  [Go to Tab](https://flowbite-svelte.com/docs/components/tab)
  - Setup
  - Default tabs
  - Tabs with underline
  - Tabs with icons
  - Pills tabs
  - Full width tabs
  - Components in tab contents
  - Custom style
  ## Props
  @prop style: 'full' | 'pill' | 'underline' | 'none' = 'none';
  @prop defaultClass: string = 'flex flex-wrap space-x-2';
  @prop contentClass: string = 'p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4';
  @prop divider: boolean = true;
  @prop activeClasses: string =
    'p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500';
  @prop inactiveClasses: string =
    'p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300';  
  ## Example
  ```
  <script>
    import { Tabs, TabItem } from 'flowbite-svelte';
  </script>
  
  <Tabs>
    <TabItem open title="Profile">
      <p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
    <TabItem title="Settings">
      <p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
    <TabItem title="Users">
      <p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
    <TabItem title="Dashboard">
      <p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
    <TabItem disabled>
      <span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
      <p class="text-sm text-gray-500 dark:text-gray-400"><b>Disabled:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
  </Tabs>
  ```
-->
