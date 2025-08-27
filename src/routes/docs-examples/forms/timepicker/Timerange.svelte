<script lang="ts">
  import { Label, Timepicker, P } from "flowbite-svelte";

  let selectedTimerangeDropdown = $state({ time: "09:00", endTime: "17:00" });

  function handleTimerangeDropdownChange(data: { time: string; endTime: string; [key: string]: string }): void {
    if (data) {
      selectedTimerangeDropdown = {
        time: data.time,
        endTime: data.endTime
      };
    }
  }
</script>

<Label>Select Time Range:</Label>
<Timepicker type="timerange-dropdown" onselect={handleTimerangeDropdownChange} value={selectedTimerangeDropdown.time} endValue={selectedTimerangeDropdown.endTime} />
<P>Selected Range: {selectedTimerangeDropdown.time} - {selectedTimerangeDropdown.endTime}</P>
