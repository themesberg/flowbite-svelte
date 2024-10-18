<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ButtonColorType } from '$lib/types';
  import type { ComponentType } from 'svelte';
  import { Dropdown, DropdownItem, Button, Input, ButtonGroup, Select, InputAddon, Label, Toggle } from '$lib';

  export let id = 'time';
  export let endId = 'end-time';
  export let value = '00:00';
  export let endValue = '00:00';
  export let min = '';
  export let max = '';
  export let required = true;
  export let disabled = false;
  export let color: 'base' | 'red' | 'green' | undefined = 'base';
  export let buttonColor: ButtonColorType = 'primary';
  export let icon: ComponentType;
  export let type: 'default' | 'dropdown' | 'select' | 'range' | 'timerange-dropdown' | 'timerange-toggle' | 'inline-buttons' = 'default';
  export let optionLabel = 'Options';
  export let options: { value: string; name: string }[] = [];
  export let selectedOption = '';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let divClass = 'inline-flex rounded-lg shadow-sm';
  export let inputClass = 'block disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:ring-0 focus:outline-none p-2.5 border-r-0';
  export let selectClass = 'text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-r-lg focus:ring-0 focus:outline-none block w-full p-2.5 border-l-1 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500';
  export let timerangeLabel = 'Choose time range';
  export let timerangeButtonLabel = 'Save time';
  export let timeIntervals: string[] = [];
  export let columns: 1 | 2 | 3 | 4 = 2;

  let dropdownOpen = false;
  let showTimerange = false;
  const dispatch = createEventDispatcher<{
    select: { time: string; endTime?: string; [key: string]: string };
  }>();

  function timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  function handleTimeChange(event: Event, isEndTime = false) {
    const newValue = (event.target as HTMLInputElement).value;
    const newMinutes = timeToMinutes(newValue);
    const valueMinutes = timeToMinutes(value);
    const endValueMinutes = timeToMinutes(endValue);

    if (isEndTime) {
      [value, endValue] = newMinutes < valueMinutes ? [newValue, value] : [value, newValue];
    } else {
      [value, endValue] = newMinutes > endValueMinutes ? [endValue, newValue] : [newValue, endValue];
    }

    if (type !== 'timerange-dropdown') {
      dispatchChange();
    }
  }

  function handleOptionSelect(event: Event) {
    selectedOption = (event.target as HTMLSelectElement).value;
    dispatchChange();
  }

  function handleDropdownSelect(option: { value: string; name: string }) {
    dropdownOpen = false;
    selectedOption = option.value;
    dispatchChange();
  }

  function dispatchChange() {
    dispatch('select', {
      time: value,
      endTime: endValue,
      [optionLabel ? optionLabel.toLowerCase() : 'options']: selectedOption || options[0]?.value || ''
    });
  }

  function applyTimerange() {
    dropdownOpen = false;
    dispatchChange();
  }

  function toggleTimerange() {
    showTimerange = !showTimerange;
    if (!showTimerange) {
      dispatchChange();
    }
  }

  function handleInlineButtonSelect(time: string) {
    value = time;
    dispatchChange();
  }
</script>

