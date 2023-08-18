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
  [Go to Table](https://flowbite-svelte.com/docs/components/table)
  ## Props
  @prop divClass: string = 'relative overflow-x-auto';
  @prop striped: boolean = false;
  @prop hoverable: boolean = false;
  @prop noborder: boolean = false;
  @prop shadow: boolean = false;
  @prop color: TableColorType = 'default';
  @prop customeColor: string = '';
-->
