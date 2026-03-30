<script lang="ts">
  import { Pagination } from "flowbite-svelte";

  let helper = { start: 1, end: 10, total: 100 };

  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<div class="flex flex-col items-center justify-center gap-3">
  <div class="flex flex-col items-center justify-center gap-2">
    <div class="text-body text-sm">
      Showing <span class="text-heading font-semibold">{helper.start}</span>
      to
      <span class="text-heading font-semibold">{helper.end}</span>
      of
      <span class="text-heading font-semibold">{helper.total}</span>
      Entries
    </div>
    <Pagination table {previous} {next} />
    <Pagination table size="large" {previous} {next} />
  </div>
</div>