{#if type !== 'inline-buttons'}
  <ButtonGroup {size} {divClass}>
    {#if type === 'default'}
      <Input {id} {color} type="time" {min} {max} {required} {disabled} defaultClass="{inputClass} rounded-l-lg" bind:value on:change={(e) => handleTimeChange(e)} />
      <InputAddon class="rounded-r-lg">
        {#if icon}
          <svelte:component this={icon} class="w-4 h-4 text-gray-500 dark:text-gray-400" />
        {:else}
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        {/if}
      </InputAddon>
    {:else if type === 'select'}
      <Input {id} {color} type="time" {min} {max} {required} {disabled} defaultClass="{inputClass} rounded-l-lg" bind:value on:change={(e) => handleTimeChange(e)} />
      <Select defaultClass={selectClass} on:change={handleOptionSelect} items={options} value={selectedOption} />
    {:else if type === 'dropdown'}
      <Input {id} {color} type="time" {min} {max} {required} {disabled} defaultClass="{inputClass} rounded-l-lg" bind:value on:change={(e) => handleTimeChange(e)} />
      <Button color={buttonColor} class="rounded-r-lg">
        {optionLabel}
        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </Button>
      <Dropdown bind:open={dropdownOpen}>
        {#each options as option}
          <DropdownItem on:click={() => handleDropdownSelect(option)}>
            {option.name}
          </DropdownItem>
        {/each}
      </Dropdown>
    {:else if type === 'range'}
      <Input {id} {color} type="time" {min} {max} {required} {disabled} defaultClass="{inputClass} rounded-l-lg" bind:value on:change={(e) => handleTimeChange(e)} />
      <InputAddon class="rounded-none">
        {#if icon}
          <svelte:component this={icon} class="w-4 h-4 text-gray-500 dark:text-gray-400" />
        {:else}
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        {/if}
      </InputAddon>
      <span class="flex items-center justify-center text-gray-500 dark:text-gray-400 px-2">-</span>
      <Input id={endId} {color} type="time" {min} {max} {required} {disabled} defaultClass="{inputClass} rounded-none" bind:value={endValue} on:change={(e) => handleTimeChange(e, true)} />
      <InputAddon class="rounded-r-lg">
        {#if icon}
          <svelte:component this={icon} class="w-4 h-4 text-gray-500 dark:text-gray-400" />
        {:else}
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        {/if}
      </InputAddon>
    {:else if type === 'timerange-dropdown'}
      <Button color={buttonColor} {size} class="rounded-r-lg">
        {timerangeLabel}
        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </Button>
      <Dropdown bind:open={dropdownOpen} classContainer="p-4 w-auto last:rounded-r-lg">
        <div class="flex flex-col space-y-4">
          <div class="flex space-x-4">
            <div class="flex flex-col">
              <Label for={id}>Start time:</Label>
              <Input {id} {color} type="time" {min} {max} {required} {disabled} defaultClass="{inputClass} rounded-l-lg" bind:value on:change={(e) => handleTimeChange(e)} />
            </div>
            <div class="flex flex-col">
              <Label for={endId}>End time:</Label>
              <Input id={endId} {color} type="time" {min} {max} {required} {disabled} defaultClass="{inputClass} rounded-l-lg" bind:value={endValue} on:change={(e) => handleTimeChange(e, true)} />
            </div>
          </div>
          <Button color={buttonColor} class="w-full rounded-l-lg" on:click={applyTimerange}>
            {timerangeButtonLabel}
          </Button>
        </div>
      </Dropdown>
    {:else if type === 'timerange-toggle'}
      <div class="flex flex-col space-y-2 w-full">
        <div class="flex items-center justify-between">
          <Toggle id={`${id}-timerange-toggle`} checked={showTimerange} on:change={toggleTimerange} />
        </div>
        {#if showTimerange}
          <div class="flex space-x-4">
            <div class="flex flex-col">
              <Label for={id}>Start time:</Label>
              <Input {id} {color} type="time" {min} {max} {required} {disabled} defaultClass="{inputClass} rounded-lg" bind:value on:change={(e) => handleTimeChange(e)} />
            </div>
            <div class="flex flex-col">
              <Label for={endId}>End time:</Label>
              <Input id={endId} {color} type="time" {min} {max} {required} {disabled} defaultClass="{inputClass} rounded-lg" bind:value={endValue} on:change={(e) => handleTimeChange(e, true)} />
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </ButtonGroup>
{:else}
  <div class="grid gap-2 w-full" class:grid-cols-1={columns === 1} class:grid-cols-2={columns === 2} class:grid-cols-3={columns === 3} class:grid-cols-4={columns === 4}>
    {#each timeIntervals as time}
      <Button {size} color={value === time ? buttonColor : 'light'} class="rounded-lg" on:click={() => handleInlineButtonSelect(time)}>
        {time}
      </Button>
    {/each}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let id: string = 'time';
@prop export let endId: string = 'end-time';
@prop export let value: string = '00:00';
@prop export let endValue: string = '00:00';
@prop export let min: string = '';
@prop export let max: string = '';
@prop export let required: boolean = true;
@prop export let disabled: boolean = false;
@prop export let color: 'base' | 'red' | 'green' | undefined = 'base';
@prop export let buttonColor: ButtonColorType = 'primary';
@prop export let icon: ComponentType;
@prop export let type: 'default' | 'dropdown' | 'select' | 'range' | 'timerange-dropdown' | 'timerange-toggle' | 'inline-buttons' = 'default';
@prop export let optionLabel: string = 'Options';
@prop export let options: { value: string; name: string }[] = [];
@prop export let selectedOption: string = '';
@prop export let size: 'sm' | 'md' | 'lg' = 'md';
@prop export let divClass: string = 'inline-flex rounded-lg shadow-sm';
@prop export let inputClass: string = 'block disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:ring-0 focus:outline-none p-2.5 border-r-0';
@prop export let selectClass: string = 'text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-r-lg focus:ring-0 focus:outline-none block w-full p-2.5 border-l-1 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500';
@prop export let timerangeLabel: string = 'Choose time range';
@prop export let timerangeButtonLabel: string = 'Save time';
@prop export let timeIntervals: string[] = [];
@prop export let columns: 1 | 2 | 3 | 4 = 2;
-->
