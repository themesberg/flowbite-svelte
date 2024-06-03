<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { CloseButtonColorType } from '$lib/types';

  interface Props {
    color?: CloseButtonColorType;
    onclick?: () => void;
    name?: string;
    ariaLabel?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    href?: string;
    divclass?: string;
  }

  let {
    color = 'default',
    onclick,
    name = 'Close',
    ariaLabel,
    size = 'md',
    href,
    divclass,
    ...attributes
  }: Props = $props();

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
    default: 'focus:ring-gray-400',
    none: ''
  };

  const sizing = {
    xs: 'm-0.5 rounded-sm focus:ring-1 p-0.5',
    sm: 'm-0.5 rounded focus:ring-1 p-0.5',
    md: 'm-0.5 rounded-lg focus:ring-2 p-1.5',
    lg: 'm-0.5 rounded-lg focus:ring-2 p-2.5'
  };

  let buttonClass: string = twMerge(
    'focus:outline-none whitespace-normal',
    sizing[size],
    colors[color],
    color === 'default' && 'hover:bg-gray-100 dark:hover:bg-gray-700',
    divclass
  );

  const svgSizes = {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-5 h-5',
    lg: 'w-5 h-5'
  };
</script>

{#if href}
  <a {href} {...attributes} {onclick} class={buttonClass} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    <svg
      class={svgSizes[size]}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </a>
{:else}
  <button
    type="button"
    {...attributes}
    class={buttonClass}
    aria-label={ariaLabel ?? name}
  >
    {#if name}<span class="sr-only">{name}</span>{/if}
    <svg
      class={svgSizes[size]}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop color = 'default'
@prop onclick
@prop name = 'Close'
@prop ariaLabel
@prop size = 'md'
@prop href
@prop divclass
@prop ...attributes
-->
