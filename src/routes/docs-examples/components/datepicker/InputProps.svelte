<script lang="ts">
  import { Label, Datepicker } from "flowbite-svelte";
  let selectedDate = $state<Date | undefined>(undefined);
</script>

<Label class="mb-2 flex items-center font-bold italic">My Datepicker</Label>
<Datepicker bind:value={selectedDate} inputProps={{ id: "my-datepicker" }} />
