---
layout: componentLayout
title: Svelte Timepicker - Flowbite
breadcrumb_title: Svelte Timepicker
component_title: Timepicker
dir: Forms
description: Use the timepicker component to allow the user to select a time using a native time input element including hours and minutes
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks } from '../../utils'
  const components = 'Timepicker'
</script>

The timepicker component can be used to allow the user to select a specific time using a custom time input element and provides flexibility in styling and icon usage.

## Setup

```svelte example hideOutput
<script>
  import { Timepicker } from 'flowbite-svelte';
</script>
```

## Default timepicker

Use this example of a default timepicker component to allow the user to select a time value.

```svelte example
<script>
  import { Label, Timepicker } from 'flowbite-svelte';
</script>

<Label>Select Time:</Label>
<Timepicker />
```

## Timepicker with icon

This example can be used to select a time via an input field where you can add an icon to the input group. You can use a Flowbite Svelte icon component or any other icon component.

```svelte example
<script>
  import { Label, Timepicker } from 'flowbite-svelte';
  import { ClockSolid } from 'flowbite-svelte-icons';
</script>

<Label>Select Time (Flowbite Icon):</Label>
<Timepicker icon={ClockSolid} />

<Label>Select Time (Default icon):</Label>
<Timepicker />
```

## Timepicker with custom props

This example shows how to use the timepicker with custom properties.

```svelte example
<script>
  import { Label, Timepicker } from 'flowbite-svelte';
</script>

<Label for="appointment-time">Choose appointment time:</Label>
<Timepicker
  id="appointment-time"
  value="09:00"
  min="08:00"
  max="18:00"
/>
```

## Timepicker with dropdown

This example demonstrates how to use the timepicker with a dropdown for selecting duration.

```svelte example class="h-64"
<script>
  import { Label, Timepicker, P } from 'flowbite-svelte';

  let selectedTime = { time: '12:00', duration: '30' };
  const durations = [
    { value: '30', name: '30 minutes' },
    { value: '60', name: '1 hour' },
    { value: '120', name: '2 hours' }
  ];

  function handleChange(event) {
    selectedTime = event.detail;
  }
</script>

<Label>Select Time and Duration:</Label>
<Timepicker
  type="dropdown"
  optionLabel="Duration"
  options={durations}
  on:select={handleChange}
  value={selectedTime.time}
  selectedOption={selectedTime.duration}
/>

<P>Selected: {selectedTime.time}, Duration: {selectedTime.duration}</P>
```

## Timepicker with select

Use this example to show a select input next to the timepicker to select an option like a timezone.

```svelte example
<script>
  import { Label, Timepicker, P } from 'flowbite-svelte';
 
  let selectedTime = { time: '12:00', timezone: 'UTC' };
  const timezones = [
    { value: 'UTC', name: 'UTC' },
    { value: 'EST', name: 'Eastern Time (EST)' },
    { value: 'CST', name: 'Central Time (CST)' },
    { value: 'MST', name: 'Mountain Time (MST)' },
    { value: 'PST', name: 'Pacific Time (PST)' },
    { value: 'GMT', name: 'Greenwich Mean Time (GMT)' },
    { value: 'CET', name: 'Central European Time (CET)' },
  ];

  function handleChange(event) {
    selectedTime = event.detail;
  }
</script>

<Label>Select Time and Timezone:</Label>
<Timepicker
  type="select"
  optionLabel="Timezone"
  options={timezones}
  on:select={handleChange}
  value={selectedTime.time}
  selectedOption={selectedTime.timezone}
/>
<P>Selected: {selectedTime.time} {selectedTime.timezone}</P>
```

## Timepicker range selector

Use this example to select a time interval using two input fields, often used for the duration of an event. If you set the end time to be earlier than the start time, the component will automatically swap the two times.

```svelte example
<script>
  import { Label, Timepicker, P } from 'flowbite-svelte';

  let selectedTime = { time: '09:00', endTime: '17:00' };

  function handleChange(event) {
    selectedTime = event.detail;
  }
</script>

<Label>Select Time Range:</Label>
<Timepicker
  type="range"
  on:select={handleChange}
  value={selectedTime.time}
  endValue={selectedTime.endTime}
/>
<P>Selected Range: {selectedTime.time} - {selectedTime.endTime}</P>
```

## Timerange with dropdown

