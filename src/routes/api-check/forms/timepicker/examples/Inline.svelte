<script lang="ts">
  import { Label, Datepicker, Timepicker, Button, Accordion, AccordionItem, Avatar, Input } from "flowbite-svelte";
  import { CalendarMonthSolid, ClockSolid, MapPinSolid } from "flowbite-svelte-icons";

  let selectedDate = $state(new Date("2024-06-30"));
  let selectedInlineTime = $state({ time: "12:00" });
  let eventTitle = $state("Digital Transformation");
  let eventLocation = $state("California, USA");
  let eventDuration = $state("30 min");
  let eventType = $state("Web conference");
  let participants = [
    { img: "/images/profile-picture-1.webp", alt: "Participant 1" },
    { img: "/images/profile-picture-2.webp", alt: "Participant 2" },
    { img: "/images/profile-picture-3.webp", alt: "Participant 3" }
  ];

  const timeIntervals = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30"];

  function handleTimeSelect(data: { time: string; endTime: string; [key: string]: string }): void {
    if (data) {
      selectedInlineTime = {
        time: data.time
      };
    }
  }
</script>

<div class="mx-auto max-w-2xl rounded-lg bg-white shadow-md dark:bg-gray-800">
  <div class="p-6">
    <h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{eventTitle}</h2>

    <div class="mb-6 flex flex-wrap gap-4">
      <div class="flex items-center">
        <CalendarMonthSolid class="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
        <span class="text-gray-900 dark:text-white">{selectedDate.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" })}</span>
      </div>
      <div class="flex items-center">
        <ClockSolid class="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
        <span class="text-gray-900 dark:text-white">{selectedInlineTime.time}</span>
      </div>
      <div class="flex items-center">
        <MapPinSolid class="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
        <span class="text-gray-900 dark:text-white">{eventLocation}</span>
      </div>
    </div>

    <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div>
        <Label class="mb-2">Participants</Label>
        <div class="flex -space-x-4">
          {#each participants as participant}
            <Avatar src={participant.img} alt={participant.alt} />
          {/each}
          <Avatar class="bg-gray-700 text-white">+99</Avatar>
        </div>
      </div>
      <div>
        <Label class="mb-2">Duration</Label>
        <span class="text-lg font-medium text-gray-900 dark:text-white">{eventDuration}</span>
      </div>
      <div>
        <Label class="mb-2">Meeting Type</Label>
        <span class="text-lg font-medium text-gray-900 dark:text-white">{eventType}</span>
      </div>
    </div>

    <div class="border-t border-gray-200 pt-6 dark:border-gray-700">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <Label class="mb-2">Select Date</Label>
          <Datepicker bind:value={selectedDate} inline />
        </div>
        <div>
          <Label class="mb-2">Select Time</Label>
          <Timepicker type="inline-buttons" value={selectedInlineTime.time} {timeIntervals} onselect={handleTimeSelect} />
        </div>
      </div>
    </div>
  </div>

  <Accordion flush>
    <AccordionItem class="p-2">
      {#snippet header()}
        Additional Options
      {/snippet}
      <div class="space-y-4 p-4">
        <div>
          <Label for="event-title">Event Title</Label>
          <Input id="event-title" bind:value={eventTitle} />
        </div>
        <div>
          <Label for="event-location">Location</Label>
          <Input id="event-location" bind:value={eventLocation} />
        </div>
        <div>
          <Label for="event-duration">Duration</Label>
          <Input id="event-duration" bind:value={eventDuration} />
        </div>
        <div>
          <Label for="event-type">Meeting Type</Label>
          <Input id="event-type" bind:value={eventType} />
        </div>
      </div>
    </AccordionItem>
  </Accordion>

  <div class="border-t border-gray-200 p-6 dark:border-gray-700">
    <Button color="primary">Schedule Event</Button>
  </div>
</div>
