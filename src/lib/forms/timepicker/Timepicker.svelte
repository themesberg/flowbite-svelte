<script lang="ts">
  import { Dropdown, DropdownItem, Button, Input, ButtonGroup, Select, Label, Toggle, type TimepickerProps, type TimePickerOption, cn } from "$lib";
  import { twMerge } from "tailwind-merge";

  // Props
  let { id = "time", endId = "end-time", value = $bindable("00:00"), endValue = $bindable("00:00"), min = "", max = "", required = true, disabled = false, inputColor, buttonColor = "primary", Icon, iconClass = "h-5 w-5 text-gray-500 dark:text-gray-400", type = "default", optionLabel = "Options", options = [], size = "md", divClass, inputClass, selectClass, timerangeLabel = "Choose time range", timerangeButtonLabel = "Save time", timeIntervals = [], columns = 2, onselect }: TimepickerProps = $props();

  const defaultDivClass = "inline-flex rounded-lg shadow-sm";
  const acturalDivCls = cn(defaultDivClass, divClass);
  const defaultInputClass = "block disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:ring-0 focus:outline-none rounded-e-lg";
  const inputCls = cn(defaultInputClass, inputClass);
  const defaultSelectClass = "text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-r-lg rounded-l-none focus:ring-0 focus:outline-none block w-full border-l-1 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500";
  const selectCls = cn(defaultSelectClass, selectClass);

  // State
  // let value = $state("00:00");
  // let endValue = $state("00:00");
  let selectedOption = $state("");
  let dropdownOpen = $state(false);
  let showTimerange = $state(false);

  function timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }

  function handleTimeChange(event: Event, isEndTime: boolean = false): void {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;

    // Validate against min/max constraints first
    if (min && newValue < min) {
      target.value = isEndTime ? endValue : value; // Reset to previous valid value
      return;
    }

    if (max && newValue > max) {
      target.value = isEndTime ? endValue : value; // Reset to previous valid value
      return;
    }

    const newMinutes = timeToMinutes(newValue);
    const valueMinutes = timeToMinutes(value);
    const endValueMinutes = timeToMinutes(endValue);

    if (isEndTime) {
      if (newMinutes < valueMinutes) {
        // Only update start time if it respects min/max constraints
        if ((!min || newValue >= min) && (!max || newValue <= max)) {
          value = newValue;
        } else {
          target.value = endValue; // Reset if constraint violation
          return;
        }
      } else {
        endValue = newValue;
      }
    } else {
      if (newMinutes > endValueMinutes) {
        // Only update end time if it respects min/max constraints
        if ((!min || newValue >= min) && (!max || newValue <= max)) {
          endValue = newValue;
        } else {
          target.value = value; // Reset if constraint violation
          return;
        }
      } else {
        value = newValue;
      }
    }

    if (type !== "timerange-dropdown") {
      notifyChange();
    }
  }

  function handleOptionSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    selectedOption = target.value;
    notifyChange();
  }

  function handleDropdownSelect(option: TimePickerOption): void {
    dropdownOpen = false;
    selectedOption = option.value;
    notifyChange();
  }

  function notifyChange(): void {
    if (onselect) {
      onselect({
        time: value,
        endTime: endValue,
        [optionLabel ? optionLabel.toLowerCase() : "options"]: selectedOption || options[0]?.value || ""
      });
    }
  }

  function applyTimerange(): void {
    dropdownOpen = false;
    notifyChange();
  }

  function toggleTimerange(): void {
    showTimerange = !showTimerange;
    if (!showTimerange) {
      notifyChange();
    }
  }

  function handleInlineButtonSelect(time: string): void {
    value = time;
    notifyChange();
  }
</script>

