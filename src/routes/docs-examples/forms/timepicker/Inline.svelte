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
    { img: "/images/people/profile-picture-1.jpg", alt: "Participant 1" },
    { img: "/images/people/profile-picture-2.jpg", alt: "Participant 2" },
    { img: "/images/people/profile-picture-5.jpg", alt: "Participant 3" }
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

<div class="rounded-base bg-neutral-primary-soft mx-auto max-w-2xl shadow-xs">
  <div class="p-6">
    <h2 class="text-heading mb-4 text-2xl font-bold">{eventTitle}</h2>

    <div class="mb-6 flex flex-wrap gap-4">
      <div class="flex items-center">
        <CalendarMonthSolid class="text-body me-2 h-5 w-5" />
        <span class="text-heading">{selectedDate.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" })}</span>
      </div>
      <div class="flex items-center">
        <ClockSolid class="text-body me-2 h-5 w-5" />
        <span class="text-heading">{selectedInlineTime.time}</span>
      </div>
      <div class="flex items-center">
        <MapPinSolid class="text-body me-2 h-5 w-5" />
        <span class="text-heading">{eventLocation}</span>
      </div>
    </div>

    <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div>
        <Label class="mb-2">Participants</Label>
        <div class="flex -space-x-4">
          {#each participants as participant}
            <Avatar src={participant.img} alt={participant.alt} />
          {/each}
          <Avatar class="bg-dark text-white">+99</Avatar>
        </div>
      </div>
      <div>
        <Label class="mb-2">Duration</Label>
        <span class="text-heading text-lg font-medium">{eventDuration}</span>
      </div>
      <div>
        <Label class="mb-2">Meeting Type</Label>
        <span class="text-heading text-lg font-medium">{eventType}</span>
      </div>
    </div>

    <div class="border-default border-t pt-6">
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

  <div class="border-default border-t p-6">
    <Button>Schedule Event</Button>
  </div>
</div>
