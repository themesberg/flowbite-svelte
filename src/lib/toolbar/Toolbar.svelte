<script lang="ts">
  import type { ToolbarColorType } from '../types';
  import { setContext, type ComponentProps } from 'svelte';
  import { writable } from 'svelte/store';
  import { twMerge, twJoin } from 'tailwind-merge';
  import Frame from '$lib/utils/Frame.svelte';

  interface $$Props extends ComponentProps<Frame> {
    color: 'gray' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'blue' | 'dark' | 'none';
    embedded: boolean;
  }

  const separators = writable(false);
  setContext('toolbar', separators);

  export let color: ToolbarColorType = 'dark';
  export let embedded: boolean = false;

  let divClass: string;
  $: divClass = twMerge('flex justify-between items-center', embedded || 'p-2', $$props.class);

  const divideColors = {
    gray: 'divide-gray-400 dark:divide-gray-700',
    red: 'divide-red-400 dark:divide-red-700',
    yellow: 'divide-yellow-400 dark:divide-yellow-700',
    green: 'divide-green-400 dark:divide-green-700',
    indigo: 'divide-indigo-400 dark:divide-indigo-700',
    purple: 'divide-purple-400 dark:divide-purple-700',
    pink: 'divide-pink-400 dark:divide-pink-700',
    blue: 'divide-blue-400 dark:divide-blue-700',
    dark: 'divide-gray-400 dark:divide-gray-600',
    none: ''
  };

  let separatorsClass: string;
  $: separatorsClass = twJoin($separators && 'sm:divide-x', divideColors[color]);
</script>

<Frame {...$$restProps} class={divClass} color={embedded ? 'none' : color} rounded={!embedded}>
  <div class="flex flex-wrap items-center {separatorsClass}">
    <slot />
  </div>
  <slot name="end" />
</Frame>

<!--
  @component
  ## Features
  [Go to Toolbar](https://flowbite-svelte.com/docs/utilities/toolbar)
  - Setup
  - Default toolbar
  - Colored toolbars
  - Toolbar with groups
  - WYSIWYG Editor
  - Comment box
  ## Props
  @prop color: ToolbarColorType = 'dark';
  @prop embedded: boolean = false;
  ## Example
  ```
  <script>
    import { Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
  </script>
  
  <Toolbar>
    <ToolbarButton><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg></ToolbarButton>
    <ToolbarButton><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" /></svg></ToolbarButton>
    <ToolbarButton><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></ToolbarButton>
  </Toolbar>
  ```
-->