This example can be used to show the timerange picker inside a dropdown only when clicking on a button.

```svelte example class="h-80"
<script>
  import { Label, Timepicker, P } from 'flowbite-svelte';

  let selectedTimerange = { time: '09:00', endTime: '17:00' };

  function handleChange(event) {
    selectedTimerange = event.detail;
  }
</script>

<Label>Select Time Range:</Label>
<Timepicker
  type="timerange-dropdown"
  on:select={handleChange}
  value={selectedTimerange.time}
  endValue={selectedTimerange.endTime}
/>
<P>Selected Range: {selectedTimerange.time} - {selectedTimerange.endTime}</P>
```

## Timerange picker with toggle

This example demonstrates a timerange picker that can be toggled on and off, allowing users to select a start and end time when the picker is visible.

```svelte example class="h-96"
<script>
  import { Label, Timepicker, P } from 'flowbite-svelte';

  let selectedTimerange = { time: '09:00', endTime: '17:00' };

  function handleChange(event) {
    selectedTimerange = event.detail;
  }
</script>

<Label class="mb-2" for="timerange-toggle">Toggle Time Range:</Label>
<Timepicker
  type="timerange-toggle"
  on:select={handleChange}
  value={selectedTimerange.time}
  endValue={selectedTimerange.endTime}
/>

<P>Selected Range: {selectedTimerange.time} - {selectedTimerange.endTime}</P>
```

## Inline timepicker buttons

This is an advanced example that you can use to show the details of an event and select a date of the event based on the Flowbite Datepicker and select the time using a predefined set of time intervals based on checkbox elements.
  
```svelte example class="p-4"
<script>
  import { Label, Datepicker, Timepicker, Button, Accordion, AccordionItem, Avatar, Input } from 'flowbite-svelte';
  import { CalendarMonthSolid, ClockSolid, MapPinSolid } from 'flowbite-svelte-icons';

  let selectedDate = new Date('2024-06-30');
  let selectedTime = '12:00';
  let eventTitle = 'Digital Transformation';
  let eventLocation = 'California, USA';
  let eventDuration = '30 min';
  let eventType = 'Web conference';
  let participants = [
    { img: '/images/profile-picture-1.webp', alt: 'Participant 1' },
    { img: '/images/profile-picture-2.webp', alt: 'Participant 2' },
    { img: '/images/profile-picture-3.webp', alt: 'Participant 3' },
  ];

  const timeIntervals = [
    '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30'
  ];

  function handleDateSelect(event) {
    selectedDate = event.detail;
  }

  function handleTimeSelect(event) {
    selectedTime = event.detail.time;
  }
</script>

<div class="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{eventTitle}</h2>
    
    <div class="flex flex-wrap gap-4 mb-6">
      <div class="flex items-center">
        <CalendarMonthSolid class="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
        <span class="text-gray-900 dark:text-white">{selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</span>
      </div>
      <div class="flex items-center">
        <ClockSolid class="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
        <span class="text-gray-900 dark:text-white">{selectedTime}</span>
      </div>
      <div class="flex items-center">
        <MapPinSolid class="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
        <span class="text-gray-900 dark:text-white">{eventLocation}</span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
        <span class="text-gray-900 dark:text-white text-lg font-medium">{eventDuration}</span>
      </div>
      <div>
        <Label class="mb-2">Meeting Type</Label>
        <span class="text-gray-900 dark:text-white text-lg font-medium">{eventType}</span>
      </div>
    </div>

    <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label class="mb-2">Select Date</Label>
          <Datepicker bind:value={selectedDate} on:select={handleDateSelect} inline />
        </div>
        <div>
          <Label class="mb-2">Select Time</Label>
          <Timepicker 
            type="inline-buttons"
            value={selectedTime}
            timeIntervals={timeIntervals}
            on:select={handleTimeSelect}
          />
        </div>
      </div>
    </div>
  </div>

  <Accordion flush>
    <AccordionItem  class="p-2">
      <svelte:fragment slot="header">Additional Options</svelte:fragment>
      <div class="p-4 space-y-4">
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

  <div class="p-6 border-t border-gray-200 dark:border-gray-700">
    <Button color="primary">Schedule Event</Button>
  </div>
</div>
```

## Modal with timepicker

Use this example to select a date and time inside of a modal component based on the Flowbite Datepicker and select a time interval using checkbox elements with predefined time values for event time scheduling.

