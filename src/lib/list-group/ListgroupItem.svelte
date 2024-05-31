<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { Component } from 'svelte';

  interface Props {
    children: Snippet;
    onclick?: () => void;
    btn?: boolean;
    current?: boolean;
    disabled?: boolean;
    name?: string;
    icon?: Component;
    href?: string;
    currentclass?: string;
    normalclass?: string;
    disabledclass?: string;
    focusclass?: string;
    hoverclass?: string;
    liclass?: string;
  }

  let {
    children,
    onclick,
    btn,
    current,
    disabled,
    name,
    icon,
    href,
    currentclass,
    normalclass,
    disabledclass,
    focusclass,
    hoverclass,
    liclass,
    ...attributes
  }: Props = $props();
  
  btn = getContext('btn');
  const currentCls: string = twMerge(
    'text-white bg-primary-700 dark:text-white dark:bg-gray-800',
    currentclass
  );
  const disabledCls: string = twMerge(
    'text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400',
    disabledclass
  );
  const focusCls: string = twMerge(
    'focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white',
    focusclass
  );
  const hoverCls: string = twMerge(
    'hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white',
    hoverclass
  );
  const liCls: string = twMerge(
    'py-2 px-4 w-full text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg',
    liclass
  );

  const states = {
    current: currentCls,
    normal: normalclass,
    disabled: disabledCls
  };

  let state: 'disabled' | 'current' | 'normal' = disabled
    ? 'disabled'
    : current
      ? 'current'
      : 'normal';

  let itemClass: string = twMerge(
    liCls,
    states[state],
    btn && state === 'disabled' && 'cursor-not-allowed',
    btn && state === 'normal' && hoverCls,
    btn && state === 'normal' && focusCls
  );
</script>

{#if !btn && children}
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
@props: children: Snippet;
@props:onclick?: () => void;
@props:btn?: boolean;
@props:current?: boolean;
@props:disabled?: boolean;
@props:name?: string;
@props:icon?: ComponentType;
@props:href?: string;
@props:currentclass?: string;
@props:normalclass?: string;
@props:disabledclass?: string;
@props:focusclass?: string;
@props:hoverclass?: string;
@props:liclass?: string;
-->
