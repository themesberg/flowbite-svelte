<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { CloseButton } from '$lib';
  import type { ColorVariant } from '../types';
  import type { HTMLAttributes } from 'svelte/elements';
  import { fade, type TransitionConfig } from 'svelte/transition';

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

  const dispatcher = createEventDispatcher();

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    color?: ColorVariant;
    large?: boolean;
    dismissable?: boolean;
    border?: boolean;
    href?: string;
    rounded?: boolean;
    transition?: TransitionFunc;
    params?: object;
  }

  export let color: NonNullable<$$Props['color']> = 'primary';
  export let large: $$Props['large'] = false;
  export let dismissable: $$Props['dismissable'] = false;
  export let border: $$Props['border'] = false;
  export let href: $$Props['href'] = '';
  export let rounded: $$Props['rounded'] = false;
  export let transition: NonNullable<$$Props['transition']> = fade;
  export let params: $$Props['params'] = {};

  let badgeStatus: boolean = true;

  const colors = {
    primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
    dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    none: ''
  };

  const borderedColors = {
    primary: 'bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400 dark:border-primary-400',
    dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-400 dark:border-gray-400',
    blue: 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400',
    red: 'bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400 dark:border-red-400',
    green: 'bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400 dark:border-green-400',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400',
    purple: 'bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400 dark:border-purple-400',
    pink: 'bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400 dark:border-pink-400',
    none: ''
  };

  const hoverColors = {
    primary: 'hover:bg-primary-200',
    dark: 'hover:bg-gray-200',
    blue: 'hover:bg-blue-200',
    red: 'hover:bg-red-200',
    green: 'hover:bg-green-200',
    yellow: 'hover:bg-yellow-200',
    indigo: 'hover:bg-indigo-200',
    purple: 'hover:bg-purple-200',
    pink: 'hover:bg-pink-200',
    none: ''
  };

  const close = () => {
    badgeStatus = false;
  };
  const baseClass: string = 'font-medium inline-flex items-center justify-center px-2.5 py-0.5';

  let badgeClass: string;
  $: badgeClass = twMerge(baseClass, large ? 'text-sm' : 'text-xs', border ? `border ${borderedColors[color]}` : colors[color], href && hoverColors[color], rounded ? 'rounded-full' : 'rounded', $$restProps.class);
</script>

{#if badgeStatus}
  <div {...$$restProps} transition:transition={params} class={badgeClass} on:close>
    {#if href}
      <a {href}>
        <slot></slot>
      </a>
    {:else}
      <slot></slot>
    {/if}
    {#if dismissable}
      <slot name="close-button" {close}>
        <CloseButton
          divclass="ms-1.5 -me-1.5"
          {color}
          size={large ? 'sm' : 'xs'}
          ariaLabel="Remove badge"
          on:click={() => {
            badgeStatus = false;
            dispatcher('close');
          }} />
      </slot>
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: NonNullable<$$Props['color']> = 'primary';
@prop export let large: $$Props['large'] = false;
@prop export let dismissable: $$Props['dismissable'] = false;
@prop export let border: $$Props['border'] = false;
@prop export let href: $$Props['href'] = '';
@prop export let rounded: $$Props['rounded'] = false;
@prop export let transition: NonNullable<$$Props['transition']> = fade;
@prop export let params: $$Props['params'] = {};
-->
