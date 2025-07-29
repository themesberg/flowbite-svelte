<script lang="ts">
  import { Datepicker, Button } from "flowbite-svelte";

  let datepickerRef: HTMLInputElement | undefined = $state();
  let selectedDate: Date | undefined = $state();
</script>

<Datepicker bind:elementRef={datepickerRef} bind:value={selectedDate} placeholder="Select a date" />

<div class="my-4">
  <Button onclick={() => datepickerRef?.focus()}>Focus Datepicker</Button>

  <Button onclick={() => datepickerRef?.select()}>Select All Text</Button>

  <Button onclick={() => datepickerRef?.blur()}>Blur Datepicker</Button>
</div>
