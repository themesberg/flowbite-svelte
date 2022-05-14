<script lang="ts">
  import classNames from 'classnames';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let collapsed: boolean = false;

  const collapsedState = writable(collapsed);
  $: collapsedState.set(collapsed);
  setContext('collapsed', collapsedState);
</script>

<aside aria-label="Sidebar" {...$$props} class={classNames('h-full', collapsed ? 'w-16' : 'w-64')}>
  <div
    class={classNames(
      'h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3 dark:bg-gray-800',
      $$props.class
    )}
  >
    <slot />
  </div>
</aside>
