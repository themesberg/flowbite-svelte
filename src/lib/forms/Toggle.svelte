<script lang="ts">
  import { getContext } from 'svelte';
  import type { ComponentProps } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import Checkbox from './Checkbox.svelte';
  import type { FormColorType } from '../types';

  interface $$Props extends Omit<ComponentProps<Checkbox>, 'size'> {
    size?: 'small' | 'default' | 'large' | 'custom';
    group?:  string[];
    value?: string | number;
    checked?: boolean;
    customSize?: string;
    classDiv?: string;
    disabled?: boolean;
  }

  export let size: NonNullable<$$Props['size']> = 'default';
  export let group: $$Props['group'] = [];
  export let value: $$Props['value'] = '';
  export let checked: $$Props['checked'] = undefined;
  export let customSize: $$Props['customSize'] = '';
  export let classDiv: string = '';
  export let disabled: $$Props['disabled'] = false;

  // tinted if put in component having its own background
  let background: boolean = getContext('background');

  const common = "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";

  const colors = {
    primary: 'peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600',
    secondary: 'peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600',
    red: 'peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600',
    green: 'peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600',
    purple: 'peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600',
    yellow: 'peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400',
    teal: 'peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600',
    orange: 'peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500',
    blue: 'peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600'
  };

  const sizes = {
    small: 'w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4',
    default: 'w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5',
    large: 'w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6',
    custom: customSize
  };

  let divClass: string;

  $: divClass = twMerge(common, $$slots.offLabel ? "ms-3" : "", background ? 'dark:bg-gray-600 dark:border-gray-500' : 'dark:bg-gray-700 dark:border-gray-600', colors[($$restProps.color as FormColorType) ?? 'primary'], sizes[size], 'relative', classDiv);
  let checkboxCls: string;
  $: checkboxCls = disabled ? "cursor-not-allowed grayscale contrast-50 text-gray-400" : "cursor-pointer text-gray-900";
</script>

<Checkbox custom {...$$restProps} {disabled} class={twMerge(checkboxCls, $$props.class)} {value} bind:checked bind:group on:click on:change>
  <slot name="offLabel"></slot>
  <span class={divClass}></span>
  <slot></slot>
</Checkbox>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let size: NonNullable<$$Props['size']> = 'default';
@prop export let group: $$Props['group'] = [];
@prop export let value: $$Props['value'] = '';
@prop export let checked: $$Props['checked'] = undefined;
@prop export let customSize: $$Props['customSize'] = '';
@prop export let classDiv: string = '';
@prop export let disabled: $$Props['disabled'] = false;
-->
