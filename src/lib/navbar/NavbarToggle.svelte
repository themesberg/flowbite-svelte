<script lang="ts">
  import classNames from 'classnames';
  import { HiMenuOutline } from 'svelte-icons/hi';

  export let open: boolean = false;
</script>

<button
  class={classNames(
    'ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
  )}
  data-testid="navbar-toggle"
  on:click={() => (open = !open)}
>
  <span class="sr-only">Open main menu</span>
  <HiMenuOutline class="h-6 w-6 shrink-0" />
</button>
