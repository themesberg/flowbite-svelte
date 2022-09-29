<script context="module" lang="ts">
  import type { Size } from '$lib/types';
  export function clampSize(s: Size) {
    return s && s === 'xs' ? 'sm' : s === 'xl' ? 'lg' : s;
  }
</script>

<script lang="ts">
  import Wrapper from '$lib/utils/Wrapper.svelte';
  import classNames from 'classnames';
  import { getContext, setContext } from 'svelte';
  import type { InputType } from '../types';

  export let type: InputType = 'text';
  export let value: string = '';
  export let size: 'sm' | 'md' | 'lg' | undefined = undefined;
  export let defaultClass: string = 'block w-full disabled:cursor-not-allowed disabled:opacity-50';
  export let color: 'base' | 'green' | 'red' = 'base';

  const borderClasses = {
    base: 'border-gray-300 dark:border-gray-600',
    tinted: 'border-gray-300 dark:border-gray-500',
    green: 'border-green-500 dark:border-green-400',
    red: 'border-red-500 dark:border-red-400'
  };

  const ringClasses = {
    base: 'focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500',
    green:
      'focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500',
    red: 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500'
  };

  const colorClasses = {
    base: 'bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
    tinted: 'bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400',
    green: 'bg-green-50 text-green-900 placeholder-green-700 dark:bg-gray-700',
    red: 'bg-red-50 text-red-900 placeholder-red-700 dark:bg-gray-700'
  };

  // tinted if put in component having its own background
  let background: boolean = getContext('background');

  let group: { size: Size } = getContext('group');

  // you need to this to avoid 2-way binding
  const setType = (node: HTMLInputElement, _type: string) => {
    node.type = _type;
    return {
      update(_type: string) {
        node.type = _type;
      }
    };
  };

  const textSizes = { sm: 'sm:text-xs', md: 'text-sm', lg: 'sm:text-base' };
  const startIconPadding = { sm: 'pl-9', md: 'pl-10', lg: 'pl-11' };
  const endIconPadding = { sm: 'pr-9', md: 'pr-10', lg: 'pr-11' };
  const inputPadding = { sm: 'p-2', md: 'p-2.5', lg: 'p-4' };

  $: _size = size || clampSize(group?.size) || 'md';
  let inputClass: string;
  $: {
    const _color = color === 'base' && background ? 'tinted' : color;
    inputClass = classNames(
      defaultClass,
      $$slots.left && startIconPadding[_size],
      $$slots.right && endIconPadding[_size],
      ringClasses[color],
      colorClasses[_color],
      borderClasses[_color],
      inputPadding[_size],
      textSizes[_size],
      group || 'rounded-lg',
      group && 'first:rounded-l-lg last:rounded-r-lg',
      group && 'border-l-0 first:border-l last:border-r',
      $$props.class
    );
  }
</script>

<Wrapper class="relative w-full" show={$$slots.left || $$slots.right}>
  {#if $$slots.left}
    <div
      class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
      <slot name="left" />
    </div>
  {/if}
  <input
    {...$$restProps}
    bind:value
    on:blur
    on:change
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:input
    use:setType={type}
    class={inputClass} />
  {#if $$slots.right}
    <div class="flex absolute inset-y-0 right-0 items-center pr-3 text-gray-500 dark:text-gray-400">
      <slot name="right" />
    </div>
  {/if}
</Wrapper>
