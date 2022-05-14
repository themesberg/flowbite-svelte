<script lang="ts">
  import classNames from 'classnames';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let duration: 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000 = 300;

  const state = writable({
    isClosed: false,
    isRemoved: false,
    duration: duration,
  });
  setContext('state', state);

  const durationClasses = {
    75: 'duration-75',
    100: 'duration-100',
    150: 'duration-150',
    200: 'duration-200',
    300: 'duration-300',
    500: 'duration-500',
    700: 'duration-700',
    1000: 'duration-1000',
  };
</script>

<div
  data-testid="toast-element"
  class={classNames(
    'flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400',
    durationClasses[duration],
    { 'opacity-0 ease-out': $state.isClosed },
    { hidden: $state.isRemoved },
    $$props.class
  )}
>
  <slot />
</div>
