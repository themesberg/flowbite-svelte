<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import classNames from 'classnames';
  import { ChevronRight } from 'svelte-heros';
  export let href: string = '/';
  export let iconSize: string = '18';
  export let iconClass: string = '';
  export let icon: typeof SvelteComponent = ChevronRight;
</script>

<a
  {href}
  {...$$restProps}
  class={classNames(
    'inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700',
    $$props.class
  )}
>
  <slot />
  <svelte:component this={icon} size={iconSize} class={classNames('ml-2', iconClass)} />
</a>
