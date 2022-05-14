<script lang="ts">
  import classNames from 'classnames';
  import { getContext } from 'svelte';
  import { HiXOutline } from 'svelte-icons/hi';
  import { get, type Writable } from 'svelte/store';

  const state = getContext<
    Writable<{
      isClosed: boolean;
      isRemoved: boolean;
      duration: number;
    }>
  >('state');
</script>

<button
  data-testid="toast-toggle-element"
  type="button"
  class="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
  on:click={() => {
    state.update((v) => ({
      ...v,
      isClosed: true,
    }));
    setTimeout(() => {
      state.update((v) => ({
        ...v,
        isRemoved: true,
      }));
    }, get(state).duration || 300);
  }}
>
  <span class="sr-only">Close</span>
  <HiXOutline class="h-5 w-5 shrink-0" />
</button>
