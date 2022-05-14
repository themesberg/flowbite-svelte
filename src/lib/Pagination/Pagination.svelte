<script lang="ts">
  import classNames from 'classnames';
  import { HiChevronLeftOutline, HiChevronRightOutline } from 'svelte-icons/hi';

  export let currentPage: number;
  export let layout: 'navigation' | 'pagination' | 'table' = 'pagination';
  export let showIcons: boolean = false;
  export let totalPages: number;

  const range = (start: number, end: number): number[] => {
    return [...Array(end - start + 1).keys()].map((key: number): number => key + start);
  };

  $: firstPage = Math.max(1, currentPage - 3);
  $: lastPage = Math.min(currentPage + 3, totalPages);
</script>

<nav {...$$props}>
  {#if layout === 'table'}
    <div class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">{firstPage}</span> to&nbsp;
      <span class="font-semibold text-gray-900 dark:text-white">{lastPage}</span> of&nbsp;
      <span class="font-semibold text-gray-900 dark:text-white">{totalPages}</span> Entries
    </div>
  {/if}
  <ul class="xs:mt-0 mt-2 inline-flex items-center -space-x-px">
    <li>
      <button
        class={classNames(
          'ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
          showIcons ? 'inline-flex' : ''
        )}
        on:click={() => currentPage--}
      >
        {#if showIcons}
          <HiChevronLeftOutline aria-hidden="true" class="h-5 w-5" />
        {/if}
        Previous
      </button>
    </li>
    {#if layout === 'pagination'}
      {#each range(firstPage, lastPage) as page}
        <li aria-current={page === currentPage ? 'page' : undefined}>
          <button
            class={classNames(
              'w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              currentPage === page &&
                'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
            )}
            on:click={() => (currentPage = page)}
          >
            {page}
          </button>
        </li>
      {/each}
    {/if}
    <li>
      <button
        class={classNames(
          'rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
          showIcons ? 'inline-flex' : ''
        )}
        on:click={() => currentPage++}
      >
        Next
        {#if showIcons}
          <HiChevronRightOutline aria-hidden="true" class="h-5 w-5" />
        {/if}
      </button>
    </li>
  </ul>
</nav>
