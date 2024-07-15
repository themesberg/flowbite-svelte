<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { CloseButton } from '$lib';
  import type { ColorVariant } from '../types';
  import { fade, type TransitionConfig } from 'svelte/transition';
  import type { HTMLAttributes } from 'svelte/elements';

  type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
    icon?: Snippet;
    closeIcon?: any;
    color?: ColorVariant;
    border?: boolean;
    rounded?: boolean;
    dismissable?: boolean;
    class?: string | undefined | null;
    transition?: TransitionFunc;
    params?: any;
    onclick?: () => void;
  }

  let {
    children,
    icon,
    closeIcon,
    color = 'primary',
    rounded = true,
    border,
    class: divClass,
    dismissable,
    transition = fade,
    params = {},
    onclick,
    ...attributes
  }: Props = $props();

  let alertStatus: boolean = $state(true);

  const bgColors = {
    gray: 'bg-gray-50 dark:bg-gray-800',
    red: 'bg-red-50 dark:bg-gray-800',
    yellow: 'bg-yellow-50 dark:bg-gray-800 ',
    green: 'bg-green-50 dark:bg-gray-800 ',
    indigo: 'bg-indigo-50 dark:bg-gray-800 ',
    purple: 'bg-purple-50 dark:bg-gray-800 ',
    pink: 'bg-pink-50 dark:bg-gray-800 ',
    blue: 'bg-blue-50 dark:bg-gray-800 ',
    primary: 'bg-primary-50 dark:bg-gray-800 ',
    none: ''
  };
  const textColors = {
    gray: 'text-gray-800 dark:text-gray-300',
    red: 'text-red-800 dark:text-red-400',
    yellow: 'text-yellow-800 dark:text-yellow-300',
    green: 'text-green-800 dark:text-green-400',
    indigo: 'text-indigo-800 dark:text-indigo-400',
    purple: 'text-purple-800 dark:text-purple-400',
    pink: 'text-pink-800 dark:text-pink-400',
    blue: 'text-blue-800 dark:text-blue-400',
    primary: 'text-primary-800 dark:text-primary-400',
    none: ''
  };
  const borderColors = {
    gray: 'border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800',
    red: 'border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800',
    yellow:
      'border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800',
    green:
      'border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800',
    indigo:
      'border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800',
    purple:
      'border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800',
    pink: 'border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800',
    blue: 'border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800',
    primary:
      'border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ',
    none: ''
  };

  let divCls: string = twMerge(
    'p-4 gap-3 text-sm',
    (icon || dismissable) && 'flex items-center',
    bgColors[color],
    textColors[color],
    rounded && 'rounded-lg',
    border && 'border',
    borderColors[color],
    divClass
  );
</script>

{#if alertStatus}
  <div
    role="alert"
    {...attributes}
    transition:transition={params}
    class={divCls}
  >
    {#if icon}
      {@render icon()}
    {/if}

    {#if icon || dismissable}
      <div>
        {@render children()}
      </div>
    {:else}
      {@render children()}
    {/if}

    {#if dismissable}
      {#if closeIcon}
        <button
          type="button"
          class="m-0.5 -me-1.5 ms-1.5 whitespace-normal rounded p-0.5 text-primary-500 hover:bg-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300"
          aria-label="Remove badge"
          onclick={() => {
            alertStatus = false;
          }}
        >
          <span class="sr-only">Remove alert</span>
          {#if icon}
            {@render icon()}
          {/if}
        </button>
      {:else}
        <CloseButton
          class="-my-1.5 -me-1.5 ms-auto dark:hover:bg-gray-700"
          {color}
          ariaLabel="Remove badge"
          onclick={() => {
            alertStatus = false;
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
@prop children
@prop icon
@prop closeIcon
@prop color = 'primary'
@prop rounded = true
@prop border
@prop divClass
@prop dismissable
@prop ...attributes
-->
