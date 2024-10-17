<script lang="ts">
  import type { HTMLSelectAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import type { SelectOptionType } from '../types';

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  interface $$Props extends Omit<HTMLSelectAttributes, 'size'> {
    items?: SelectOptionType<any>[];
    value?: any;
    placeholder?: string;
    underline?: boolean;
    size?: 'sm' | 'md' | 'lg';
    defaultClass?: string;
    underlineClass?: string;
  }

  export let items: $$Props['items'] = [];
  export let value: $$Props['value'] = '';
  export let placeholder: $$Props['placeholder'] = 'Choose option ...';
  export let underline: $$Props['underline'] = false;
  export let size: NonNullable<$$Props['size']> = 'md';
  export let defaultClass: $$Props['defaultClass'] = 'text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500';
  export let underlineClass: $$Props['underlineClass'] = 'text-gray-500 disabled:text-gray-400 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:disabled:text-gray-500 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer';

  const common = 'block w-full';
  const sizes = {
    sm: 'text-sm p-2',
    md: 'text-sm p-2.5',
    lg: 'text-base py-3 px-4'
  };

  let selectClass: string;
  $: selectClass = twMerge(common, underline ? underlineClass : defaultClass, sizes[size], underline && '!px-0', $$props.class);
</script>

<select {...$$restProps} bind:value={value} class={selectClass} on:change on:contextmenu on:input>
  {#if placeholder}
    <option disabled selected={(value === undefined) ? true : undefined} value="">{placeholder}</option>
  {/if}
  {#if items && items.length > 0}
    {#each items as { value: itemValue, name, disabled }}
      <option disabled={disabled} value={itemValue} selected={(itemValue === value) ? true : undefined}>{name}</option>
    {/each}
  {:else}
    <slot />
  {/if}
</select>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let items: $$Props['items'] = [];
@prop export let value: $$Props['value'] = '';
@prop export let placeholder: $$Props['placeholder'] = 'Choose option ...';
@prop export let underline: $$Props['underline'] = false;
@prop export let size: NonNullable<$$Props['size']> = 'md';
@prop export let defaultClass: $$Props['defaultClass'] = 'text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500';
@prop export let underlineClass: $$Props['underlineClass'] = 'text-gray-500 disabled:text-gray-400 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:disabled:text-gray-500 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer';
-->
