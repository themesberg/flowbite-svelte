<script lang="ts">
  import { Datepicker, P, A, type DateOrRange } from "$lib";

  let selectedDate = $state<Date | undefined>(undefined);

  let dateRange: { from: Date | undefined; to: Date | undefined } = $state({
    from: undefined,
    to: undefined
  });

  let selectedDateWithButtons = $state<Date | undefined>();
  let lastAction = $state<string | undefined>();

  function handleClear() {
    lastAction = "Cleared";
  }

  function handleApply(detail: DateOrRange): void {
    lastAction = "Applied";
    if (detail instanceof Date) {
      selectedDateWithButtons = detail;
    }
  }

  function handleDateSelect(detail: DateOrRange) {
    console.log("Selected date:", detail);
  }
</script>

<h1 class="my-4 text-3xl">Datepicker</h1>

<h2 class="my-4 text-2xl">Default Datepicker</h2>
<div class="mb-64 md:w-1/2">
  <Datepicker bind:value={selectedDate} color="green" />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</P>
</div>

<h2 class="my-4 text-2xl">Date Range Selection</h2>
<div class="mb-64 md:w-1/2">
  <Datepicker range bind:rangeFrom={dateRange.from} bind:rangeTo={dateRange.to} color="pink" />
  <P class="mt-4">
    Selected range:
    {dateRange.from ? dateRange.from.toLocaleDateString() : "None"} -
    {dateRange.to ? dateRange.to.toLocaleDateString() : "None"}
  </P>
</div>

<h2 class="my-4 text-2xl">Inline Datepicker</h2>
<div class="md:w-1/2">
  <Datepicker inline bind:value={selectedDate} />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</P>
</div>

<h2 class="my-4 text-2xl">Custom Color</h2>
<div class="mb-64 md:w-1/2">
  <Datepicker color="red" />
</div>

<h2 class="my-4 text-2xl">Localization</h2>
<div class="mb-64 md:w-1/2">
  <Datepicker locale="fr-FR" />
</div>

<h2 class="my-4 text-2xl">Custom Date Format</h2>
<div class="mb-64 md:w-1/2">
  <Datepicker dateFormat={{ year: "numeric", month: "short", day: "2-digit" }} />
</div>

<h2 class="my-4 text-2xl">Action Buttons</h2>
<div class="mb-64 md:w-1/2">
  <Datepicker bind:value={selectedDateWithButtons} showActionButtons autohide={false} onclear={handleClear} onapply={handleApply} />
  <P class="mt-4">Selected date: {selectedDateWithButtons ? selectedDateWithButtons.toLocaleDateString() : "None"}</P>
  <P class="mt-2">Last action: {lastAction}</P>
</div>

<h2 class="my-4 text-2xl">Custom Title</h2>
<div class="mb-64 md:w-1/2">
  <Datepicker title="Select your preferred date" />
</div>

<h2 class="my-4 text-2xl">Disabled State</h2>
<div class="mb-64 md:w-1/2">
  <Datepicker disabled />
</div>

<h2 class="my-4 text-2xl">Required Field</h2>
<div class="mb-64 md:w-1/2">
  <Datepicker required />
</div>

<h2 class="my-4 text-2xl">Custom First Day of Week</h2>
<div class="mb-64 md:w-1/2">
  <Datepicker firstDayOfWeek={3} />
</div>

<h2 class="my-4 text-2xl">Event Handling</h2>
<div class="mb-64 md:w-1/2">
  <Datepicker onselect={handleDateSelect} />
</div>
