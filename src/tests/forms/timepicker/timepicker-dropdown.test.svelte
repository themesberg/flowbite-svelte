<script lang="ts">
  import { Timepicker, type TimePickerOption } from "$lib";

  let value = $state("10:00");

  const options: TimePickerOption[] = [
    { name: "Morning", value: "morning" },
    { name: "Afternoon", value: "afternoon" },
    { name: "Evening", value: "evening" }
  ];
</script>

<div data-testid="dropdown-timepicker">
  <Timepicker id="dropdown-test" type="dropdown" bind:value {options} optionLabel="Time Period" />
</div>
