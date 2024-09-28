<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import generateId from '../utils/generateId.js';
  import type { InputType } from '../types';

  interface $$Props extends Omit<HTMLInputAttributes, 'size'> {
    id?: string;
    style?: 'filled' | 'outlined' | 'standard';
    type?: InputType;
    size?: 'small' | 'default';
    color?: 'base' | 'green' | 'red';
    value?: any;
  }

  export let id: $$Props['id'] = generateId();
  export let style: NonNullable<$$Props['style']> = 'standard';
  export let type: NonNullable<$$Props['type']> = 'text';
  export let size: NonNullable<$$Props['size']> = 'default';
  export let color: NonNullable<$$Props['color']> = 'base';
  export let value: $$Props['value'] = undefined;

  const divClasses = {
    filled: 'relative',
    outlined: 'relative',
    standard: 'relative z-0'
  };

  const inputSizes = {
    filled: {
      small: 'px-2.5 pb-1.5 pt-4',
      default: 'px-2.5 pb-2.5 pt-5'
    },
    outlined: {
      small: 'px-2.5 pb-1.5 pt-3',
      default: 'px-2.5 pb-2.5 pt-4'
    },
    standard: {
      small: 'py-2 px-0',
      default: 'py-2.5 px-0'
    }
  };

  const labelSizes = {
    filled: {
      small: 'top-3',
      default: 'top-4'
    },
    outlined: {
      small: 'top-1',
      default: 'top-2'
    },
    standard: {
      small: 'top-3',
      default: 'top-3'
    }
  };

  const inputClasses = {
    filled: 'block rounded-t-lg w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer',
    outlined: 'block w-full text-sm text-gray-900 bg-transparent rounded-lg border appearance-none dark:text-white  focus:outline-none focus:ring-0 peer',
    standard: 'block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer'
  };

  const labelClasses = {
    filled: 'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-left rtl:origin-right start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4',
    outlined: 'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left rtl:origin-right bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1',
    standard: 'absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left rtl:origin-right peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
  };

  const inputColorClasses = {
    base: 'border-gray-300 dark:border-gray-600 dark:focus:border-primary-500 focus:border-primary-600',
    green: 'border-green-600 dark:border-green-500 dark:focus:border-green-500 focus:border-green-600',
    red: 'border-red-600 dark:border-red-500 dark:focus:border-red-500  focus:border-red-600'
  };

  const labelColorClasses = {
    base: 'text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 peer-focus:dark:text-primary-500',
    green: 'text-green-600 dark:text-green-500',
    red: 'text-red-600 dark:text-red-500'
  };
</script>

<div class={twMerge(divClasses[style], $$props.classDiv)}>
  <input {id} {...$$restProps} bind:value on:blur on:change on:click on:focus on:input on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover on:paste {...{ type }} placeholder=" " class={twMerge(inputClasses[style], inputColorClasses[color], inputSizes[style][size], $$props.classInput)} />

  <label for={id} class={twMerge(labelClasses[style], labelColorClasses[color], labelSizes[style][size], $$props.classLabel)}>
    <slot />
  </label>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let id: $$Props['id'] = generateId();
@prop export let style: NonNullable<$$Props['style']> = 'standard';
@prop export let type: NonNullable<$$Props['type']> = 'text';
@prop export let size: NonNullable<$$Props['size']> = 'default';
@prop export let color: NonNullable<$$Props['color']> = 'base';
@prop export let value: $$Props['value'] = undefined;
-->
