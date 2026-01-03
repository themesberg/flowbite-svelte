<script lang="ts">
  import { Timepicker, type TimePickerOption } from "$lib";

  let value = $state("09:00");

  const options: TimePickerOption[] = [
    { name: "AM", value: "am" },
    { name: "PM", value: "pm" }
  ];
</script>

<div data-testid="select-timepicker">
  <Timepicker id="select-test" type="select" bind:value {options} />
</div>
