<script lang="ts">
  import { getContext } from 'svelte';
  import classNames from 'classnames';

  const background = getContext('background');

  export let color:
    | 'dark'
    | 'default'
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'blue' = 'default';
  export let name: string | undefined = undefined;
  export let ariaLabel: string | undefined = undefined;
  export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  export let href: string | undefined = undefined;

  const colors = {
    dark: 'text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700',
    gray: 'text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700',
    red: 'text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-gray-700',
    yellow: 'text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-gray-700',
    green: 'text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-gray-700',
    indigo: 'text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-gray-700',
    purple: 'text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-gray-700',
    pink: 'text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-gray-700',
    blue: 'text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-gray-700',
    default: 'focus:ring-gray-400 '
  };

  const sizing = {
    xs: 'm-0.5 rounded focus:ring-1 p-0.5',
    sm: 'm-0.5 rounded focus:ring-1 p-0.5',
    md: 'm-0.5 rounded-lg focus:ring-2 p-1.5',
    lg: 'm-0.5 rounded-lg focus:ring-2 p-2.5'
  };

  let buttonClass: string;
  $: buttonClass = classNames(
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
