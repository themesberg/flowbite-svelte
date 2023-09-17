<script lang="ts">
  import { twMerge, twJoin } from 'tailwind-merge';
  import { setContext } from 'svelte';
  import type { TableColorType } from '../types';

  export let divClass: string = 'relative overflow-x-auto';
  export let striped: boolean = false;
  export let hoverable: boolean = false;
  export let noborder: boolean = false;
  export let shadow: boolean = false;
  export let color: TableColorType = 'default';
  export let customeColor: string = '';

  const colors = {
    default: 'text-gray-500 dark:text-gray-400',
    blue: 'text-blue-100 dark:text-blue-100',
    green: 'text-green-100 dark:text-green-100',
    red: 'text-red-100 dark:text-red-100',
    yellow: 'text-yellow-100 dark:text-yellow-100',
    purple: 'text-purple-100 dark:text-purple-100',
    indigo: 'text-indigo-100 dark:text-indigo-100',
    pink: 'text-pink-100 dark:text-pink-100',
    custom: customeColor
  };

  $: setContext('striped', striped);
  $: setContext('hoverable', hoverable);
  $: setContext('noborder', noborder);
  $: setContext('color', color);
</script>

<div class={twJoin(divClass, shadow && 'shadow-md sm:rounded-lg')}>
  <table {...$$restProps} class={twMerge('w-full text-left text-sm', colors[color], $$props.class)}>
    <slot />
  </table>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divClass: string = 'relative overflow-x-auto';
@prop export let striped: boolean = false;
@prop export let hoverable: boolean = false;
@prop export let noborder: boolean = false;
@prop export let shadow: boolean = false;
@prop export let color: TableColorType = 'default';
@prop export let customeColor: string = '';
-->
