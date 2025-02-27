<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { Button } from '$lib';

  export let value: Date | null = null;
  export let defaultDate: Date | null = null;
  export let range: boolean = false;
  export let rangeFrom: Date | null = null;
  export let rangeTo: Date | null = null;
  export let locale: string = 'default';
  export let firstDayOfWeek: number = 0; // 0 = Monday, 6 = Sunday
  export let dateFormat: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  export let placeholder: string = 'Select date';
  export let disabled: boolean = false;
  export let required: boolean = false;
  export let inputClass: string = '';
  export let color: Button['color'] = 'primary';
  export let inline: boolean = false;
  export let autohide: boolean = true;
  export let showActionButtons: boolean = false;
  export let title: string = '';

  // Internal state
  const dispatch = createEventDispatcher();
  let isOpen: boolean = inline;
  let inputElement: HTMLInputElement;
  let datepickerContainerElement: HTMLDivElement;
  let currentMonth: Date = value || defaultDate || new Date();
  let focusedDate: Date | null = null;
  let calendarRef: HTMLDivElement;

  $: daysInMonth = getDaysInMonth(currentMonth);
  $: weekdays = getWeekdays();

  onMount(() => {
    if (!inline) {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  });

  // Color handling functions
  function getFocusRingClass(color: Button['color']): string {
    switch (color) {
      case 'primary':
        return 'focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400';
      case 'blue':
        return 'focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400';
      case 'red':
        return 'focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400';
      case 'green':
        return 'focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400';
      case 'yellow':
        return 'focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400';
      case 'purple':
        return 'focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400';
      default:
        return '';
    }
  }

  function getRangeBackgroundClass(color: Button['color']): string {
    switch (color) {
      case 'primary':
        return 'bg-primary-100 dark:bg-primary-900';
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-900';
      case 'red':
        return 'bg-red-100 dark:bg-red-900';
      case 'green':
        return 'bg-green-100 dark:bg-green-900';
      case 'yellow':
        return 'bg-yellow-100 dark:bg-yellow-900';
      case 'purple':
        return 'bg-purple-100 dark:bg-purple-900';
      default:
        return '';
    }
  }

  function getDaysInMonth(date: Date): Date[] {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 0);
    const lastDay = new Date(year, month + 1, 0);
    const daysArray: Date[] = [];

    // Add days from previous month to fill the first week
    let start = firstDay.getDay() - firstDayOfWeek;
    if (start < 0) start += 7;
    for (let i = 0; i < start; i++) {
      daysArray.unshift(new Date(year, month, -i));
    }

    // Add days of the current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(new Date(year, month, i));
    }

    // Add days from next month to fill the last week
    const remainingDays = 7 - (daysArray.length % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        daysArray.push(new Date(year, month + 1, i));
      }
    }

    return daysArray;
  }

  function getWeekdays(): string[] {
    const weekdays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(2021, 5, i + firstDayOfWeek);
      weekdays.push(day.toLocaleString(locale, { weekday: 'short' }));
    }
    return weekdays;
  }

  function changeMonth(increment: number) {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1);
  }

  function handleDaySelect(day: Date) {
    if (range) {
      if (!rangeFrom || (rangeFrom && rangeTo)) {
        rangeFrom = day;
        rangeTo = null;
      } else if (day < rangeFrom) {
        rangeTo = rangeFrom;
        rangeFrom = day;
      } else {
        rangeTo = day;
      }
      dispatch('select', { from: rangeFrom, to: rangeTo });
    } else {
      value = day;
      dispatch('select', value);
      if (autohide && !inline) isOpen = false;
    }
  }

  function handleInputChange() {
    const date = new Date(inputElement.value);
    if (!isNaN(date.getTime())) {
      handleDaySelect(date);
    }
  }

  function handleClickOutside(event: MouseEvent) {
    if (isOpen && datepickerContainerElement && !datepickerContainerElement.contains(event.target as Node)) {
      isOpen = false;
    }
  }

  function formatDate(date: Date | null): string {
    if (!date) return '';
    return date.toLocaleDateString(locale, dateFormat);
  }

  function isSameDate(date1: Date | null, date2: Date | null): boolean {
    if (!date1 || !date2) return false;
    return date1.toDateString() === date2.toDateString();
  }

  $: isSelected = (day: Date): boolean => {
    if (range) {
      return isSameDate(day, rangeFrom) || isSameDate(day, rangeTo);
    }
    return isSameDate(day, value);
  };

  function isInRange(day: Date): boolean {
    if (!range || !rangeFrom || !rangeTo) return false;
    return day > rangeFrom && day < rangeTo;
  }

  function isToday(day: Date): boolean {
    const today = new Date();
    return day.toDateString() === today.toDateString();
  }

  function handleCalendarKeydown(event: KeyboardEvent) {
    if (!isOpen) return;

    if (!focusedDate) {
      focusedDate = value || new Date();
    }

    switch (event.key) {
      case 'ArrowLeft':
        focusedDate = new Date(focusedDate.getFullYear(), focusedDate.getMonth(), focusedDate.getDate() - 1);
        break;
      case 'ArrowRight':
        focusedDate = new Date(focusedDate.getFullYear(), focusedDate.getMonth(), focusedDate.getDate() + 1);
        break;
      case 'ArrowUp':
        focusedDate = new Date(focusedDate.getFullYear(), focusedDate.getMonth(), focusedDate.getDate() - 7);
        break;
      case 'ArrowDown':
        focusedDate = new Date(focusedDate.getFullYear(), focusedDate.getMonth(), focusedDate.getDate() + 7);
        break;
      case 'Enter':
        handleDaySelect(focusedDate);
        break;
      case 'Escape':
        isOpen = false;
        inputElement.focus();
        break;
      default:
        return;
    }

    event.preventDefault();
    if (focusedDate.getMonth() !== currentMonth.getMonth()) {
      currentMonth = new Date(focusedDate.getFullYear(), focusedDate.getMonth(), 1);
    }

    // Focus the button for the focused date
    setTimeout(() => {
      const focusedButton = calendarRef.querySelector(`button[aria-label="${focusedDate!.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}"]`) as HTMLButtonElement | null;
      focusedButton?.focus();
    }, 0);
  }

  function handleInputKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      isOpen = !isOpen;
    }
  }

  function handleToday() {
    handleDaySelect(new Date());
  }

  function handleClear() {
    value = null;
    rangeFrom = null;
    rangeTo = null;
    dispatch('clear');
  }

  function handleApply() {
    dispatch('apply', range ? { from: rangeFrom, to: rangeTo } : value);
    if (!inline) isOpen = false;
  }
