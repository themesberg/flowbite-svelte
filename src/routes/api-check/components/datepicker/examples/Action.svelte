<script lang="ts">
  import { Datepicker, P, type DateOrRange } from "flowbite-svelte";
  let selectedDate = $state<Date | undefined>(undefined);
  let lastAction = $state<string | undefined>();

  function handleClear() {
    lastAction = "Cleared";
  }

  function handleApply(detail: DateOrRange): void {
    lastAction = "Applied";
    if (detail instanceof Date) {
      selectedDate = detail;
    }
  }
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker bind:value={selectedDate} showActionButtons autohide={false} onclear={handleClear} onapply={handleApply} />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</P>
  <P class="mt-2">Last action: {lastAction}</P>
</div>