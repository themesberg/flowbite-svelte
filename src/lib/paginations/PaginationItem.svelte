<script lang="ts">
  import classNames from 'classnames';
  import { getContext } from 'svelte';

  export let href: string | undefined = undefined;

  const group = getContext('group');
  const table = getContext('table');

  let defaultClass: string;
  $: defaultClass = classNames(
    'block py-2',
    group ? 'px-3' : 'px-4',
    'text-sm font-medium',
    table || 'border border-gray-300',
    group || (table ? 'rounded' : 'rounded-lg'),
    'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
    $$props.class
  );
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  {href}
  class={defaultClass}
  on:blur
  on:click
  on:focus
  on:keydown
  on:keypress
  on:keyup
  on:mouseenter
  on:mouseleave
  on:mouseover>
  <slot />
</svelte:element>
