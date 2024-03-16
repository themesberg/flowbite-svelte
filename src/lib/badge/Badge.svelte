<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { CloseButton } from '$lib';
  import type { ColorVariant } from '../types';

  interface Props {
    children: Snippet;
    icon?: Snippet;
    color?: ColorVariant;
    large?: boolean;
    dismissable?: boolean;
    divclass?: string;
    border?: boolean;
    href?: string;
    rounded?: boolean;
  }
  let {
    children,
    icon,
    color = 'primary',
    large = false,
    dismissable = false,
    divclass,
    border,
    href,
    rounded,
    ...attributes
  }: Props = $props();

  let badgeStatus: boolean = $state(true);

  const colors = {
    primary:
      'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    yellow:
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    indigo:
      'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
    purple:
      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    none: ''
  };

  const borderedColors = {
    primary:
      'bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400 dark:border-primary-400',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-400 dark:border-gray-400',
    blue: 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400',
    red: 'bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400 dark:border-red-400',
    green:
      'bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400 dark:border-green-400',
    yellow:
      'bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300',
    indigo:
      'bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400',
    purple:
      'bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400 dark:border-purple-400',
    pink: 'bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400 dark:border-pink-400',
    none: ''
  };

  const hoverColors = {
    primary: 'hover:bg-primary-200',
    gray: 'hover:bg-gray-200',
    blue: 'hover:bg-blue-200',
    red: 'hover:bg-red-200',
    green: 'hover:bg-green-200',
    yellow: 'hover:bg-yellow-200',
    indigo: 'hover:bg-indigo-200',
    purple: 'hover:bg-purple-200',
    pink: 'hover:bg-pink-200',
    none: ''
  };

  const baseClass: string =
    'font-medium inline-flex items-center justify-center px-2.5 py-0.5';

  let badgeClass: string = twMerge(
    baseClass,
    large ? 'text-sm' : 'text-xs',
    border ? `border ${borderedColors[color]}` : colors[color],
    href && hoverColors[color],
    rounded ? 'rounded-full' : 'rounded',
    divclass
  );
</script>

{#if badgeStatus}
  <div {...attributes} class={badgeClass}>
    {#if href}
      <a {href}>
        {@render children()}
      </a>
    {:else}
      {@render children()}
    {/if}
 
    {#if dismissable}
      {#if icon}
        <button
          type="button"
          class="m-0.5 -me-1.5 ms-1.5 whitespace-normal rounded p-0.5 text-primary-500 hover:bg-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300"
          aria-label="Remove badge"
          onclick={() => {
            badgeStatus = false;
          }}
          ><span class="sr-only">Remove badge</span>
          {@render icon()}
        </button>
      {:else}
        <CloseButton
          divclass="ms-1.5 -me-1.5"
          {color}
          size={large ? 'sm' : 'xs'}
          ariaLabel="Remove badge"
          onclick={() => {
            badgeStatus = false;
          }}
        />
      {/if}
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:icon?: Snippet;
@props:color?:  ColorVariant; = 'primary';
@props:large?:  boolean; = false;
@props:dismissable?:  boolean; = false;
@props:divclass?: string;
@props:border?: boolean;
@props:href?: string;
@props:rounded?: boolean;
-->
