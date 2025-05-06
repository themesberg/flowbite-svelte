<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { Dropdown, DropdownItem, Button, Input, ButtonGroup, Select, InputAddon, Label, Toggle, type InputProps, type ButtonProps, type ButtonGroupProps, type ButtonGroupSizeType } from "$lib";
  import type { Component } from "svelte";
  import type { HTMLInputAttributes } from 'svelte/elements';
  
  // Types
  type TimePickerType = 'default' | 'dropdown' | 'select' | 'range' | 'timerange-dropdown' | 'timerange-toggle' | 'inline-buttons';
  type ColumnCount = 1 | 2 | 3 | 4;
  type TimePickerOption = {
    name: string;
    value: string;
  };

  interface TimepickerProps {
    id?: string;
    endId?: string;
    value?: string;
    endValue?: string;
    min?: string;
    max?: string;
    required?: boolean;
    disabled?: boolean;
    inputColor?: InputProps['color'];
    buttonColor?: ButtonProps['color'];
    Icon?: Component | undefined;
    type?: TimePickerType;
    optionLabel?: string;
    options?: TimePickerOption[];
    size?: ButtonGroupSizeType; // Use the specific ButtonGroupSizeType
    divClass?: string;
    inputClass?: string;
    selectClass?: string;
    timerangeLabel?: string;
    timerangeButtonLabel?: string;
    timeIntervals?: string[];
    columns?: ColumnCount;
    // Callback props instead of events
    onselect?: (data: {
      time: string;
      endTime: string;
      [key: string]: string;
    }) => void;
  }
  
  // Props
  let {
    id = "time",
    endId = "end-time",
    value = "00:00",
    endValue = "00:00",
    min = "",
    max = "",
    required = true,
    disabled = false,
    inputColor = undefined as InputProps['color'],
    buttonColor = 'primary' as ButtonProps['color'],
    Icon = undefined,
    type = "default",
    optionLabel = "Options",
    options = [],
    size = "md" as ButtonGroupSizeType, // Explicitly cast to ButtonGroupSizeType
    divClass = "inline-flex rounded-lg shadow-sm",
    inputClass,
    selectClass,
    timerangeLabel = "Choose time range",
    timerangeButtonLabel = "Save time",
    timeIntervals = [] as string[],
    columns = 2 as ColumnCount,
    // Add the callback prop with default empty function
    onselect = () => {}
  }: TimepickerProps= $props();

  const defaultInputClass = "block disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:ring-0 focus:outline-none p-2.5 border-r-0";
  const inputCls = twMerge(defaultInputClass, inputClass);
  const defaultSelectClass = "text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-r-lg rounded-l-none focus:ring-0 focus:outline-none block w-full p-2.5 border-l-1 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"
  const selectCls = twMerge( defaultSelectClass, selectClass);
  
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
    const newMinutes = timeToMinutes(newValue);
    const valueMinutes = timeToMinutes(value);
    const endValueMinutes = timeToMinutes(endValue);
  
    if (isEndTime) {
      if (newMinutes < valueMinutes) {
        value = newValue;
        // endValue remains the same
      } else {
        endValue = newValue;
      }
    } else {
      if (newMinutes > endValueMinutes) {
        endValue = newValue;
        // value remains the same
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
    onselect({
      time: value,
      endTime: endValue,
      [optionLabel ? optionLabel.toLowerCase() : "options"]: selectedOption || options[0]?.value || ""
    });
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
  
{#if type !== 'inline-buttons'}
  <ButtonGroup {size} class={divClass}>
    {#if type === 'default'}
      <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class="{inputCls} rounded-l-lg" bind:value onchange={(e) => handleTimeChange(e)}/>
      <InputAddon class="rounded-r-lg">
        {#if Icon}
          <Icon class="w-4 h-4 text-gray-500 dark:text-gray-400" />
        {:else}
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        {/if}
      </InputAddon>
    {:else if type === 'select'}
      <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class="{inputCls} w-1/3 rounded-l-lg" bind:value onchange={(e) => handleTimeChange(e)}/>
      <Select class={selectCls} onchange={handleOptionSelect} items={options} value={selectedOption} />
    {:else if type === 'dropdown'}
      <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class="{inputCls} rounded-l-lg" bind:value onchange={(e) => handleTimeChange(e)}/>
      <Button color={buttonColor} class="!rounded-r-lg">
        {optionLabel}
        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </Button>
      <Dropdown simple>
        {#each options as option}
          <DropdownItem onclick={() => handleDropdownSelect(option)}>
            {option.name}
          </DropdownItem>
        {/each}
      </Dropdown>
    {:else if type === 'range'}
      <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class="{inputCls} rounded-l-lg" bind:value onchange={(e) => handleTimeChange(e)}/>
      <InputAddon class="rounded-none">
        {#if Icon}
          <Icon class="w-4 h-4 text-gray-500 dark:text-gray-400" />
        {:else}
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        {/if}
      </InputAddon>
      <span class="flex items-center justify-center text-gray-500 dark:text-gray-400 px-2">-</span>
      <Input id={endId} color={inputColor} type="time" {min} {max} {required} {disabled} class="{inputCls} rounded-none" bind:value={endValue} onchange={(e) => handleTimeChange(e, true)}/>
      <InputAddon class="rounded-r-lg">
        {#if Icon}
          <Icon class="w-4 h-4 text-gray-500 dark:text-gray-400" />
        {:else}
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        {/if}
      </InputAddon>
    {:else if type === 'timerange-dropdown'}
      <Button color={buttonColor} {size} class="!rounded-r-lg">
        {timerangeLabel}
        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </Button>
      <Dropdown simple class="p-4 last:rounded-r-lg">
        <div class="flex flex-col space-y-4">
          <div class="flex space-x-4">
            <div class="flex flex-col">
              <Label for={id}>Start time:</Label>
              <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class="{inputCls} rounded-l-lg border-r" bind:value onchange={(e) => handleTimeChange(e)} />
            </div>
            <div class="flex flex-col">
              <Label for={endId}>End time:</Label>
              <Input id={endId} color={inputColor} type="time" {min} {max} {required} {disabled} class="{inputCls} rounded-l-lg border-r" bind:value={endValue} onchange={(e) => handleTimeChange(e, true)} />
            </div>
          </div>
          <Button color={buttonColor} class="w-full !rounded-l-lg" onclick={applyTimerange}>
            {timerangeButtonLabel}
          </Button>
        </div>
      </Dropdown>
    {:else if type === 'timerange-toggle'}
      <div class="flex flex-col space-y-2 w-full">
        <div class="flex items-center justify-between">
          <Toggle id={`${id}-timerange-toggle`} checked={showTimerange} onchange={toggleTimerange} spanClass="me-0"/>
        </div>
        {#if showTimerange}
          <div class="flex space-x-4">
            <div class="flex flex-col">
              <Label for={id}>Start time:</Label>
              <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class="{inputCls} !rounded-lg border-r-1" bind:value onchange={(e) => handleTimeChange(e)} />
            </div>
            <div class="flex flex-col">
              <Label for={endId}>End time:</Label>
              <Input id={endId} color={inputColor} type="time" {min} {max} {required} {disabled} class="{inputCls} !rounded-lg border-r-1" bind:value={endValue} onchange={(e) => handleTimeChange(e, true)} />
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </ButtonGroup>
{:else}
  <div class="grid gap-2 w-full" class:grid-cols-1={columns === 1} class:grid-cols-2={columns === 2} class:grid-cols-3={columns === 3} class:grid-cols-4={columns === 4}>
    {#each timeIntervals as time}
      <Button {size} color={value === time ? buttonColor : 'light'} class="rounded-lg" onclick={() => handleInlineButtonSelect(time)}>
        {time}
      </Button>
    {/each}
  </div>
{/if}