{#if type !== "inline-buttons"}
  <ButtonGroup {size} class={acturalDivCls}>
    {#if type === "default"}
      <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class={cn("relative px-2 pr-8", inputCls)} bind:value onchange={(e) => handleTimeChange(e)} />
      <div class="pointer-events-none absolute inset-y-0 end-0 top-0 flex items-center pe-3.5">
        {#if Icon}
          <Icon class={iconClass} />
        {:else}
          <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        {/if}
      </div>
    {:else if type === "select"}
      <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class={twMerge(cn("w-1/3 rounded-l-lg", inputCls), "rounded-e-none")} bind:value onchange={(e) => handleTimeChange(e)} />
      <Select selectClass={selectCls} onchange={handleOptionSelect} items={options} value={selectedOption} />
    {:else if type === "dropdown"}
      <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class={twMerge(cn("rounded-l-lg", inputCls), "rounded-e-none")} bind:value onchange={(e) => handleTimeChange(e)} />
      <Button color={buttonColor} class="!rounded-r-lg">
        {optionLabel}
        <svg class="ml-2 h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </Button>
      <Dropdown simple>
        {#each options as option}
          <DropdownItem onclick={() => handleDropdownSelect(option)}>
            {option.name}
          </DropdownItem>
        {/each}
      </Dropdown>
    {:else if type === "range"}
      <div class="relative">
        <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class={twMerge(cn("relative pr-8", inputCls))} bind:value onchange={(e) => handleTimeChange(e)} />
        <button type="button" class="pointer-events-none absolute inset-y-0 top-0 right-0 flex items-center border-0 bg-transparent pe-3.5" onclick={() => document.getElementById(id)?.click()} aria-label="Open time picker">
          {#if Icon}
            <Icon class={iconClass} />
          {:else}
            <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          {/if}
        </button>
      </div>
      <span class="flex items-center justify-center px-2 text-gray-500 dark:text-gray-400">-</span>
      <div class="relative">
        <Input id={endId} color={inputColor} type="time" {min} {max} {required} {disabled} class={cn(inputCls, "relative pr-8")} bind:value={endValue} onchange={(e) => handleTimeChange(e, true)} />
        <button type="button" class="pointer-events-none absolute inset-y-0 top-0 right-0 flex items-center border-0 bg-transparent pe-3.5" onclick={() => document.getElementById(endId)?.click()} aria-label="Open end time picker">
          {#if Icon}
            <Icon class={iconClass} />
          {:else}
            <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          {/if}
        </button>
      </div>
    {:else if type === "timerange-dropdown"}
      <Button color={buttonColor} {size} class="!rounded-r-lg">
        {timerangeLabel}
        <svg class="ml-2 h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </Button>
      <Dropdown simple class="p-4 last:rounded-r-lg">
        <div class="flex flex-col space-y-4">
          <div class="flex space-x-4">
            <div class="flex flex-col">
              <Label for={id}>Start time:</Label>
              <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class={cn("w-24 rounded-l-lg !border-r px-2", inputCls)} bind:value onchange={(e) => handleTimeChange(e)} />
            </div>
            <div class="flex flex-col">
              <Label for={endId}>End time:</Label>
              <Input id={endId} color={inputColor} type="time" {min} {max} {required} {disabled} class={cn("w-24 rounded-l-lg !border-r px-2", inputCls)} bind:value={endValue} onchange={(e) => handleTimeChange(e, true)} />
            </div>
          </div>
          <Button color={buttonColor} class="w-full !rounded-l-lg" onclick={applyTimerange}>
            {timerangeButtonLabel}
          </Button>
        </div>
      </Dropdown>
    {:else if type === "timerange-toggle"}
      <div class="flex w-full flex-col space-y-2">
        <div class="flex items-center justify-between">
          <Toggle id={`${id}-timerange-toggle`} checked={showTimerange} onchange={toggleTimerange} spanClass="me-0 rounded-lg" />
        </div>
        {#if showTimerange}
          <div class="flex space-x-4 p-2.5">
            <div class="flex flex-col">
              <Label for={id}>Start time:</Label>
              <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class={cn("w-24 rounded-lg !border-r px-2", inputCls)} bind:value onchange={(e) => handleTimeChange(e)} />
            </div>
            <div class="flex flex-col">
              <Label for={endId}>End time:</Label>
              <Input id={endId} color={inputColor} type="time" {min} {max} {required} {disabled} class={cn("w-24 rounded-lg !border-r px-2", inputCls)} bind:value={endValue} onchange={(e) => handleTimeChange(e, true)} />
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </ButtonGroup>
{:else}
  <div class="grid w-full gap-2" class:grid-cols-1={columns === 1} class:grid-cols-2={columns === 2} class:grid-cols-3={columns === 3} class:grid-cols-4={columns === 4}>
    {#each timeIntervals as time}
      <Button {size} color={value === time ? buttonColor : "light"} class="rounded-lg" onclick={() => handleInlineButtonSelect(time)}>
        {time}
      </Button>
    {/each}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TimepickerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L900)
## Props
@prop id = "time"
@prop endId = "end-time"
@prop value = $bindable("00:00")
@prop endValue = $bindable("00:00")
@prop min = ""
@prop max = ""
@prop required = true
@prop disabled = false
@prop inputColor
@prop buttonColor = "primary"
@prop Icon
@prop iconClass = "h-5 w-5 text-gray-500 dark:text-gray-400"
@prop type = "default"
@prop optionLabel = "Options"
@prop options = []
@prop size = "md"
@prop divClass
@prop inputClass
@prop selectClass
@prop timerangeLabel = "Choose time range"
@prop timerangeButtonLabel = "Save time"
@prop timeIntervals = []
@prop columns = 2
@prop onselect
-->
