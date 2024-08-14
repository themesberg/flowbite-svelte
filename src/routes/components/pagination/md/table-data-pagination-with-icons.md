<script lang="ts">
  ...
  let helper = { start: 1, end: 10, total: 100 };
</script>

<div class="flex flex-col items-center justify-center gap-2">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span> to <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span> of <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span> Entries
  </div>

  <Pagination table {previous} {next} >
    {#snippet prevContent()}
    <div class="flex items-center gap-2 text-white bg-gray-800">
      <ArrowLeftOutline class="w-5 h-5 me-2" />
      Prev
    </div>
    {/snippet}
    {#snippet nextContent()}
    <div class="flex items-center gap-2 text-white bg-gray-800">
      Next
      <ArrowRightOutline class="w-5 h-5 ms-2" />
    </div>
    {/snippet}
  </Pagination>
</div>