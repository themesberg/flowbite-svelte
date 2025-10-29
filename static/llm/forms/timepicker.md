# Svelte Timepicker - Flowbite


The timepicker component can be used to allow the user to select a specific time using a custom time input element and provides flexibility in styling and icon usage.

## Setup

```svelte
<script lang="ts">
  import { Timepicker } from "flowbite-svelte";
</script>
```

## Default timepicker

Use this example of a default timepicker component to allow the user to select a time value.

```svelte
<script lang="ts">
  import { Label, Timepicker } from "flowbite-svelte";
</script>

<Label>Select Time:</Label>
<Timepicker />
```

## Disabled

```svelte
<script lang="ts">
  import { Timepicker } from "flowbite-svelte";
</script>

<Timepicker disabled />
```

## Using state and bind

```svelte
<script lang="ts">
  import { Label, Timepicker } from "$lib";
  let selectedTime = $state("09:00");
</script>

<Label>Select Time: {selectedTime}</Label>
<Timepicker bind:value={selectedTime} />
```

## Timepicker with icon

This example can be used to select a time via an input field where you can add an icon to the input group. You can use a Flowbite Svelte icon component or any other icon component.

```svelte
<script lang="ts">
  import { Label, Timepicker } from "flowbite-svelte";
  import { ClockOutline } from "flowbite-svelte-icons";
</script>

<Label>Select Time (Flowbite Icon):</Label>
<Timepicker Icon={ClockOutline} iconClass="text-red-500" />

<Label>Select Time (Default icon):</Label>
<Timepicker />
```

## Timepicker with custom props

This example shows how to use the timepicker with custom properties.

```svelte
<script lang="ts">
  import { Label, Timepicker } from "flowbite-svelte";
</script>

<Label for="appointment-time">Choose appointment time:</Label>
<Timepicker id="appointment-time" value="09:00" min="08:00" max="18:00" />
```

## Timepicker with dropdown

This example demonstrates how to use the timepicker with a dropdown for selecting duration.

```svelte
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
```

## Timepicker with select

Use this example to show a select input next to the timepicker to select an option like a timezone.

```svelte
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
```

## Timepicker range selector

Use this example to select a time interval using two input fields, often used for the duration of an event. If you set the end time to be earlier than the start time, the component will automatically swap the two times.

```svelte
<script lang="ts">
  import { Label, Timepicker, P } from "flowbite-svelte";

  let selectedTimeRange = $state({ time: "09:00", endTime: "17:00" });

  function handleRangeChange(data: { time: string; endTime: string; [key: string]: string }): void {
    if (data) {
      selectedTimeRange = {
        time: data.time,
        endTime: data.endTime
      };
    }
  }
</script>

<Label>Select Time Range:</Label>
<Timepicker type="range" onselect={handleRangeChange} value={selectedTimeRange.time} endValue={selectedTimeRange.endTime} divClass="shadow-none" />
<P>Selected Range: {selectedTimeRange.time} - {selectedTimeRange.endTime}</P>
```

## Timerange with dropdown

This example can be used to show the timerange picker inside a dropdown only when clicking on a button.

```svelte
<script lang="ts">
  import { Label, Timepicker, P } from "flowbite-svelte";

  let selectedTimerangeDropdown = $state({ time: "09:00", endTime: "17:00" });

  function handleTimerangeDropdownChange(data: { time: string; endTime: string; [key: string]: string }): void {
    if (data) {
      selectedTimerangeDropdown = {
        time: data.time,
        endTime: data.endTime
      };
    }
  }
</script>

<Label>Select Time Range:</Label>
<Timepicker type="timerange-dropdown" onselect={handleTimerangeDropdownChange} value={selectedTimerangeDropdown.time} endValue={selectedTimerangeDropdown.endTime} />
<P>Selected Range: {selectedTimerangeDropdown.time} - {selectedTimerangeDropdown.endTime}</P>
```

## Timerange picker with toggle

