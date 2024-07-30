<script context="module" lang="ts">
  import type { SizeType, FormSizeType } from '$lib/types';
  export function clampSize(s: SizeType) {
    return s && s === 'xs' ? 'sm' : s === 'xl' ? 'lg' : s;
  }
</script>

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext, type Snippet } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends HTMLInputAttributes {
    children?: Snippet;
    left?: Snippet;
    right?: Snippet;
    inputSize?: FormSizeType;
    value?: any;
    defaultClass?: string | undefined | null;
    color?: 'base' | 'green' | 'red';
    floatClass?: string | undefined | null;
    classLeft?: string | undefined | null;
    classRight?: string | undefined | null;
    class?: string | undefined | null;
    show?: boolean;
  }

  let {
    children,
    left,
    right,
    value = $bindable(),
    inputSize,
    defaultClass = 'block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right',
    color = 'base',
    floatClass = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400',
    class: className,
    classLeft,
    classRight,
    show = false,
    ...attributes
  }: Props = $props();

  const borderClasses = {
    base: 'border border-gray-300 dark:border-gray-600',
    tinted: 'border border-gray-300 dark:border-gray-500',
    green: 'border border-green-500 dark:border-green-400',
    red: 'border border-red-500 dark:border-red-400'
  };

  const ringClasses = {
    base: 'focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500',
    green:
      'focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500',
    red: 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500'
  };

  const colorClasses = {
    base: 'bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
    tinted:
      'bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400',
    green:
      'bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700',
    red: 'bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700'
  };

  // tinted if put in component having its own background
  let background: boolean = getContext('background');

  let group: { size: SizeType } = getContext('group');
  // console.log('group', group);

  const textSizes = { sm: 'sm:text-xs', md: 'text-sm', lg: 'sm:text-base' };
  const leftPadding = { sm: 'ps-9', md: 'ps-10', lg: 'ps-11' };
  const rightPadding = { sm: 'pe-9', md: 'pe-10', lg: 'pe-11' };
  const inputPadding = { sm: 'p-2', md: 'p-2.5', lg: 'p-3' };

  let _size = inputSize || clampSize(group?.size) || 'md';
  const _color = $derived(color === 'base' && background ? 'tinted' : color);
  let inputClass = $derived(
    twMerge(
      defaultClass,
      inputPadding[_size],
      (left && leftPadding[_size]) || (right && rightPadding[_size]),
      ringClasses[color],
      colorClasses[_color],
      borderClasses[_color],
      textSizes[_size],
      group ? '' : 'rounded-lg',
      group && 'first:rounded-s-lg last:rounded-e-lg',
      group && '[&:not(:first-child)]:-ms-px',
      className
    )
  );
</script>

<div class="relative w-full">
  {#if left}
    <div
      class="{twMerge(
        floatClass,
        classLeft
      )} pointer-events-none start-0 ps-2.5"
    >
      {@render left()}
    </div>
  {/if}
  <input {...attributes} bind:value class={inputClass} />
  {#if children}
    {@render children()}
  {/if}
  {#if right}
    <div class="{twMerge(floatClass, classRight)} end-0 pe-2.5">
      {@render right()}
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop left
@prop right
@prop value = $bindable()
@prop inputSize
@prop defaultClass = 'block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right'
@prop color = 'base'
@prop floatClass = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400'
@prop class: className
@prop classLeft
@prop classRight
@prop show = false
@prop ...attributes
-->
