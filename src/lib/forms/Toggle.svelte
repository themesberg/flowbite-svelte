<script lang="ts">
  import { getContext } from 'svelte';
  import classNames from 'classnames';
  import Checkbox from './Checkbox.svelte';
  import type { FormColorType } from '../types';

  export let size: 'small' | 'default' | 'large' = 'default';
  export let group: (string | number)[] = [];
  export let value: string | number = '';
  export let checked: boolean | undefined = undefined;

  // tinted if put in component having its own background
  let background: boolean = getContext('background');

  const common =
    "mr-3 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";

  const colors = {
    red: 'peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600',
    green: 'peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600',
    purple: 'peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600',
    yellow: 'peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400',
    teal: 'peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600',
    orange: 'peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500',
    blue: 'peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600'
  };

  const sizes = {
    small: 'w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4',
    default: 'w-11 h-6 after:top-0.5 after:left-[2px] after:h-5 after:w-5',
    large: 'w-14 h-7 after:top-0.5 after:left-[4px]  after:h-6 after:w-6'
  };

  let divClass: string;
  $: divClass = classNames(
    common,
    background ? 'dark:bg-gray-600 dark:border-gray-500' : 'dark:bg-gray-700 dark:border-gray-600',
    colors[($$restProps.color as FormColorType) ?? 'blue'],
    sizes[size],
    'relative'
  );
</script>

<Checkbox custom {...$$restProps} class={$$props.class} {value} bind:checked bind:group on:click on:change>
  <span class={divClass} />
  <slot />
</Checkbox>