This example demonstrates a timerange picker that can be toggled on and off, allowing users to select a start and end time when the picker is visible.

```svelte
<script lang="ts">
  import { Label, Timepicker, P } from "flowbite-svelte";

  let selectedTimerangeToggle = $state({ time: "09:00", endTime: "17:00" });

  function handleTimerangeToggleChange(data: { time: string; endTime: string; [key: string]: string }): void {
    if (data) {
      selectedTimerangeToggle = {
        time: data.time,
        endTime: data.endTime
      };
    }
  }
</script>

<Label class="mb-2" for="timerange-toggle">Toggle Time Range:</Label>
<Timepicker type="timerange-toggle" onselect={handleTimerangeToggleChange} value={selectedTimerangeToggle.time} endValue={selectedTimerangeToggle.endTime} divClass="shadow-none" />
<P>Selected Range: {selectedTimerangeToggle.time} - {selectedTimerangeToggle.endTime}</P>
```

## Inline timepicker buttons

This is an advanced example that you can use to show the details of an event and select a date of the event based on the Flowbite Datepicker and select the time using a predefined set of time intervals based on checkbox elements.

```svelte
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
```

## Modal with timepicker

Use this example to select a date and time inside of a modal component based on the Flowbite Datepicker and select a time interval using checkbox elements with predefined time values for event time scheduling.

```svelte
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
```

## Drawer with timepicker

Use this example to show multiple time interval selections inside of a drawer component to schedule time based on multiple entries (ie. days of the week) using the native browser time selection input element.

