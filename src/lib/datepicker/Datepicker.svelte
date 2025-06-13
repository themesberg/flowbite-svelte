<script lang="ts">
  import { onMount } from "svelte";
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { fade } from "svelte/transition";
  import { Button, ToolbarButton, type DatepickerProps, cn } from "$lib";
  import { datepicker } from "./theme";

  let { value = $bindable(), defaultDate = null, range = false, rangeFrom = $bindable(), rangeTo = $bindable(), locale = "default", firstDayOfWeek = 0, dateFormat, placeholder = "Select date", disabled = false, required = false, inputClass = "", color = "primary", inline = false, autohide = true, showActionButtons = false, title = "", onselect, onclear, onapply, btnClass, inputmode = "none", classes, monthColor = "alternative", monthBtnSelected = "bg-primary-500 text-white", monthBtn = "text-gray-700 dark:text-gray-300", class: className }: DatepickerProps = $props();

  const dateFormatDefault = { year: "numeric", month: "long", day: "numeric" };
  // const dateFormatOptions = $derived(dateFormat ?? dateFormatDefault);
  // Internal state
  let isOpen: boolean = $state(inline);
  let showMonthSelector: boolean = $state(false);
  let inputElement: HTMLInputElement | null = $state(null);
  let datepickerContainerElement: HTMLDivElement;
  let currentMonth: Date = $state(value || defaultDate || new Date());
  let focusedDate: Date | null = null;
  let calendarRef: HTMLDivElement | null = $state(null);

  let daysInMonth = $derived(getDaysInMonth(currentMonth));

  onMount(() => {
    if (!inline) {
      datepickerContainerElement?.ownerDocument.addEventListener("click", handleClickOutside);
      return () => {
        datepickerContainerElement?.ownerDocument.removeEventListener("click", handleClickOutside);
      };
    }
  });

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

  const getWeekdayNames = (): string[] => {
    return Array.from({ length: 7 }, (_, i) => new Date(1970, 0, 5 + i + firstDayOfWeek).toLocaleDateString(locale, { weekday: "short" }));
  };
  let weekdays = getWeekdayNames();

  const getMonthNames = (): string[] => {
    return Array.from({ length: 12 }, (_, i) => new Date(2000, i, 1).toLocaleDateString(locale, { month: "short" }));
  };
  let monthNames = getMonthNames();

  // const addMonth = (date: Date, increment: number): Date => new Date(date.getFullYear(), date.getMonth() + increment, 1);
  const addDay = (date: Date, increment: number): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate() + increment);

  function changeMonth(increment: number) {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1);
  }

  function changeYear(increment: number) {
    currentMonth = new Date(currentMonth.getFullYear() + increment, currentMonth.getMonth(), 1);
  }

  function selectMonth(monthIndex: number, event: MouseEvent) {
    event.stopPropagation();
    currentMonth = new Date(currentMonth.getFullYear(), monthIndex, 1);
    showMonthSelector = false;
  }

  function toggleMonthSelector(event: MouseEvent) {
    event.stopPropagation();
    showMonthSelector = !showMonthSelector;
  }

  function handleDaySelect(day: Date) {
    if (range) {
      if (!rangeFrom || (rangeFrom && rangeTo)) {
        rangeFrom = day;
        rangeTo = undefined;
      } else if (day < rangeFrom) {
        rangeFrom = day;
        rangeTo = rangeFrom;
      } else {
        rangeTo = day;
      }
      onselect?.({ from: rangeFrom, to: rangeTo });
    } else {
      value = day;
      onselect?.(value);
      if (autohide && !inline) isOpen = false;
    }
  }

  function handleInputChange() {
    const date = new Date(inputElement?.value ?? "");
    if (!isNaN(date.getTime())) {
      handleDaySelect(date);
    }
  }

  function handleClickOutside(event: MouseEvent) {
    if (isOpen && datepickerContainerElement && !datepickerContainerElement.contains(event.target as Node)) {
      isOpen = false;
      showMonthSelector = false;
    }
  }

  const formatDate = (date?: Date): string => date?.toLocaleDateString(locale, dateFormat) ?? "";
  const isSameDate = (date1?: Date, date2?: Date): boolean => date1?.toDateString() === date2?.toDateString();
  const isToday = (day: Date): boolean => isSameDate(day, new Date());
  const isInRange = (day: Date): boolean => !!(range && rangeFrom && rangeTo && day > rangeFrom && day < rangeTo);

  let isSelected = $derived((day: Date): boolean => (range ? isSameDate(day, rangeFrom) || isSameDate(day, rangeTo) : isSameDate(day, value)));

  function handleCalendarKeydown(event: KeyboardEvent) {
    if (!isOpen) return;

    if (!focusedDate) {
      focusedDate = value || new Date();
    }

    switch (event.key) {
      case "ArrowLeft":
        focusedDate = addDay(focusedDate, -1);
        break;
      case "ArrowRight":
        focusedDate = addDay(focusedDate, 1);
        break;
      case "ArrowUp":
        focusedDate = addDay(focusedDate, -7);
        break;
      case "ArrowDown":
        focusedDate = addDay(focusedDate, 7);
        break;
      case "Enter":
        handleDaySelect(focusedDate);
        break;
      case "Escape":
        isOpen = false;
        showMonthSelector = false;
        inputElement?.focus();
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
      const focusedButton = calendarRef?.querySelector(`button[aria-label="${focusedDate!.toLocaleDateString(locale, { weekday: "long", year: "numeric", month: "long", day: "numeric" })}"]`) as HTMLButtonElement | null;
      focusedButton?.focus();
    }, 0);
  }

  function handleInputKeydown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      isOpen = !isOpen;
    }
  }

  function handleClear() {
    value = rangeFrom = rangeTo = undefined;
    onclear?.();
  }

  function handleApply() {
    const result = range ? { from: rangeFrom, to: rangeTo } : value;
    if (result) onapply?.(result);
    if (!inline) isOpen = false;
  }

  let { base, input, button, titleVariant, actionButtons, columnHeader, polite, grid, nav, dayButton, monthButton } = datepicker();
