<script lang="ts">
  import { onMount } from "svelte";
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { fade } from "svelte/transition";
  import { Button, ToolbarButton, type DatepickerProps, cn } from "$lib";
  import { datepicker } from "./theme";
  import { parse, isValid, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, isWithinInterval } from "date-fns";

  let { value = $bindable(), defaultDate = null, range = false, rangeFrom = $bindable(), rangeTo = $bindable(), availableFrom = null, availableTo = null, locale = "default", translationLocale = locale, firstDayOfWeek = 0, dateFormat, placeholder = "Select date", disabled = false, required = false, inputClass = "", color = "primary", inline = false, autohide = true, showActionButtons = false, title = "", onselect, onclear, onapply, btnClass, inputmode = "none", classes, monthColor = "alternative", monthBtnSelected = "bg-primary-500 text-white", monthBtn = "text-gray-700 dark:text-gray-300", class: className, elementRef = $bindable() }: DatepickerProps = $props();

  const dateFormatDefault = { year: "numeric", month: "long", day: "numeric" };

  // Internal state
  let isOpen: boolean = $state(inline);
  let showMonthSelector: boolean = $state(false);
  let inputElement: HTMLInputElement | null = $state(null);

  // Update elementRef when inputElement changes
  $effect(() => {
    if (inputElement) {
      elementRef = inputElement;
    }
  });
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
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: firstDayOfWeek });
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: firstDayOfWeek });

    return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  }

  // MODIFIED: Use translationLocale for weekday names
  const getWeekdayNames = (): string[] => {
    return Array.from({ length: 7 }, (_, i) => new Date(1970, 0, 5 + i + firstDayOfWeek).toLocaleDateString(translationLocale, { weekday: "short" }));
  };

  let weekdays = $derived(getWeekdayNames());

  // MODIFIED: Use translationLocale for month names
  const getMonthNames = (): string[] => {
    return Array.from({ length: 12 }, (_, i) => new Date(2000, i, 1).toLocaleDateString(translationLocale, { month: "short" }));
  };
  let monthNames = $derived(getMonthNames());

  const addDay = (date: Date, increment: number): Date => addDays(date, increment);

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

  function isDateAvailable(date: Date): boolean {
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (availableFrom) {
      const fromDate = new Date(availableFrom.getFullYear(), availableFrom.getMonth(), availableFrom.getDate());
      if (dateOnly < fromDate) return false;
    }

    if (availableTo) {
      const toDate = new Date(availableTo.getFullYear(), availableTo.getMonth(), availableTo.getDate());
      if (dateOnly > toDate) return false;
    }

    return true;
  }

  function handleDaySelect(day: Date) {
    if (!isDateAvailable(day)) return;

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

  function handleInputChangeWithDateFns() {
    const inputValue = inputElement?.value?.trim();
    if (!inputValue) return;

    // Get the actual format pattern
    const formatPattern = getDateFormatPattern();

    try {
      // Parse with the exact format expected
      const parsedDate = parse(inputValue, formatPattern, new Date());

      if (!isValid(parsedDate)) {
        inputElement?.setCustomValidity(`Please enter date in format: ${formatPattern}`);
        return;
      }

      inputElement?.setCustomValidity("");

      if (!isDateAvailable(parsedDate)) {
        inputElement?.setCustomValidity("Selected date is not available");
        return;
      }

      handleDaySelect(parsedDate);
    } catch (error) {
      inputElement?.setCustomValidity(`Please enter date in format: ${formatPattern}`);
    }
  }

  function getDateFormatPattern(): string {
    // Test with a known date to determine format
    const testDate = new Date(2025, 0, 15); // January 15, 2025
    const formatted = formatDate(testDate);

    // Map common formats to date-fns patterns
    if (formatted.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
      // Could be DD/MM/YYYY or MM/DD/YYYY, need to determine
      const testDate2 = new Date(2025, 11, 3); // December 3, 2025
      const formatted2 = formatDate(testDate2);

      if (formatted2.startsWith("3/") || formatted2.startsWith("03/")) {
        return "d/M/yyyy"; // DD/MM/YYYY format
      } else {
        return "M/d/yyyy"; // MM/DD/YYYY format
      }
    }

    if (formatted.match(/^\d{4}-\d{1,2}-\d{1,2}$/)) {
      return "yyyy-M-d"; // ISO format
    }

    // Add more patterns as needed
    return "M/d/yyyy"; // Default fallback
  }

  function handleClickOutside(event: MouseEvent) {
    if (isOpen && datepickerContainerElement && !datepickerContainerElement.contains(event.target as Node)) {
      isOpen = false;
      showMonthSelector = false;
    }
  }

  // MODIFIED: Use locale for formatting (not translationLocale)
  const formatDate = (date?: Date): string => date?.toLocaleDateString(locale, dateFormat) ?? "";
  const isSameDate = (date1?: Date, date2?: Date): boolean => (date1 && date2 ? isSameDay(date1, date2) : false);
  const isToday = (day: Date): boolean => isSameDate(day, new Date());
  const isInRange = (day: Date): boolean => !!(range && rangeFrom && rangeTo && isWithinInterval(day, { start: rangeFrom, end: rangeTo }));

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

    // MODIFIED: Use translationLocale for aria-label
    setTimeout(() => {
      const focusedButton = calendarRef?.querySelector(`button[aria-label="${focusedDate!.toLocaleDateString(translationLocale, { weekday: "long", year: "numeric", month: "long", day: "numeric" })}"]`) as HTMLButtonElement | null;
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
      <input bind:this={inputElement} type="text" class={cn(input({ color }), inputClass)} {placeholder} value={range ? `${formatDate(rangeFrom)} - ${formatDate(rangeTo)}` : formatDate(value)} onfocus={() => (isOpen = true)} oninput={handleInputChangeWithDateFns} onkeydown={handleInputKeydown} {disabled} {required} {inputmode} aria-haspopup="dialog" />
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
          <!-- MODIFIED: Use translationLocale for month/year display -->
          <Button type="button" class={cn(polite({ class: clsx(classes?.polite) }), "cursor-pointer rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700")} aria-live="polite" onclick={(event: MouseEvent) => toggleMonthSelector(event)}>
            {currentMonth.toLocaleString(translationLocale, { month: "long", year: "numeric" })}
          </Button>
          {@render navButton(true)}
        </div>
        <div class={grid({ class: clsx(classes?.grid) })} role="grid">
          {#each weekdays as day}
            <div class={columnHeader({ class: clsx(classes?.columnHeader) })} role="columnheader">{day}</div>
          {/each}
          {#each daysInMonth as day}
            {@const current = day.getMonth() !== currentMonth.getMonth()}
            {@const available = isDateAvailable(day)}
            <Button
              type="button"
              color={isSelected(day) ? color : "alternative"}
              class={dayButton({
                current,
                today: isToday(day),
                color: isInRange(day) ? color : undefined,
                unavailable: !available,
                class: clsx(classes?.dayButton, !available && "cursor-not-allowed opacity-50")
              })}
              onclick={() => handleDaySelect(day)}
              onkeydown={handleCalendarKeydown}
              aria-label={day.toLocaleDateString(translationLocale, { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
              aria-selected={isSelected(day)}
              aria-disabled={!available}
              disabled={!available}
              role="gridcell"
            >
              {day.getDate()}
            </Button>
          {/each}
        </div>
      {/if}

      {#if showActionButtons && !showMonthSelector}
        <div class={actionButtons({ class: clsx(classes?.actionButtons) })}>
          <Button onclick={() => handleDaySelect(new Date())} {color} size="sm" disabled={!isDateAvailable(new Date())}>Today</Button>
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
[DatepickerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L487)
## Props
@prop value = $bindable()
@prop defaultDate = null
@prop range = false
@prop rangeFrom = $bindable()
@prop rangeTo = $bindable()
@prop availableFrom = null
@prop availableTo = null
@prop locale = "default"
@prop translationLocale = locale
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
@prop elementRef = $bindable()
-->
