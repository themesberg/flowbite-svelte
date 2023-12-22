<script context="module" lang="ts">
  import type { SizeType, FormSizeType } from '$lib/types';
  export function clampSize(s: SizeType) {
    return s && s === 'xs' ? 'sm' : s === 'xl' ? 'lg' : s;
  }
</script>

<script lang="ts">
  import Wrapper from '$lib/utils/Wrapper.svelte';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type { InputType } from '../types';

  export let type: InputType = 'text';
  export let value: any = undefined;
  export let size: FormSizeType | undefined = undefined;
  export let defaultClass: string = 'block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right';
  export let color: 'base' | 'green' | 'red' = 'base';
  export let floatClass: string = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400';

  const borderClasses = {
    base: 'border-gray-300 dark:border-gray-600',
    tinted: 'border-gray-300 dark:border-gray-500',
    green: 'border-green-500 dark:border-green-400',
    red: 'border-red-500 dark:border-red-400'
  };

  const ringClasses = {
    base: 'focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500',
    green: 'focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500',
    red: 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500'
  };

  const colorClasses = {
    base: 'bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
    tinted: 'bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400',
    green: 'bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700',
    red: 'bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700'
  };

  // tinted if put in component having its own background
  let background: boolean = getContext('background');

  let group: { size: SizeType } = getContext('group');

  const textSizes = { sm: 'sm:text-xs', md: 'text-sm', lg: 'sm:text-base' };
  const leftPadding = { sm: 'ps-9', md: 'ps-10', lg: 'ps-11' };
  const rightPadding = { sm: 'pe-9', md: 'pe-10', lg: 'pe-11' };
  const inputPadding = { sm: 'p-2', md: 'p-2.5', lg: 'p-3' };

  $: _size = size || clampSize(group?.size) || 'md';
  let inputClass: string;
  $: {
    const _color = color === 'base' && background ? 'tinted' : color;
    inputClass = twMerge([defaultClass, inputPadding[_size], ($$slots.left && leftPadding[_size]) || ($$slots.right && rightPadding[_size]), ringClasses[color], colorClasses[_color], borderClasses[_color], textSizes[_size], group || 'rounded-lg', group && 'first:rounded-s-lg last:rounded-e-lg', group && 'border-s-0 first:border-s last:border-e', $$props.class]);
  }
</script>

<Wrapper class="relative w-full" show={$$slots.left || $$slots.right}>
  {#if $$slots.left}
    <div class="{twMerge(floatClass, $$props.classLeft)} start-0 ps-2.5 pointer-events-none">
      <slot name="left" />
    </div>
  {/if}
  <slot props={{ ...$$restProps, class: inputClass }}>
    <input {...$$restProps} bind:value on:blur on:change on:click on:contextmenu on:focus on:keydown on:keypress on:keyup on:mouseover on:mouseenter on:mouseleave on:paste on:input {...{ type }} class={inputClass} />
  </slot>
  {#if $$slots.right}
    <div class="{twMerge(floatClass, $$props.classRight)} end-0 pe-2.5"><slot name="right" /></div>
  {/if}
</Wrapper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let type: InputType = 'text';
@prop export let value: any = undefined;
@prop export let size: FormSizeType | undefined = undefined;
@prop export let defaultClass: string = 'block w-full disabled:cursor-not-allowed disabled:opacity-50';
@prop export let color: 'base' | 'green' | 'red' = 'base';
@prop export let floatClass: string = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400';
-->
