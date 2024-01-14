<script lang="ts">
  import type { SizeType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import { clampSize } from '$lib/forms/Input.svelte';

  export let size: 'sm' | 'md' | 'lg' | undefined = undefined;

  // tinted if put in component having its own background
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
  $: _size = size || clampSize(group?.size) || 'md';

  $: divClass = twMerge(textSizes[_size], prefixPadding[_size], background ? borderClasses['tinted'] : borderClasses['base'], 'text-gray-500 bg-gray-200', background ? darkBgClasses.tinted : darkBgClasses.base, background ? divider.tinted : divider.base, 'inline-flex items-center border-t border-b first:border-s border-e', 'first:rounded-s-lg last:rounded-e-lg', $$props.class);
</script>

<div {...$$restProps} class={divClass}>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let size: 'sm' | 'md' | 'lg' | undefined = undefined;
-->
