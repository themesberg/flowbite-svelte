<script lang="ts">
  import { Label, Timepicker } from "$lib";
  let selectedTime = $state("09:00");
</script>

<Label>Select Time: {selectedTime}</Label>
<Timepicker bind:value={selectedTime} />
