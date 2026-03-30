<script lang="ts">
  import { Pagination } from "flowbite-svelte";
  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";
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

    <Pagination table {previous} {next}>
      {#snippet prevContent()}
        <div class="flex items-center gap-2">
          <ArrowLeftOutline class="me-2 h-5 w-5" />
          Prev
        </div>
      {/snippet}
      {#snippet nextContent()}
        <div class="flex items-center gap-2">
          Next
          <ArrowRightOutline class="ms-2 h-5 w-5" />
        </div>
      {/snippet}
    </Pagination>
  </div>
</div>
