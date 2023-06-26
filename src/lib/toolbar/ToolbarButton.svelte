<script lang="ts">
  import type { ToolbarButtonType } from '../types';
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  const background = getContext('background');

  export let color: ToolbarButtonType = 'default';
  export let name: string | undefined = undefined;
  export let ariaLabel: string | undefined = undefined;
  export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  export let href: string | undefined = undefined;

  const colors = {
    dark: 'text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600',
    gray: 'text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300',
    red: 'text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300',
    yellow:
      'text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300',
    green:
      'text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300',
    indigo:
      'text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300',
    purple:
      'text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300',
    pink: 'text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300',
    blue: 'text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300',
    primary:
      'text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300',
    default: 'focus:ring-gray-400'
  };

  const sizing = {
    xs: 'm-0.5 rounded-sm focus:ring-1 p-0.5',
    sm: 'm-0.5 rounded focus:ring-1 p-0.5',
    md: 'm-0.5 rounded-lg focus:ring-2 p-1.5',
    lg: 'm-0.5 rounded-lg focus:ring-2 p-2.5'
  };

  let buttonClass: string;
  $: buttonClass = twMerge(
    'focus:outline-none whitespace-normal',
    sizing[size],
    colors[color],
    color === 'default' &&
      (background ? 'hover:bg-gray-100 dark:hover:bg-gray-600' : 'hover:bg-gray-100 dark:hover:bg-gray-700'),
    $$props.class
  );

  const svgSizes = {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-5 h-5',
    lg: 'w-5 h-5'
  };
</script>

{#if href}
  <a {href} {...$$restProps} class={buttonClass} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    <slot svgSize={svgSizes[size]} />
  </a>
{:else}
  <button on:click type="button" {...$$restProps} class={buttonClass} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    <slot svgSize={svgSizes[size]} />
  </button>
{/if}

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
  @prop color: ToolbarButtonType = 'default';
  @prop name: string | undefined = undefined;
  @prop ariaLabel: string | undefined = undefined;
  @prop size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  @prop href: string | undefined = undefined;
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
