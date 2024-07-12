<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { Component } from 'svelte';

  interface Props {
    children: Snippet;
    onclick?: () => void;
    active?: boolean;
    current?: boolean;
    disabled?: boolean;
    name?: string | undefined | null;
    icon?: Component;
    href?: string | undefined | null;
    currentClass?: string | undefined | null;
    normalClass?: string | undefined | null;
    disabledClass?: string | undefined | null;
    focusClass?: string | undefined | null;
    hoverClass?: string | undefined | null;
    liClass?: string | undefined | null;
    class?: string | undefined | null;
  }

  let {
    children,
    onclick,
    active,
    current,
    disabled,
    name,
    icon,
    href,
    currentClass = 'text-white bg-primary-700 dark:text-white dark:bg-gray-800',
    normalClass,
    disabledClass = 'text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400',
    focusClass = 'focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white',
    hoverClass = 'hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white',
    liClass = 'py-2 px-4 w-full text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg',
    class: className,
    ...attributes
  }: Props = $props();
  
  active = getContext('active');

  const states = {
    current: currentClass,
    normal: normalClass,
    disabled: disabledClass
  };

  let state: 'disabled' | 'current' | 'normal' = disabled
    ? 'disabled'
    : current
      ? 'current'
      : 'normal';

  let itemClass: string = twMerge(
    liClass,
    states[state],
    active && state === 'disabled' && 'cursor-not-allowed',
    active && state === 'normal' && hoverClass,
    active && state === 'normal' && focusClass,
    className
  );
</script>

{#if !active && children}
  <li class={itemClass}>
    {@render children()}
  </li>
{:else if href}
  <a {...attributes} {onclick} {href} class="block {itemClass}" aria-current={current}>
    {name}
  </a>
{:else}
  <button
    type="button"
    {...attributes}
    {onclick}
    class="flex items-center text-left {itemClass}"
    {disabled}
    aria-current={current}
  >
    {#if icon}
      <svelte:component this={icon} class="me-2.5 h-5 w-5" />
    {/if}
    {name}
  </button>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop onclick
@prop active
@prop current
@prop disabled
@prop name
@prop icon
@prop href
@prop currentClass = 'text-white bg-primary-700 dark:text-white dark:bg-gray-800'
@prop normalClass
@prop disabledClass = 'text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400'
@prop focusClass = 'focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white'
@prop hoverClass = 'hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white'
@prop liClass = 'py-2 px-4 w-full text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg'
@prop class: className
@prop ...attributes
-->
