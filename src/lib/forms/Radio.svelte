<script context="module" lang="ts">
  // this part is shared between Radio and Checkbox
  import { twMerge } from 'tailwind-merge';

  const colorClasses: Record<FormColorType, string> = {
    primary:
      'text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600',
    secondary:
      'text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600',
    red: 'text-red-600 focus:ring-red-500 dark:focus:ring-red-600',
    green: 'text-green-600 focus:ring-green-500 dark:focus:ring-green-600',
    purple: 'text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600',
    teal: 'text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600',
    yellow: 'text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600',
    orange: 'text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600',
    blue: 'text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600'
  };

  export const labelCls = (inline: boolean, extraClass: string) =>
    twMerge(inline ? 'inline-flex' : 'flex', 'items-center', extraClass);
  export let spacing: string = 'me-2';

  export const inputCls = (
    custom: boolean,
    color: FormColorType,
    rounded: boolean,
    tinted: boolean,
    extraClass: string
  ) =>
    twMerge(
      'w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2',
      spacing,
      tinted
        ? 'dark:bg-gray-600 dark:border-gray-500'
        : 'dark:bg-gray-700 dark:border-gray-600',
      custom && 'sr-only peer',
      rounded && 'rounded',
      colorClasses[color],
      extraClass
    );
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import type { FormColorType } from '../types';
  import Label from './Label.svelte';

  interface Props {
    children: Snippet;
    name?: string;
    disabled?: boolean;
    aria_describedby?: string;
    labelclass?: string;
    color?: FormColorType;
    custom?: boolean;
    inline?: boolean;
    group?: number | string | undefined;
    value?: number | string;
    inputclass?: string;
    checked?: boolean;
  }
  let {
    children,
    name,
    disabled = false,
    aria_describedby,
    labelclass = '',
    color = 'primary',
    custom = false,
    inline = false,
    group = $bindable(),
    value,
    inputclass = '',
    checked,
    ...attributes
  }: Props = $props();


  // tinted if put in component having its own background
  let background: boolean = getContext('background');
</script>

<Label labelclass={labelCls(inline, labelclass)}>
  <input
    type="radio"
    bind:group
    {value}
    {name}
    {disabled}
    {checked}
    aria-describedby={aria_describedby}
    {...attributes}
    class={inputCls(custom, color, false, background, inputclass)}
  />
    {@render children()}
</Label>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop name
@prop disabled = false
@prop aria_describedby
@prop labelclass = ''
@prop color = 'primary'
@prop custom = false
@prop inline = false
@prop group = $bindable()
@prop value
@prop inputclass = ''
@prop ...attributes
-->
