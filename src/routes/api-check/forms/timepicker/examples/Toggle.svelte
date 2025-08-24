<script lang="ts">
  import { Label, Timepicker, P } from "flowbite-svelte";

  let selectedTimerangeToggle = $state({ time: "09:00", endTime: "17:00" });

  function handleTimerangeToggleChange(data: { time: string; endTime: string; [key: string]: string }): void {
    if (data) {
      selectedTimerangeToggle = {
        time: data.time,
        endTime: data.endTime
      };
    }
  }
</script>

<Label class="mb-2" for="timerange-toggle">Toggle Time Range:</Label>
<Timepicker type="timerange-toggle" onselect={handleTimerangeToggleChange} value={selectedTimerangeToggle.time} endValue={selectedTimerangeToggle.endTime} divClass="shadow-none" />
<P>Selected Range: {selectedTimerangeToggle.time} - {selectedTimerangeToggle.endTime}</P>