<script lang="ts">
  import { Label, Timepicker, P } from "flowbite-svelte";

  let selectedTime = $state({ time: "12:00", duration: "30" });
  const durations = [
    { value: "30", name: "30 minutes" },
    { value: "60", name: "1 hour" },
    { value: "120", name: "2 hours" }
  ];

  function handleChange(data: { time: string; endTime: string; [key: string]: string }): void {
    if (data) {
      selectedTime = {
        time: data.time,
        duration: data.duration || "30"
      };
    }
  }
</script>

<Label>Select Time and Duration:</Label>
<Timepicker type="dropdown" optionLabel="Duration" options={durations} onselect={handleChange} value={selectedTime.time} />
<P>Selected: {selectedTime.time}, Duration: {selectedTime.duration}</P>