```svelte example class="h-96"
<script>
  import { Button, Modal, Label, Datepicker, Timepicker, Heading, P } from 'flowbite-svelte';
  import { ClockSolid } from 'flowbite-svelte-icons';

  let open = false;
  let selectedDate = new Date();
  let selectedTime = '';

  const timeIntervals = [
    '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30'
  ];

  function handleDateSelect(event) {
    selectedDate = event.detail;
  }

  function handleTimeSelect(event) {
    selectedTime = event.detail.time;
  }

  function handleSave() {
    open = false;
  }
</script>

<Button on:click={() => (open = true)}>
  <ClockSolid class="w-4 h-4 me-2" />
  Schedule appointment
</Button>

{#if selectedTime}
  <P>Appointment scheduled for {selectedDate.toDateString()} at {selectedTime}</P>
{/if}

<Modal bind:open class="w-full max-w-[23rem]">
  <svelte:fragment slot="header">
    <Heading tag="h5" class="mb-4 font-medium text-gray-900 dark:text-white">Schedule an appointment</Heading>
  </svelte:fragment>
  <div class="p-4 sm:p-5">
    <div class="mb-4">
      <Datepicker 
        bind:value={selectedDate} 
        on:select={handleDateSelect} 
        inline 
        class="mx-auto [&>div>div]:shadow-none [&>div>div]:bg-gray-50 [&_div>button]:bg-gray-50"
      />
    </div>
    <div class="mb-4">
      <Label class="mb-2 block">Pick your time</Label>
      <Timepicker
        type="inline-buttons"
        value={selectedTime}
        timeIntervals={timeIntervals}
        on:select={handleTimeSelect}
        columns={3}
        class="mb-4"
      />
    </div>
    <div class="flex items-center space-x-4">
      <Button color="primary" class="w-full" on:click={handleSave}>Save</Button>
      <Button color="alternative" class="w-full" on:click={() => (open = false)}>Discard</Button>
    </div>
  </div>
</Modal>
```

## Drawer with timepicker

Use this example to show multiple time interval selections inside of a drawer component to schedule time based on multiple entries (ie. days of the week) using the native browser time selection input element.

