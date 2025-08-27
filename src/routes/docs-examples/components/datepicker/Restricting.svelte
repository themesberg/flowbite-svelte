<script lang="ts">
  import { Datepicker, P } from "flowbite-svelte";
  let selectedDate = $state<Date | undefined>(undefined);

  // Helper function to add/subtract days
  function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  // Calculate dates relative to today
  const today = new Date();
  const availableFrom = addDays(today, -10); // 10 days ago
  const availableTo = addDays(today, 10); // 10 days from now

  function formatDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
</script>

<Datepicker bind:value={selectedDate} {availableFrom} {availableTo} placeholder="Select available date" />

<P class="mt-4">Available from: {formatDate(availableFrom)} to: {formatDate(availableTo)}</P>

<P>Selected date: {selectedDate ? formatDate(selectedDate) : "None selected"}</P>

<!-- Show some context -->
<P class="mt-4 text-sm text-gray-600">
  Today: {formatDate(today)}
  <br />
  Range: 10 days before today to 10 days after today
</P>