```svelte
<script lang="ts">
  import { Button, Drawer, Label, Select, Toggle, Checkbox, Timepicker, Card, P, Heading, Span } from "flowbite-svelte";
  import { InfoCircleSolid, ClockSolid, PlusOutline, TrashBinSolid } from "flowbite-svelte-icons";

  let open = $state(false);
  let businessHoursEnabled = $state(true);
  let selectedTimezoneDrawer = $state("");
  let workingDays = $state([
    { day: "Mon", enabled: true, startTime: "09:00", endTime: "17:00" },
    { day: "Tue", enabled: false, startTime: "09:00", endTime: "17:00" },
    { day: "Wed", enabled: true, startTime: "09:00", endTime: "17:00" },
    { day: "Thu", enabled: false, startTime: "09:00", endTime: "17:00" },
    { day: "Fri", enabled: false, startTime: "09:00", endTime: "17:00" }
  ]);

  const drawerTimezones = [
    { value: "America/New_York", name: "EST (Eastern Standard Time) - GMT-5 (New York)" },
    { value: "America/Los_Angeles", name: "PST (Pacific Standard Time) - GMT-8 (Los Angeles)" },
    { value: "Europe/London", name: "GMT (Greenwich Mean Time) - GMT+0 (London)" },
    { value: "Europe/Berlin", name: "CET (Central European Time) - GMT+1 (Berlin)" },
    { value: "Asia/Tokyo", name: "JST (Japan Standard Time) - GMT+9 (Tokyo)" }
  ];

  let sortedWorkingDays = $derived(
    [...workingDays].sort((a, b) => {
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      return days.indexOf(a.day) - days.indexOf(b.day);
    })
  );

  function toggleDay(index: number): void {
    workingDays[index].enabled = !workingDays[index].enabled;
    workingDays = [...workingDays];
  }

  function handleTimeChange(index: number, isStartTime: boolean, event: { time: string; endTime: string; [key: string]: string }): void {
    const newTime = isStartTime ? event.time : event.endTime;
    if (isStartTime) {
      workingDays[index].startTime = newTime;
    } else {
      workingDays[index].endTime = newTime;
    }
    workingDays = [...workingDays];
  }

  function addInterval(): void {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const existingDays = new Set(workingDays.map((d) => d.day));
    const availableDays = days.filter((d) => !existingDays.has(d));

    if (availableDays.length > 0) {
      workingDays = [
        ...workingDays,
        {
          day: availableDays[0],
          enabled: true,
          startTime: "09:00",
          endTime: "17:00"
        }
      ];
    }
  }

  function removeInterval(index: number): void {
    workingDays = workingDays.filter((_, i) => i !== index);
  }

  function saveAll(e: Event): void {
    e.preventDefault();
    console.log("Saving settings:", { businessHoursEnabled, selectedTimezoneDrawer, workingDays });
    open = false;
  }

  const timepickerClasses = {
    divClass: "inline-flex rounded-lg shadow-sm text-xs sm:text-sm w-full sm:w-auto",
    inputClass: "block disabled:cursor-not-allowed disabled:opacity-50 p-1.5 sm:p-2.5 text-xs sm:text-sm border-r-0 focus:ring-0 focus:outline-none"
  };
</script>

<div class="flex justify-center">
  <Button onclick={() => (open = true)} class="transform transition-all hover:scale-105">
    <ClockSolid class="me-2 h-4 w-4" />
    Set Time Schedule
  </Button>
</div>

<Drawer bind:open class="w-96 bg-gray-50 p-6 dark:bg-gray-800">
  <Heading tag="h5" id="drawer-label" class="mb-8 inline-flex items-center text-base font-semibold text-gray-800 uppercase dark:text-white">
    <ClockSolid class="h-6 w-6" />
    Time schedule
  </Heading>

  <form onsubmit={saveAll} class="space-y-8">
    <Card class="p-4 transition-shadow hover:shadow-lg">
      <div class="flex items-center justify-between">
        <div>
          <Heading tag="h6" class="text-lg font-semibold text-gray-900 dark:text-white">Business Hours</Heading>
          <P class="text-sm">Enable or disable business hours scheduling</P>
        </div>
        <Toggle bind:checked={businessHoursEnabled} class="scale-110" />
      </div>
    </Card>

    <div class="space-y-2">
      <Label for="timezones" class="flex items-center gap-2 text-lg">
        Timezone
        <InfoCircleSolid class="h-4 w-4 cursor-help text-gray-400" />
      </Label>
      <Select id="timezones" bind:value={selectedTimezoneDrawer} items={drawerTimezones} class="w-full" />
    </div>

    <div class="space-y-2 sm:space-y-4">
      {#each sortedWorkingDays as { day, enabled, startTime, endTime }, index}
        <div class="flex flex-col gap-2 rounded-lg bg-white p-2 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-700">
          <div class="flex min-w-[65px] items-center">
            <Checkbox onchange={() => toggleDay(index)} checked={enabled} class="scale-100">
              <Span class="ml-2 truncate text-sm">{day}</Span>
            </Checkbox>
          </div>
          <div class="flex flex-1 items-center">
            <Timepicker
              type="range"
              value={startTime}
              endValue={endTime}
              onselect={(e) => handleTimeChange(index, true, e)}
              divClass={timepickerClasses.divClass}
              inputClass={timepickerClasses.inputClass}
              size="sm"
            />
            <Button color="red" size="xs" pill={true} onclick={() => removeInterval(index)} class="shrink-0 p-2 hover:bg-red-600">
              <TrashBinSolid class="h-2 w-2 sm:h-3 sm:w-3" />
            </Button>
          </div>
        </div>
      {/each}
    </div>

    <Button type="button" class="w-full transition-all hover:shadow-lg" color="alternative" onclick={addInterval} disabled={workingDays.length >= 7}>
      <PlusOutline class="me-2 h-5 w-5" />
      Add Working Day
    </Button>

    <div class="flex gap-4">
      <Button class="w-1/2" color="alternative" onclick={() => (open = false)}>Cancel</Button>
      <Button type="submit" class="w-1/2" color="primary">Save Changes</Button>
    </div>
  </form>
</Drawer>
```

## Props

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Timepicker](https://flowbite.com/docs/forms/timepicker/)
