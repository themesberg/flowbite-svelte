<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import classNames from 'classnames';
  import CloseButton from '../utils/CloseButton.svelte';

  export let color: 'blue' | 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'none' =
    'blue';
  export let large: boolean = false;
  export let border: boolean = false;
  export let href: string | undefined = undefined;
  export let rounded: boolean = false;
  export let index: boolean = false;
  export let dismissable: boolean = false;

  const colors = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    ['!blue']: 'bg-blue-500 text-blue-100',
    ['!dark']: 'bg-gray-500 text-gray-100',
    ['!red']: 'bg-red-500 text-white',
    ['!green']: 'bg-green-500 text-green-100',
    ['!yellow']: 'bg-yellow-300 text-yellow-800',
    ['!indigo']: 'bg-indigo-500 text-indigo-100',
    ['!purple']: 'bg-purple-500 text-purple-100',
    ['!pink']: 'bg-pink-500 text-pink-100',
    none: ''
  };

  const borderedColors = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400',
    dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-500',
    red: 'bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400',
    green: 'bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400',
    purple: 'bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400',
    pink: 'bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400',
    none: ''
  };

  const hoverColors = {
    blue: 'hover:bg-blue-200',
    dark: 'hover:bg-gray-200',
    red: 'hover:bg-red-200',
    green: 'hover:bg-green-200',
    yellow: 'hover:bg-yellow-200',
    indigo: 'hover:bg-indigo-200',
    purple: 'hover:bg-purple-200',
    pink: 'hover:bg-pink-200',
    none: ''
  };

  const baseClass: string = 'font-medium inline-flex items-center justify-center px-2.5 py-0.5';

  let transition = false;

  let badgeClass: string;
  $: badgeClass = classNames(
    baseClass,
    large ? 'text-sm' : 'text-xs',
    border ? `border ${borderedColors[color]}` : colors[color],
    href && hoverColors[color],
    rounded ? 'rounded-full' : 'rounded',
    index && 'absolute font-bold border-2 border-white dark:border-gray-900',
    index && (large ? 'w-7 h-7 -top-3 -right-3' : 'w-6 h-6 -top-2 -right-2'),
    transition && 'transition-opacity duration-300 ease-out opacity-0',
    $$props.class
  );

  const closeBtnBaseClass: string =
    'inline-flex items-center !p-0.5 !m-0 !ml-2 text-sm bg-transparent rounded-sm focus:!ring-0';

  // only overwrite necessary colors (<CloseButton> v0.29.10)
  const closeBtnColors = {
    blue: 'text-blue-400 hover:text-blue-900 dark:hover:!bg-blue-800 dark:hover:text-blue-300',
    dark: 'text-gray-400 hover:!text-gray-400 hover:!bg-gray-200 dark:hover:!text-gray-300',
    red: 'text-red-400 hover:text-red-900 dark:hover:!bg-red-800 dark:hover:text-red-300',
    green: 'text-green-400 hover:text-green-900 dark:hover:!bg-green-800 dark:hover:text-green-300',
    yellow: 'text-yellow-400 hover:text-yellow-900 dark:hover:!bg-yellow-800 dark:hover:text-yellow-300',
    indigo: 'text-indigo-400 hover:text-indigo-900 dark:hover:!bg-indigo-800 dark:hover:text-indigo-300',
    purple: 'text-purple-400 hover:text-purple-900 dark:hover:!bg-purple-800 dark:hover:text-purple-300',
    pink: 'text-pink-400 hover:text-pink-900 dark:hover:!bg-pink-800 dark:hover:text-pink-300',
    none: ''
  };

  let closeBtnClass: string;
  $: closeBtnClass = classNames(closeBtnBaseClass, closeBtnColors[color]);

  let hidden = false;
  const dispatch = createEventDispatcher();

  const handleHide = () => {
    transition = true;
    setTimeout(() => {
      hidden = true;
    }, 300);
    dispatch('dismiss', {
      message: 'The badge will be dismissed.'
    });
  };
</script>

<svelte:element this={href ? 'a' : 'span'} {href} {...$$restProps} class={badgeClass} class:hidden>
  <slot />
  {#if dismissable}
    <slot name="closeBtn" {handleHide}>
      <CloseButton
        {color}
        on:click={handleHide}
        size={large ? 'sm' : 'xs'}
        name="Remove badge"
        class={closeBtnClass} />
    </slot>
  {/if}
</svelte:element>
