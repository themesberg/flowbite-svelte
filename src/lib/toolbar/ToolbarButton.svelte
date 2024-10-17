<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

  type ColorType = 'dark' | 'gray' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'blue' | 'primary' | 'default';
  type SizeType = 'xs' | 'sm' | 'md' | 'lg';

  type CommonProps = {
    color?: ColorType;
    name?: string;
    ariaLabel?: string;
    size?: SizeType;
  };

  type AnchorProps = CommonProps & HTMLAnchorAttributes & {
    href: string;
  };

  type ButtonProps = CommonProps & HTMLButtonAttributes;

  type $$Props = AnchorProps | ButtonProps;

  export let color: NonNullable<$$Props['color']> = 'default';
  export let name: $$Props['name'] = undefined;
  export let ariaLabel: $$Props['ariaLabel'] = undefined;
  export let size: SizeType = 'md';
  export let href: string | undefined = undefined;

  const background = getContext('background');
  const colors = {
    dark: 'text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600',
    gray: 'text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300',
    red: 'text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300',
    yellow: 'text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300',
    green: 'text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300',
    indigo: 'text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300',
    purple: 'text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300',
    pink: 'text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300',
    blue: 'text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300',
    primary: 'text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300',
    default: 'focus:ring-gray-400 hover:bg-gray-100'
  };

  const sizing = {
    xs: 'm-0.5 rounded-sm focus:ring-1 p-0.5',
    sm: 'm-0.5 rounded focus:ring-1 p-0.5',
    md: 'm-0.5 rounded-lg focus:ring-2 p-1.5',
    lg: 'm-0.5 rounded-lg focus:ring-2 p-2.5'
  };

  let buttonClass: string;
  $: buttonClass = twMerge('focus:outline-none whitespace-normal', sizing[size], colors[color], color === 'default' && (background ? 'dark:hover:bg-gray-600' : 'dark:hover:bg-gray-700'), $$props.class);

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
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: NonNullable<$$Props['color']> = 'default';
@prop export let name: $$Props['name'] = undefined;
@prop export let ariaLabel: $$Props['ariaLabel'] = undefined;
@prop export let size: SizeType = 'md';
@prop export let href: string | undefined = undefined;
-->
