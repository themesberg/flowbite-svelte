<script lang="ts">
  import { Label, Timepicker, P } from "flowbite-svelte";

  let selectedTimeRange = $state({ time: "09:00", endTime: "17:00" });

  function handleRangeChange(data: { time: string; endTime: string; [key: string]: string }): void {
    if (data) {
      selectedTimeRange = {
        time: data.time,
        endTime: data.endTime
      };
    }
  }
</script>

<Label>Select Time Range:</Label>
<Timepicker type="range" onselect={handleRangeChange} value={selectedTimeRange.time} endValue={selectedTimeRange.endTime} divClass="shadow-none" />
<P>Selected Range: {selectedTimeRange.time} - {selectedTimeRange.endTime}</P>
