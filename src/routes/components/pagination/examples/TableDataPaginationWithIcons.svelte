<script lang="ts">
  import { Pagination } from '$lib';
  import { ArrowLeftOutline, ArrowRightOutline } from 'flowbite-svelte-icons';
  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
  let helper = { start: 1, end: 10, total: 100 };
</script>

<div class="flex flex-col items-center justify-center gap-3">
  <div class="flex flex-col items-center justify-center gap-2">
    <div class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
      to
      <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
      of
      <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
      Entries
    </div>

    <Pagination table {previous} {next}>
      {#snippet prevContent()}
        <div class="flex items-center gap-2 bg-gray-800 text-white">
          <ArrowLeftOutline class="me-2 h-5 w-5" />
          Prev
        </div>
      {/snippet}
      {#snippet nextContent()}
        <div class="flex items-center gap-2 bg-gray-800 text-white">
          Next
          <ArrowRightOutline class="ms-2 h-5 w-5" />
        </div>
      {/snippet}
    </Pagination>
  </div>
</div>