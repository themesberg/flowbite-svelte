<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type { ButtonType } from '../types';
  import type { SizeType } from '$lib/types';

  type ButtonColor = keyof typeof colorClasses;

  const group: SizeType = getContext('group');

  export let pill: boolean = false;
  export let outline: boolean = false;
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = group ? 'sm' : 'md';
  export let href: string | undefined = undefined;
  export let type: ButtonType = 'button';
  export let color: ButtonColor = group ? (outline ? 'dark' : 'alternative') : 'primary';
  export let shadow: boolean = false;

  const colorClasses = {
    alternative:
      'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus:text-primary-700 dark:focus:text-white dark:hover:text-white',
    blue: 'text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700',
    dark: 'text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700',
    green: 'text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700',
    light:
      'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600',
    primary: 'text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700',
    purple: 'text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700',
    red: 'text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700',
    yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 ',
    none: ''
  };

  const coloredFocusClasses = {
    alternative: 'focus:ring-gray-200 dark:focus:ring-gray-700',
    blue: 'focus:ring-blue-300 dark:focus:ring-blue-800',
    dark: 'focus:ring-gray-300 dark:focus:ring-gray-700',
    green: 'focus:ring-green-300 dark:focus:ring-green-800',
    light: 'focus:ring-gray-200 dark:focus:ring-gray-700',
    primary: 'focus:ring-primary-300 dark:focus:ring-primary-800',
    purple: 'focus:ring-purple-300 dark:focus:ring-purple-900',
    red: 'focus:ring-red-300 dark:focus:ring-red-900',
    yellow: 'focus:ring-yellow-300 dark:focus:ring-yellow-900',
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
    alternative:
      'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
    blue: 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600',
    dark: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600',
    green:
      'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600',
    light:
      'text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600',
    primary:
      'text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600',
    purple:
      'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500',
    red: 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600',
    yellow:
      'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400',
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
    group ? 'focus:ring-2' : 'focus:ring-4',
    group && 'focus:z-10',
    group || 'focus:outline-none',
    'inline-flex items-center justify-center ' + sizeClasses[size],
    outline ? outlineClasses[color] : colorClasses[color],
    color === 'alternative' &&
      (group
        ? 'dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600'
        : 'dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700'),
    outline &&
      color === 'dark' &&
      (group ? 'dark:text-white dark:border-white' : 'dark:text-gray-400 dark:border-gray-700'),
    coloredFocusClasses[color],
    hasBorder() && group && 'border-l-0 first:border-l',
    group
      ? (pill && 'first:rounded-l-full last:rounded-r-full') || 'first:rounded-l-lg last:rounded-r-lg'
      : (pill && 'rounded-full') || 'rounded-lg',
    shadow && 'shadow-lg',
    shadow && coloredShadowClasses[color],
    $$props.disabled && 'cursor-not-allowed opacity-50',
    $$props.class
  );
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  type={href ? undefined : type}
  {href}
  {...$$restProps}
  class={buttonClass}
  on:click
  on:change
  on:keydown
  on:keyup
  on:touchstart
  on:touchend
  on:touchcancel
  on:mouseenter
  on:mouseleave
  role={href ? 'button' : undefined}>
  <slot />
</svelte:element>

<!--
  @component
  ## Features
  [Go to Button](https://flowbite-svelte.com/docs/components/button)
  - Setup
  - Default button
  - Button with link
  - Button pills
  - Gradient monochrome
  - Gradient duotone
  - Gradient outline
  - Colored shadows
  - Outline buttons
  - Button sizes
  - Buttons with icon
  - Button with label
  - Icon buttons
  - Loader
  - Disabled  
  ## Props
  @prop pill: boolean = false;
  @prop outline: boolean = false;
  @prop size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = group ? 'sm' : 'md';
  @prop href: string | undefined = undefined;
  @prop btnClass: string | undefined = undefined;
  @prop type: ButtonType = 'button';
  @prop color: ButtonColor = group ? (outline ? 'dark' : 'alternative') : 'primary';
  @prop shadow: boolean = false;
  ## Event
  - on:click
  - on:change
  - on:keydown
  - on:keyup
  - on:touchstart
  - on:touchend
  - on:touchcancel
  - on:mouseenter
  - on:mouseleave
  ## Example
  ```
  <script>
    import { Button } from 'flowbite-svelte';
  </script>

  <Button>Default</Button>
  <Button color="alternative">Alternative</Button>
  <Button color="dark">Dark</Button>
  <Button color="light">Light</Button>  
  ```
-->
