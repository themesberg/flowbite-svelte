<script lang="ts">
  import { Label, Timepicker, P } from "flowbite-svelte";

  let selectedTimeWithTimezone = $state({ time: "12:00", timezone: "UTC" });
  const timezones = [
    { value: "UTC", name: "UTC" },
    { value: "EST", name: "Eastern Time (EST)" },
    { value: "CST", name: "Central Time (CST)" },
    { value: "MST", name: "Mountain Time (MST)" },
    { value: "PST", name: "Pacific Time (PST)" },
    { value: "GMT", name: "Greenwich Mean Time (GMT)" },
    { value: "CET", name: "Central European Time (CET)" }
  ];

  function handleTimezoneChange(data: { time: string; endTime: string; [key: string]: string }): void {
    if (data) {
      // Extract the timezone from the "timezone" key in the data object
      selectedTimeWithTimezone = {
        time: data.time,
        timezone: data.timezone || "UTC" // Fallback to default if not provided
      };
    }
  }
</script>

<Label>Select Time and Timezone:</Label>
<Timepicker type="select" optionLabel="Timezone" options={timezones} onselect={handleTimezoneChange} value={selectedTimeWithTimezone.time} />
<P>Selected: {selectedTimeWithTimezone.time} {selectedTimeWithTimezone.timezone}</P>