</script>

<div bind:this={datepickerContainerElement} class="relative {inline ? 'inline-block' : ''}">
  {#if !inline}
    <div class="relative">
      <input bind:this={inputElement} type="text" class="w-full px-4 py-2 text-sm border rounded-md focus:outline-hidden dark:bg-gray-700 dark:text-white dark:border-gray-600 {getFocusRingClass(color)} {inputClass}" {placeholder} value={range ? `${formatDate(rangeFrom)} - ${formatDate(rangeTo)}` : formatDate(value)} on:focus={() => (isOpen = true)} on:input={handleInputChange} on:keydown={handleInputKeydown} {disabled} {required} aria-haspopup="dialog" />
      <button type="button" class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400 focus:outline-hidden" on:click={() => (isOpen = !isOpen)} {disabled} aria-label={isOpen ? 'Close date picker' : 'Open date picker'}>
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
        </svg>
      </button>
    </div>
  {/if}

  {#if isOpen || inline}
    <div
      bind:this={calendarRef}
      id="datepicker-dropdown"
      class="
        {inline ? '' : 'absolute z-10 mt-1'}
        bg-white dark:bg-gray-800 rounded-md shadow-lg"
      transition:fade={{ duration: 100 }}
      role="dialog"
      aria-label="Calendar">
      <div class="p-4" role="application">
        {#if title}
          <h2 class="text-lg font-semibold mb-4 dark:text-white">{title}</h2>
        {/if}
        <div class="flex items-center justify-between mb-4">
          <Button on:click={() => changeMonth(-1)} {color} size="sm" aria-label="Previous month">
            <svg class="w-3 h-3 rtl:rotate-180 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path></svg>
          </Button>
          <h3 class="text-lg font-semibold dark:text-white" aria-live="polite">
            {currentMonth.toLocaleString(locale, { month: 'long', year: 'numeric' })}
          </h3>
          <Button on:click={() => changeMonth(1)} {color} size="sm" aria-label="Next month">
            <svg class="w-3 h-3 rtl:rotate-180 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg>
          </Button>
        </div>
        <div class="grid grid-cols-7 gap-1" role="grid">
          {#each weekdays as day}
            <div class="text-center text-sm font-medium text-gray-500 dark:text-gray-400" role="columnheader">{day}</div>
          {/each}
          {#each daysInMonth as day}
            <Button color={isSelected(day) ? color : 'alternative'} size="sm" class="w-full h-8 {day.getMonth() !== currentMonth.getMonth() ? 'text-gray-300 dark:text-gray-600' : ''} {isToday(day) ? 'font-bold' : ''} {isInRange(day) ? getRangeBackgroundClass(color) : ''}" on:click={() => handleDaySelect(day)} on:keydown={handleCalendarKeydown} aria-label={day.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} aria-selected={isSelected(day)} role="gridcell">
              {day.getDate()}
            </Button>
          {/each}
        </div>
        {#if showActionButtons}
          <div class="mt-4 flex justify-between">
            <Button on:click={handleToday} {color} size="sm">Today</Button>
            <Button on:click={handleClear} color="red" size="sm">Clear</Button>
            <Button on:click={handleApply} {color} size="sm">Apply</Button>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let value: Date | null = null;
@prop export let defaultDate: Date | null = null;
@prop export let range: boolean = false;
@prop export let rangeFrom: Date | null = null;
@prop export let rangeTo: Date | null = null;
@prop export let locale: string = 'default';
@prop export let firstDayOfWeek: number = 0;
@prop export let dateFormat: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
@prop export let placeholder: string = 'Select date';
@prop export let disabled: boolean = false;
@prop export let required: boolean = false;
@prop export let inputClass: string = '';
@prop export let color: Button['color'] = 'primary';
@prop export let inline: boolean = false;
@prop export let autohide: boolean = true;
@prop export let showActionButtons: boolean = false;
@prop export let title: string = '';
-->
