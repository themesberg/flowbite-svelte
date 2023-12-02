<script lang="ts">
  import TransitionFrame from '$lib/utils/TransitionFrame.svelte';
  import type { ComponentProps } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import CloseButton from '../utils/CloseButton.svelte';

  interface $$Props extends Omit<ComponentProps<TransitionFrame>, 'color'> {
    color?: 'primary' | 'blue' | 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'none';
    large?: boolean;
  }

  export let color: 'primary' | 'blue' | 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'none' = 'primary';
  export let large: boolean = false;
  export let dismissable: boolean = false;

  const colors = {
    primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
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
    blue: 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400',
    dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-500 dark:border-gray-500',
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
    blue: 'hover:bg-blue-200',
    dark: 'hover:bg-gray-200',
    red: 'hover:bg-red-200',
    green: 'hover:bg-green-200',
    yellow: 'hover:bg-yellow-200',
    indigo: 'hover:bg-indigo-200',
    purple: 'hover:bg-purple-200',
    pink: 'hover:bg-pink-200',
    none: ''
  };

  const baseClass: string = 'font-medium inline-flex items-center justify-center px-2.5 py-0.5';

  let badgeClass: string;
  $: badgeClass = twMerge(baseClass, large ? 'text-sm' : 'text-xs', $$restProps.border ? `border ${borderedColors[color]}` : colors[color], $$restProps.href && hoverColors[color], $$restProps.rounded ? 'rounded-full' : 'rounded', $$props.class);

  // only overwrite necessary colors (<CloseButton> v0.29.10)
  const closeBtnColors = {
    primary: 'text-primary-400 hover:text-primary-900 dark:hover:bg-primary-800 dark:hover:text-primary-300',
    blue: 'text-blue-400 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300',
    dark: 'text-gray-400 hover:text-gray-400 hover:bg-gray-600 dark:hover:text-gray-300',
    red: 'text-red-400 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300',
    green: 'text-green-400 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300',
    yellow: 'text-yellow-400 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300',
    indigo: 'text-indigo-400 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300',
    purple: 'text-purple-400 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300',
    pink: 'text-pink-400 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300',
    none: ''
  };
</script>

<TransitionFrame {dismissable} {...$$restProps} class={badgeClass} let:close on:close>
  <slot />
  {#if dismissable}
    <slot name="close-button" {close}>
      <CloseButton {color} on:click={close} size={large ? 'sm' : 'xs'} name="Remove badge" class="ms-1.5 -me-1.5" />
    </slot>
  {/if}
</TransitionFrame>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: 'primary' | 'blue' | 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'none' = 'primary';
@prop export let large: boolean = false;
@prop export let dismissable: boolean = false;
-->
