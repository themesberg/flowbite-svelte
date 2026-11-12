<script lang="ts">
  import Datepicker from "$lib/datepicker/Datepicker.svelte";

  let { disabled = false }: { disabled?: boolean } = $props();
  let value = $state<Date | undefined>(new Date(2025, 0, 10));
  let selections = $state(0);
</script>

<Datepicker bind:value {disabled} locale="en-US" onselect={() => (selections += 1)} />
<p>Selected day: {value?.getDate()}. Selection events: {selections}.</p>
