<script context="module" lang="ts">
  // this part is shared between Radio and Checkbox
  import { twMerge } from 'tailwind-merge';

  const colorClasses: Record<FormColorType, string> = {
    primary: 'text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600',
    secondary: 'text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600',
    red: 'text-red-600 focus:ring-red-500 dark:focus:ring-red-600',
    green: 'text-green-600 focus:ring-green-500 dark:focus:ring-green-600',
    purple: 'text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600',
    teal: 'text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600',
    yellow: 'text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600',
    orange: 'text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600',
    blue: 'text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600'
  };

  export const labelClass = (inline: boolean, extraClass: string) => twMerge(inline ? 'inline-flex' : 'flex', 'items-center', extraClass);

  export const inputClass = (custom: boolean, color: FormColorType, rounded: boolean, tinted: boolean, spacing: string, extraClass: string) => twMerge('w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2', spacing, tinted ? 'dark:bg-gray-600 dark:border-gray-500' : 'dark:bg-gray-700 dark:border-gray-600', custom && 'sr-only peer', rounded && 'rounded', colorClasses[color], extraClass);
</script>

<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { getContext } from 'svelte';
  import type { FormColorType } from '../types';
  import Label from './Label.svelte';

  interface $$Props extends HTMLInputAttributes {
    color?: FormColorType;
    custom?: boolean;
    inline?: boolean;
    group?: number | string | undefined;
    value?: number | string;
    spacing?: string;
    checked?: boolean;
  }

  export let color: NonNullable<$$Props['color']> = 'primary';
  export let custom: NonNullable<$$Props['custom']> = false;
  export let inline: NonNullable<$$Props['inline']> = false;
  export let group: $$Props['group'] = undefined;
  export let value: $$Props['value'] = '';
  export let spacing: NonNullable<$$Props['spacing']> = $$slots.default ? 'me-2' : '';
  export let checked: $$Props['checked'] = false;

  // tinted if put in component having its own background
  let background: boolean = getContext('background');
  $: if (checked && group === undefined) {
    group = value;
  }
</script>

<Label class={labelClass(inline, $$props.class)} show={$$slots.default}>
  <input type="radio" bind:group={group} on:blur on:change on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover on:paste {value} {...$$restProps} class={inputClass(custom, color, false, background, spacing, $$slots.default || $$props.class)} />
  <slot />
</Label>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let color: NonNullable<$$Props['color']> = 'primary';
@prop export let custom: NonNullable<$$Props['custom']> = false;
@prop export let inline: NonNullable<$$Props['inline']> = false;
@prop export let group: $$Props['group'] = undefined;
@prop export let value: $$Props['value'] = '';
@prop export let spacing: NonNullable<$$Props['spacing']> = $$slots.default ? 'me-2' : '';
@prop export let checked: $$Props['checked'] = false;
-->
