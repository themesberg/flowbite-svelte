<script lang="ts">
  import { Button, Modal, Label, Datepicker, Timepicker, Heading, P, type DateOrRange } from "flowbite-svelte";
  import { ClockSolid } from "flowbite-svelte-icons";

  let open = $state(false);
  let modalSelectedDate = $state(new Date());
  let modalTimeSelection = $state({ time: "10:00", endTime: "11:00" });
  const timeIntervals = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30"];

  function handleModalDateSelect(selectedDate: DateOrRange): void {
    if (selectedDate instanceof Date) {
      modalSelectedDate = selectedDate;
    } else if (selectedDate && typeof selectedDate === "object") {
      // Handle range case if needed
      if (selectedDate.from) {
        modalSelectedDate = selectedDate.from;
      }
    }
  }

  function handleModalTimeSelect(data?: { time: string; endTime: string; [key: string]: string }): void {
    if (data) {
      modalTimeSelection = {
        time: data.time,
        endTime: data.endTime
      };
    }
  }

  function handleSave(): void {
    open = false;
  }
</script>

<Button onclick={() => (open = true)}>
  <ClockSolid class="me-2 h-4 w-4" />
  Schedule appointment
</Button>

{#if modalTimeSelection}
  <P>Appointment scheduled for {modalSelectedDate.toDateString()} at {modalTimeSelection.time}</P>
{/if}

<Modal bind:open class="w-full max-w-[23rem]">
  {#snippet header()}
    <Heading tag="h5" class="mb-4 font-medium text-gray-900 dark:text-white">Schedule an appointment</Heading>
  {/snippet}
  <div class="p-4 sm:p-5">
    <div class="mb-4">
      <Datepicker bind:value={modalSelectedDate} onselect={handleModalDateSelect} inline class="mx-auto [&_div>button]:bg-gray-50 [&>div>div]:bg-gray-50 [&>div>div]:shadow-none" />
    </div>
    <div class="mb-4">
      <Label class="mb-2 block">Pick your time</Label>
      <Timepicker type="inline-buttons" value={modalTimeSelection.time} {timeIntervals} onselect={handleModalTimeSelect} columns={3} />
    </div>
    <div class="flex items-center space-x-4">
      <Button color="primary" class="w-full" onclick={handleSave}>Save</Button>
      <Button color="alternative" class="w-full" onclick={() => (open = false)}>Discard</Button>
    </div>
  </div>
</Modal>