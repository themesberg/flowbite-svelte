<script context="module" lang="ts">
  import type { SizeType, FormSizeType } from '$lib/types';
  export function clampSize(s: SizeType) {
    return s && s === 'xs' ? 'sm' : s === 'xl' ? 'lg' : s;
  }
</script>

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import { type InputProps as Props, input } from '.';

  let {
    children,
    left,
    right,
    value = $bindable(),
    size,
    defaultClass = 'block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right',
    color = 'base',
    floatClass = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400',
    class: className,
    classLeft,
    classRight,
    show = false,
    ...attributes
  }: Props = $props();

  // const borderClasses = {
  //   base: 'border border-gray-300 dark:border-gray-600',
  //   tinted: 'border border-gray-300 dark:border-gray-500',
  //   green: 'border border-green-500 dark:border-green-400',
  //   red: 'border border-red-500 dark:border-red-400'
  // };

  // const ringClasses = {
  //   base: 'focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500',
  //   green:
  //     'focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500',
  //   red: 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500'
  // };

  // const colorClasses = {
  //   base: 'bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
  //   tinted:
  //     'bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400',
  //   green:
  //     'bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700',
  //   red: 'bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700'
  // };

  // tinted if put in component having its own background
  let background: boolean = getContext('background');

  let group: { size: SizeType } = getContext('group');
  let isGroup = !!group;
  // console.log('isGroup', isGroup);

  // const textSizes = { sm: 'sm:text-xs', md: 'text-sm', lg: 'sm:text-base' };
  // const leftPadding = { sm: 'ps-9', md: 'ps-10', lg: 'ps-11' };
  // const rightPadding = { sm: 'pe-9', md: 'pe-10', lg: 'pe-11' };
  // const inputPadding = { sm: 'p-2', md: 'p-2.5', lg: 'p-3' };

  let _size = $derived(size || clampSize(group?.size) || 'md');
  const _color = $derived(color === 'base' && background ? 'tinted' : color);

  const {
    input: inputCls,
    left: leftCls,
    right: rightCls
  } = $derived(
    input({ size: _size, color: _color, group: isGroup, class: className })
  );
  // let inputClass = $derived(
  //   twMerge(
  //     defaultClass,
  //     inputPadding[_size],
  //     (left && leftPadding[_size]) || (right && rightPadding[_size]),
  //     ringClasses[color],
  //     colorClasses[_color],
  //     borderClasses[_color],
  //     textSizes[_size],
  //     group ? '' : 'rounded-lg',
  //     group && 'first:rounded-s-lg last:rounded-e-lg',
  //     group && '[&:not(:first-child)]:-ms-px',
  //     className
  //   )
  // );
</script>

{#snippet inputContent()}
  {#if left}
    <div class={leftCls({ class: classLeft })}>
      {@render left()}
    </div>
  {/if}
  <input {...attributes} bind:value class={inputCls({ class: className })} />
  {#if children}
    {@render children()}
  {/if}
  {#if right}
    <div class={rightCls({ class: classRight })}>
      {@render right()}
    </div>
  {/if}
{/snippet}

{#if group}
  {@render inputContent()}
{:else}
  <div class="relative w-full">
    {@render inputContent()}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop left
@prop right
@prop value = $bindable()
@prop size
@prop defaultClass = 'block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right'
@prop color = 'base'
@prop floatClass = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400'
@prop class: className
@prop classLeft
@prop classRight
@prop show = false
@prop ...attributes
-->
