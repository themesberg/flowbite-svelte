<script lang="ts">
  import { Button, Drawer, Label, Select, Toggle, Checkbox, Timepicker, Card, P, Heading, Span } from "flowbite-svelte";
  import { InfoCircleSolid, ClockSolid, PlusOutline, TrashBinSolid, CloseOutline } from "flowbite-svelte-icons";

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
            <Timepicker type="range" value={startTime} endValue={endTime} onselect={(e) => handleTimeChange(index, true, e)} divClass={timepickerClasses.divClass} inputClass={timepickerClasses.inputClass} size="sm" />
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
