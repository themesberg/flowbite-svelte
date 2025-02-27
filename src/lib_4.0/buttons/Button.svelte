<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type { SizeType } from '$lib/types';
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

  type ButtonColor = keyof typeof colorClasses;
  type CommonProps = {
    pill?: boolean;
    outline?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: ButtonColor;
    shadow?: boolean;
    tag?: 'a' | 'button' | 'label';
    checked?: boolean;
  };

  type AnchorProps = CommonProps &
    Omit<HTMLAnchorAttributes, 'type'> & {
      href?: string | undefined;
    };

  type ButtonProps = CommonProps &
    HTMLButtonAttributes & {
      disabled?: HTMLButtonAttributes['disabled'];
      type?: HTMLButtonAttributes['type'];
    };

  type $$Props = AnchorProps | ButtonProps;

  const group: SizeType = getContext('group');

  export let pill: $$Props['pill'] = false;
  export let outline: $$Props['outline'] = false;
  export let size: NonNullable<$$Props['size']> = group ? 'sm' : 'md';
  export let href: string | undefined = undefined;
  export let type: HTMLButtonAttributes['type'] = 'button';
  export let color: NonNullable<$$Props['color']> = group ? (outline ? 'dark' : 'alternative') : 'primary';
  export let shadow: $$Props['shadow'] = false;
  export let tag: $$Props['tag'] = 'button';
  export let checked: $$Props['checked'] = undefined;
  export let disabled: HTMLButtonAttributes['disabled'] = false;

  const colorClasses = {
    alternative: 'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700',
    blue: 'text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700',
    dark: 'text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700',
    green: 'text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700',
    light: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600',
    primary: 'text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700',
    purple: 'text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700',
    red: 'text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700',
    yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 ',
    none: ''
  };

  const colorCheckedClasses = {
    alternative: 'text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner',
    blue: 'text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner',
    dark: 'text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner',
    green: 'text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner',
    light: 'text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner',
    primary: 'text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner',
    purple: 'text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner',
    red: 'text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner',
    yellow: 'text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner',
    none: ''
  };

  const coloredFocusClasses = {
    alternative: 'focus-within:ring-gray-200 dark:focus-within:ring-gray-700',
    blue: 'focus-within:ring-blue-300 dark:focus-within:ring-blue-800',
    dark: 'focus-within:ring-gray-300 dark:focus-within:ring-gray-700',
    green: 'focus-within:ring-green-300 dark:focus-within:ring-green-800',
    light: 'focus-within:ring-gray-200 dark:focus-within:ring-gray-700',
    primary: 'focus-within:ring-primary-300 dark:focus-within:ring-primary-800',
    purple: 'focus-within:ring-purple-300 dark:focus-within:ring-purple-900',
    red: 'focus-within:ring-red-300 dark:focus-within:ring-red-900',
    yellow: 'focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900',
    none: ''
  };

  const coloredShadowClasses = {
    alternative: 'shadow-gray-500/50 dark:shadow-gray-800/80',
    blue: 'shadow-blue-500/50 dark:shadow-blue-800/80',
    dark: 'shadow-gray-500/50 dark:shadow-gray-800/80',
    green: 'shadow-green-500/50 dark:shadow-green-800/80',
    light: 'shadow-gray-500/50 dark:shadow-gray-800/80',
    primary: 'shadow-primary-500/50 dark:shadow-primary-800/80',
    purple: 'shadow-purple-500/50 dark:shadow-purple-800/80',
    red: 'shadow-red-500/50 dark:shadow-red-800/80 ',
    yellow: 'shadow-yellow-500/50 dark:shadow-yellow-800/80 ',
    none: ''
  };

  const outlineClasses = {
    alternative: 'text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800',
    blue: 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600',
    dark: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600',
    green: 'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600',
    light: 'text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600',
    primary: 'text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600',
    purple: 'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500',
    red: 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600',
    yellow: 'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400',
    none: ''
  };

  const sizeClasses = {
    xs: 'px-3 py-2 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-base'
  };

  const hasBorder = () => outline || color === 'alternative' || color === 'light';

  let buttonClass: string;
  $: buttonClass = twMerge(
    'text-center font-medium',
    group ? 'focus-within:ring-2' : 'focus-within:ring-4',
    group && 'focus-within:z-10',
    group || 'focus-within:outline-hidden',
    'inline-flex items-center justify-center ' + sizeClasses[size],
    outline && checked && 'border dark:border-gray-900',
    outline && checked && colorCheckedClasses[color],
    outline && !checked && outlineClasses[color],
    !outline && checked && colorCheckedClasses[color],
    !outline && !checked && colorClasses[color],
    color === 'alternative' && (group && !checked ? 'dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600' : 'dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-600'),
    outline && color === 'dark' && (group ? (checked ? 'bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600' : 'dark:text-white border-gray-800 dark:border-white') : 'dark:text-gray-400 dark:border-gray-700'),
    coloredFocusClasses[color],
    hasBorder() && group && 'not-first:-ms-px',
    group ? (pill && 'first:rounded-s-full last:rounded-e-full') || 'first:rounded-s-lg last:rounded-e-lg' : (pill && 'rounded-full') || 'rounded-lg',
    shadow && 'shadow-lg',
    shadow && coloredShadowClasses[color],
    disabled && 'cursor-not-allowed opacity-50',
    $$props.class
  );
</script>

{#if href && !disabled}
  <a {href} {...$$restProps} class={buttonClass} role="button" on:click on:change on:keydown on:keyup on:touchstart|passive on:touchend on:touchcancel on:mouseenter on:mouseleave on:mouseup on:mousedown>
    <slot />
  </a>
{:else if tag === 'label'}
  <label {...$$restProps} class={buttonClass}>
    <slot />
  </label>
{:else if tag === 'button'}
  <button {type} {...$$restProps} {disabled} class={buttonClass} on:click on:change on:keydown on:keyup on:touchstart|passive on:touchend on:touchcancel on:mouseenter on:mouseleave on:mouseup on:mousedown>
    <slot />
  </button>
{:else}
  <svelte:element this={tag} {...$$restProps} class={buttonClass}>
    <slot />
  </svelte:element>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let pill: $$Props['pill'] = false;
@prop export let outline: $$Props['outline'] = false;
@prop export let size: NonNullable<$$Props['size']> = group ? 'sm' : 'md';
@prop export let href: string | undefined = undefined;
@prop export let type: HTMLButtonAttributes['type'] = 'button';
@prop export let color: NonNullable<$$Props['color']> = group ? (outline ? 'dark' : 'alternative') : 'primary';
@prop export let shadow: $$Props['shadow'] = false;
@prop export let tag: $$Props['tag'] = 'button';
@prop export let checked: $$Props['checked'] = undefined;
@prop export let disabled: HTMLButtonAttributes['disabled'] = false;
-->
