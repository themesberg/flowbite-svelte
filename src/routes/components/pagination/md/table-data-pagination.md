<div class="flex flex-col items-center justify-center gap-2">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 dark:text-white"
      >{helper.start}</span> to
    <span class="font-semibold text-gray-900 dark:text-white"
      >{helper.end}</span> of
    <span class="font-semibold text-gray-900 dark:text-white"
      >{helper.total}</span> Entries
  </div>
  <Pagination table {previous} {next} />
  <Pagination table size="large" {previous} {next} />
</div>