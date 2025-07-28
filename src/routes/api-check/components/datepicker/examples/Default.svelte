<script lang="ts">
  import { Datepicker, P } from "flowbite-svelte";
  let selectedDate = $state<Date | undefined>(undefined);
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker bind:value={selectedDate} />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</P>
</div>