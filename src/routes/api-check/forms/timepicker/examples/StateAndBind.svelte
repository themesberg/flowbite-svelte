<script lang="ts">
  import { Label, Timepicker } from "$lib";
  let selectedTime = $state("09:00");
  function handleChange(data: { time: string; endTime: string; [key: string]: string }): void {
    if (data) {
      selectedTime = data.time;
    }
  }
</script>

<Label>Select Time: {selectedTime}</Label>
<Timepicker bind:value={selectedTime} />
