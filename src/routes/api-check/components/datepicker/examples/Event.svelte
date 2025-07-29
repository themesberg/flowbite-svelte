<script lang="ts">
  import { Datepicker, type DateOrRange } from "flowbite-svelte";

  function handleDateSelect(detail: DateOrRange) {
    console.log("Selected date:", detail);
  }
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker onselect={handleDateSelect} />
</div>