</script>

{#snippet navButton(forward: boolean)}
  <ToolbarButton color="dark" onclick={() => changeMonth(forward ? 1 : -1)} size="lg" aria-label={forward ? "Next month" : "Previous month"}>
    <svg class="h-3 w-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={forward ? "M1 5h12m0 0L9 1m4 4L9 9" : "M13 5H1m0 0 4 4M1 5l4-4"}></path>
    </svg>
  </ToolbarButton>
{/snippet}

{#snippet yearNavButton(forward: boolean)}
  <ToolbarButton color="dark" onclick={() => changeYear(forward ? 1 : -1)} size="lg" aria-label={forward ? "Next year" : "Previous year"}>
    <svg class="h-3 w-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={forward ? "M1 5h12m0 0L9 1m4 4L9 9" : "M13 5H1m0 0 4 4M1 5l4-4"}></path>
    </svg>
  </ToolbarButton>
{/snippet}

<div bind:this={datepickerContainerElement} class={["relative", inline && "inline-block"]}>
  {#if !inline}
    <div class="relative">
      <input bind:this={inputElement} type="text" class={cn(input({ color }), inputClass)} {placeholder} value={range ? `${formatDate(rangeFrom)} - ${formatDate(rangeTo)}` : formatDate(value)} onfocus={() => (isOpen = true)} oninput={handleInputChange} onkeydown={handleInputKeydown} {disabled} {required} {inputmode} aria-haspopup="dialog" />
      <button type="button" class={cn(button({ class: clsx(classes?.button) }), btnClass)} onclick={() => (isOpen = !isOpen)} {disabled} aria-label={isOpen ? "Close date picker" : "Open date picker"}>
        <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
        </svg>
      </button>
    </div>
  {/if}

  {#if isOpen || inline}
    <div bind:this={calendarRef} id="datepicker-dropdown" class={cn(base({ inline, class: clsx(classes?.base) }), className)} transition:fade={{ duration: 100 }} role="dialog" aria-label="Calendar">
      {#if title}
        <h2 class={titleVariant({ class: clsx(classes?.titleVariant) })}>{title}</h2>
      {/if}

      {#if showMonthSelector}
        <!-- Month/Year Selector View -->
        <div class={nav({ class: clsx(classes?.nav) })}>
          {@render yearNavButton(false)}
          <h3 class={polite({ class: clsx(classes?.polite) })} aria-live="polite">
            {currentMonth.getFullYear()}
          </h3>
          {@render yearNavButton(true)}
        </div>
        <div class="grid grid-cols-4 gap-2 p-4">
          {#each monthNames as month, index}
            <Button type="button" color={monthColor} class={twMerge(monthButton(), currentMonth.getMonth() === index ? clsx(monthBtnSelected) : clsx(monthBtn), clsx(classes?.monthButton))} onclick={(event: MouseEvent) => selectMonth(index, event)}>
              {month}
            </Button>
          {/each}
        </div>
      {:else}
        <!-- Regular Calendar View -->
        <div class={nav({ class: clsx(classes?.nav) })}>
          {@render navButton(false)}
          <Button type="button" class={cn(polite({ class: clsx(classes?.polite) }), "cursor-pointer rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700")} aria-live="polite" onclick={(event: MouseEvent) => toggleMonthSelector(event)}>
            {currentMonth.toLocaleString(locale, { month: "long", year: "numeric" })}
          </Button>
          {@render navButton(true)}
        </div>
        <div class={grid({ class: clsx(classes?.grid) })} role="grid">
          {#each weekdays as day}
            <div class={columnHeader({ class: clsx(classes?.columnHeader) })} role="columnheader">{day}</div>
          {/each}
          {#each daysInMonth as day}
            {@const current = day.getMonth() !== currentMonth.getMonth()}
            <Button type="button" color={isSelected(day) ? color : "alternative"} class={dayButton({ current, today: isToday(day), color: isInRange(day) ? color : undefined, class: clsx(classes?.dayButton) })} onclick={() => handleDaySelect(day)} onkeydown={handleCalendarKeydown} aria-label={day.toLocaleDateString(locale, { weekday: "long", year: "numeric", month: "long", day: "numeric" })} aria-selected={isSelected(day)} role="gridcell">
              {day.getDate()}
            </Button>
          {/each}
        </div>
      {/if}

      {#if showActionButtons && !showMonthSelector}
        <div class={actionButtons({ class: clsx(classes?.actionButtons) })}>
          <Button onclick={() => handleDaySelect(new Date())} {color} size="sm">Today</Button>
          <Button onclick={handleClear} color="red" size="sm">Clear</Button>
          <Button onclick={handleApply} {color} size="sm">Apply</Button>
        </div>
      {/if}
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DatepickerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L484)
## Props
@prop value = $bindable()
@prop defaultDate = null
@prop range = false
@prop rangeFrom = $bindable()
@prop rangeTo = $bindable()
@prop locale = "default"
@prop firstDayOfWeek = 0
@prop dateFormat
@prop placeholder = "Select date"
@prop disabled = false
@prop required = false
@prop inputClass = ""
@prop color = "primary"
@prop inline = false
@prop autohide = true
@prop showActionButtons = false
@prop title = ""
@prop onselect
@prop onclear
@prop onapply
@prop btnClass
@prop inputmode = "none"
@prop classes
@prop monthColor = "alternative"
@prop monthBtnSelected = "bg-primary-500 text-white"
@prop monthBtn = "text-gray-700 dark:text-gray-300"
@prop class: className
-->
