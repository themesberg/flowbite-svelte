<script lang="ts">
  import type { SizeType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import { clampSize } from '$lib';
  import { type InputAddonProps as Props } from '.'

  let { children, class: className, size, ...restProps }: Props = $props();
  let background: boolean = getContext('background');
  let group: { size: SizeType } = getContext('group');

  const borderClasses = {
    base: 'border-gray-300 dark:border-gray-600',
    tinted: 'border-gray-300 dark:border-gray-500'
  };

  const darkBgClasses = {
    base: 'dark:bg-gray-600 dark:text-gray-400',
    tinted: 'dark:bg-gray-500 dark:text-gray-300'
  };

  const divider = {
    base: 'dark:border-e-gray-700 dark:last:border-e-gray-600',
    tinted: 'dark:border-e-gray-600 dark:last:border-e-gray-500'
  };

  const textSizes = { sm: 'sm:text-xs', md: 'text-sm', lg: 'sm:text-base' };
  const prefixPadding = { sm: 'px-2', md: 'px-3', lg: 'px-4' };

  // size: explicit, inherited, default
  let _size = size || clampSize(group?.size) || 'md';

  let divClass: string = twMerge(textSizes[_size], prefixPadding[_size], 'text-gray-500 bg-gray-200', background ? darkBgClasses.tinted : darkBgClasses.base, background ? divider.tinted : divider.base, background ? borderClasses['tinted'] : borderClasses['base'], 'inline-flex items-center border', group && '[&:not(:first-child)]:-ms-px', 'first:rounded-s-lg last:rounded-e-lg', className);
</script>

<div {...restProps} class={divClass}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:class: string;
@props:size: 'sm' | 'md' | 'lg' | undefined;
-->
