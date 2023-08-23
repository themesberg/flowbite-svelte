<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';

  import type { Action } from 'svelte/action';
  import type { TransitionConfig } from 'svelte/transition';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  const null_transition = () => ({ duration: 0 });
  const noop = () => {};

  type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;
  type FrameColor = keyof typeof bgColors;

  interface $$Props extends HTMLAnchorAttributes {
    tag?: string;
    color?: FrameColor;
    rounded?: boolean;
    border?: boolean;
    shadow?: boolean;
    transition?: TransitionFunc;
    params?: object;
    node?: HTMLElement | undefined;
    use?: Action<HTMLElement, any>;
    options?: object;
    class?: string;
    role?: string;
  }

  setContext('background', true);

  export let tag: string = $$restProps.href ? 'a' : 'div';
  export let color: FrameColor = 'default';
  export let rounded: boolean = false;
  export let border: boolean = false;
  export let shadow: boolean = false;

  // Export a prop through which you can set a desired svelte transition
  export let transition: TransitionFunc = null_transition;
  // Pass in extra transition params
  export let params: object = {};

  // For components development
  export let node: HTMLElement | undefined = undefined;
  // Action function and its params
  export let use: Action<HTMLElement, any> = noop;
  export let options = {};

  export let role: string | undefined = undefined;

  $: color = color ?? 'default'; // for cases when undefined
  $: setContext('color', color);

  // your script goes here
  const bgColors = {
    gray: 'bg-gray-50 dark:bg-gray-800',
    red: 'bg-red-50 dark:bg-gray-800',
    yellow: 'bg-yellow-50 dark:bg-gray-800 ',
    green: 'bg-green-50 dark:bg-gray-800 ',
    indigo: 'bg-indigo-50 dark:bg-gray-800 ',
    purple: 'bg-purple-50 dark:bg-gray-800 ',
    pink: 'bg-pink-50 dark:bg-gray-800 ',
    blue: 'bg-blue-50 dark:bg-gray-800 ',
    light: 'bg-gray-50 dark:bg-gray-700',
    dark: 'bg-gray-50 dark:bg-gray-800',
    default: 'bg-white dark:bg-gray-800',
    dropdown: 'bg-white dark:bg-gray-700',
    navbar: 'bg-white dark:bg-gray-900',
    navbarUl: 'bg-gray-50 dark:bg-gray-800',
    form: 'bg-gray-50 dark:bg-gray-700',
    primary: 'bg-primary-50 dark:bg-gray-800 ',
    orange: 'bg-orange-50 dark:bg-orange-800',
    none: ''
  };

  const textColors = {
    gray: 'text-gray-800 dark:text-gray-300',
    red: 'text-red-800 dark:text-red-400',
    yellow: 'text-yellow-800 dark:text-yellow-300',
    green: 'text-green-800 dark:text-green-400',
    indigo: 'text-indigo-800 dark:text-indigo-400',
    purple: 'text-purple-800 dark:text-purple-400',
    pink: 'text-pink-800 dark:text-pink-400',
    blue: 'text-blue-800 dark:text-blue-400',
    light: 'text-gray-700 dark:text-gray-300',
    dark: 'text-gray-700 dark:text-gray-300',
    default: 'text-gray-500 dark:text-gray-400',
    dropdown: 'text-gray-700 dark:text-gray-200',
    navbar: 'text-gray-700 dark:text-gray-200',
    navbarUl: 'text-gray-700 dark:text-gray-400',
    form: 'text-gray-900 dark:text-white',
    primary: 'text-primary-800 dark:text-primary-400',
    orange: 'text-orange-800 dark:text-orange-400',
    none: ''
  };

  const borderColors = {
    gray: 'border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800',
    red: 'border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800',
    yellow: 'border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800',
    green: 'border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800',
    indigo: 'border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800',
    purple: 'border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800',
    pink: 'border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800',
    blue: 'border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800',
    light: 'border-gray-500 divide-gray-500',
    dark: 'border-gray-500 divide-gray-500',
    default: 'border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700',
    dropdown: 'border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600',
    navbar: 'border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700',
    navbarUl: 'border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700',
    form: 'border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700',
    primary: 'border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ',
    orange: 'border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800',
    none: ''
  };

  let divClass: string;

  $: divClass = twMerge(bgColors[color], textColors[color], rounded && 'rounded-lg', border && 'border', borderColors[color], shadow && 'shadow-md', $$props.class);
</script>

<svelte:element this={tag} use:use={options} bind:this={node} transition:transition={params} {...$$restProps} class={divClass} on:click on:mouseenter on:mouseleave on:focusin on:focusout {role}>
  <slot />
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let tag: string = $$restProps.href ? 'a' : 'div';
@prop export let color: FrameColor = 'default';
@prop export let rounded: boolean = false;
@prop export let border: boolean = false;
@prop export let shadow: boolean = false;
@prop export let transition: TransitionFunc = null_transition;
@prop export let params: object = {};
@prop export let node: HTMLElement | undefined = undefined;
@prop export let use: Action<HTMLElement, any> = noop;
@prop export let options = {};
@prop export let role: string | undefined = undefined;
-->