```svelte example class="h-96 p-4"
<script>
  import { Button, Drawer, Label, Select, Toggle, Checkbox, Timepicker, Card, P, Heading, Span } from 'flowbite-svelte';
  import { InfoCircleSolid, ClockSolid, PlusOutline, TrashBinSolid, CloseOutline } from 'flowbite-svelte-icons';

  let hidden = true;
  let businessHoursEnabled = true;
  let selectedTimezone = '';
  let workingDays = [
    { day: 'Mon', enabled: true, startTime: '09:00', endTime: '17:00' },
    { day: 'Tue', enabled: false, startTime: '09:00', endTime: '17:00' },
    { day: 'Wed', enabled: true, startTime: '09:00', endTime: '17:00' },
    { day: 'Thu', enabled: false, startTime: '09:00', endTime: '17:00' },
    { day: 'Fri', enabled: false, startTime: '09:00', endTime: '17:00' },
  ];

   const timezones = [
    { value: 'America/New_York', name: 'EST (Eastern Standard Time) - GMT-5 (New York)' },
    { value: 'America/Los_Angeles', name: 'PST (Pacific Standard Time) - GMT-8 (Los Angeles)' },
    { value: 'Europe/London', name: 'GMT (Greenwich Mean Time) - GMT+0 (London)' },
    { value: 'Europe/Berlin', name: 'CET (Central European Time) - GMT+1 (Berlin)' },
    { value: 'Asia/Tokyo', name: 'JST (Japan Standard Time) - GMT+9 (Tokyo)' },
  ];

  $: sortedWorkingDays = [...workingDays].sort((a, b) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.indexOf(a.day) - days.indexOf(b.day);
  });

  function toggleDay(index) {
    workingDays[index].enabled = !workingDays[index].enabled;
    workingDays = [...workingDays];
  }

  function handleTimeChange(index, isStartTime, event) {
    const newTime = event.detail.time;
    if (isStartTime) {
      workingDays[index].startTime = newTime;
    } else {
      workingDays[index].endTime = newTime;
    }
    workingDays = [...workingDays];
  }

  function addInterval() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const existingDays = new Set(workingDays.map(d => d.day));
    const availableDays = days.filter(d => !existingDays.has(d));
    
    if (availableDays.length > 0) {
      workingDays = [...workingDays, { 
        day: availableDays[0], 
        enabled: true, 
        startTime: '09:00', 
        endTime: '17:00' 
      }];
    }
  }

  function removeInterval(index) {
    workingDays = workingDays.filter((_, i) => i !== index);
  }

  function saveAll() {
    console.log('Saving settings:', { businessHoursEnabled, selectedTimezone, workingDays });
    hidden = true;
  }

  const timepickerClasses = {
    divClass: 'inline-flex rounded-lg shadow-sm text-xs sm:text-sm w-full sm:w-auto',
    inputClass: 'block disabled:cursor-not-allowed disabled:opacity-50 p-1.5 sm:p-2.5 text-xs sm:text-sm border-r-0 focus:ring-0 focus:outline-none'
  };
</script>

<div class="flex justify-center">
  <Button on:click={() => (hidden = false)} class="transform transition-all hover:scale-105">
    <ClockSolid class="w-4 h-4 me-2" />
    Set Time Schedule
  </Button>
</div>

<Drawer 
  bind:hidden 
  width="w-96"
  class="p-6 bg-gray-50 dark:bg-gray-800"
  id="drawer-timepicker"
>
  <div class="flex items-center justify-between mb-8">
    <Heading tag="h5" id="drawer-label" class="inline-flex items-center text-base font-semibold text-gray-800 dark:text-white uppercase">
      <ClockSolid class="w-6 h-6" />
      Time schedule
    </Heading>
    <Button color="gray" pill={true} size="sm" on:click={() => (hidden = true)}>
      <CloseOutline class="w-4 h-4 text-gray-500 dark:text-gray-400" />
    </Button>
  </div>

  <form on:submit|preventDefault={saveAll} class="space-y-8">
    <Card class="transition-shadow hover:shadow-lg">
      <div class="flex justify-between items-center">
        <div>
          <Heading tag="h6" class="text-lg font-semibold text-gray-900 dark:text-white">
            Business Hours
          </Heading>
          <P class="text-sm">
            Enable or disable business hours scheduling
          </P>
        </div>
        <Toggle bind:checked={businessHoursEnabled} class="scale-110" />
      </div>
    </Card>

    <div class="space-y-2">
      <Label for="timezones" class="flex items-center gap-2 text-lg">
        Timezone
        <InfoCircleSolid class="w-4 h-4 text-gray-400 cursor-help" />
      </Label>
      <Select 
        id="timezones" 
        bind:value={selectedTimezone} 
        items={timezones}
        class="w-full"
      />
    </div>

    <div class="space-y-2 sm:space-y-4">
      {#each sortedWorkingDays as { day, enabled, startTime, endTime }, index}
        <div class="flex flex-col gap-2 p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center min-w-[65px]">
            <Checkbox
              on:change={() => toggleDay(index)}
              checked={enabled}
              class="scale-100"
            >
              <Span class="ml-2 text-sm truncate">{day}</Span>
            </Checkbox>
          </div>
          <div class="flex items-center gap-2 flex-1">
            <Timepicker
              type="range"
              value={startTime}
              endValue={endTime}
              on:select={(e) => handleTimeChange(index, true, e)}
              divClass={timepickerClasses.divClass}
              inputClass={timepickerClasses.inputClass}
              size="sm"
            />
            <Button
              color="red"
              size="xs"
              sm:size="sm"
              pill={true}
              on:click={() => removeInterval(index)}
              class="hover:bg-red-600 shrink-0"
            >
              <TrashBinSolid class="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
      {/each}
    </div>

    <Button 
      type="button" 
      class="w-full transition-all hover:shadow-lg" 
      color="alternative" 
      on:click={addInterval}
      disabled={workingDays.length >= 7}
    >
      <PlusOutline class="w-5 h-5 me-2" />
      Add Working Day
    </Button>

    <div class="flex gap-4">
      <Button 
        class="w-1/2" 
        color="alternative" 
        on:click={() => (hidden = true)}
      >
        Cancel
      </Button>
      <Button 
        type="submit" 
        class="w-1/2" 
        color="primary"
      >
        Save Changes
      </Button>
    </div>
  </form>
</Drawer>
```

## Props

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Timepicker](https://flowbite.com/docs/forms/timepicker/)

<GitHubCompoLinks {components}/>
