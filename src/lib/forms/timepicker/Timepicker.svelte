<script lang="ts">
  import clsx from "clsx";
  import { Dropdown, DropdownItem, Button, Input, ButtonGroup, Select, Label, Toggle, type TimepickerProps, type TimePickerOption } from "$lib";
  import { timepicker, type TimepickerTheme } from ".";
  import { parse, isValid, isBefore, isAfter } from "date-fns";
  import { getTheme } from "$lib/theme/themeUtils";

  let { id = "time", endId = "end-time", value = $bindable("00:00"), endValue = $bindable("00:00"), min = "", max = "", required = true, disabled = false, inputColor, buttonColor = "primary", Icon, iconClass = "h-5 w-5 text-gray-500 dark:text-gray-400", type = "default", optionLabel = "Options", options = [], size = "md", divClass, inputClass, selectClass, timerangeLabel = "Choose time range", timerangeButtonLabel = "Save time", timeIntervals = [], columns = 2, onselect }: TimepickerProps = $props();

  const theme = getTheme("timepicker");

  // Generate theme classes
  const styles = timepicker({ type, columns, disabled });

  // State
  let selectedOption = $state("");
  let dropdownOpen = $state(false);
  let showTimerange = $state(false);

  // Helper functions using date-fns
  function parseTime(time: string): Date | null {
    if (!time) return null;
    const parsed = parse(time, "HH:mm", new Date());
    return isValid(parsed) ? parsed : null;
  }

  function timeToMinutes(time: string): number {
    const date = parseTime(time);
    return date ? date.getHours() * 60 + date.getMinutes() : 0;
  }

  function isValidTimeFormat(time: string): boolean {
    return parseTime(time) !== null;
  }

  function isTimeInRange(time: string, minTime: string, maxTime: string): boolean {
    const timeDate = parseTime(time);
    if (!timeDate) return false;

    if (minTime) {
      const minDate = parseTime(minTime);
      if (minDate && isBefore(timeDate, minDate)) return false;
    }

    if (maxTime) {
      const maxDate = parseTime(maxTime);
      if (maxDate && isAfter(timeDate, maxDate)) return false;
    }

    return true;
  }

  function handleTimeChange(event: Event, isEndTime: boolean = false): void {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;

    // Validate time format
    if (!isValidTimeFormat(newValue)) {
      target.value = isEndTime ? endValue : value;
      return;
    }

    // Validate against min/max constraints
    if (!isTimeInRange(newValue, min, max)) {
      target.value = isEndTime ? endValue : value;
      return;
    }

    // Use date-fns for reliable time comparison
    const newValueMinutes = timeToMinutes(newValue);
    const valueMinutes = timeToMinutes(value);
    const endValueMinutes = timeToMinutes(endValue);

    if (isEndTime) {
      if (newValueMinutes < valueMinutes) {
        // Only update start time if it respects min/max constraints
        if (isTimeInRange(newValue, min, max)) {
          value = newValue;
        } else {
          target.value = endValue;
          return;
        }
      } else {
        endValue = newValue;
      }
    } else {
      if (newValueMinutes > endValueMinutes) {
        // Only update end time if it respects min/max constraints
        if (isTimeInRange(newValue, min, max)) {
          endValue = newValue;
        } else {
          target.value = value;
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
    if (isValidTimeFormat(time) && isTimeInRange(time, min, max)) {
      value = time;
      notifyChange();
    }
  }

  // Ensure initial values are valid
  $effect(() => {
    if (!isValidTimeFormat(value)) {
      value = "00:00";
    }
    if (!isValidTimeFormat(endValue)) {
      endValue = "00:00";
    }
  });
</script>

{#if type !== "inline-buttons"}
  <ButtonGroup {size} class={styles.buttonGroup({ class: clsx((theme as TimepickerTheme)?.buttonGroup, divClass) })}>
    {#if type === "default"}
      <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class={styles.input({ class: clsx(styles.inputWithIcon(), (theme as TimepickerTheme)?.input, inputClass) })} bind:value oninput={(e) => handleTimeChange(e)} onchange={(e) => handleTimeChange(e)} />
      <div class={styles.iconWrapper({ class: clsx((theme as TimepickerTheme)?.iconWrapper) })}>
        {#if Icon}
          <Icon class={iconClass} />
        {:else}
          <svg class={styles.icon()} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        {/if}
      </div>
    {:else if type === "select"}
      <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class={styles.input({ class: clsx((theme as TimepickerTheme)?.input, inputClass) })} bind:value oninput={(e) => handleTimeChange(e)} onchange={(e) => handleTimeChange(e)} />
      <Select selectClass={styles.select({ class: clsx((theme as TimepickerTheme)?.select, selectClass) })} onchange={handleOptionSelect} items={options} value={selectedOption} />
    {:else if type === "dropdown"}
      <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class={styles.input({ class: clsx((theme as TimepickerTheme)?.input, inputClass) })} bind:value oninput={(e) => handleTimeChange(e)} onchange={(e) => handleTimeChange(e)} />
      <Button color={buttonColor} class={styles.button({ class: clsx((theme as TimepickerTheme)?.button) })}>
        {optionLabel}
        <svg class={styles.buttonIcon({ class: clsx((theme as TimepickerTheme)?.buttonIcon) })} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </Button>
      <Dropdown simple>
        {#each options as option}
          <DropdownItem onclick={() => handleDropdownSelect(option)}>
            {option.name}
          </DropdownItem>
        {/each}
      </Dropdown>
    {:else if type === "range"}
      <div class={styles.rangeInputWrapper({ class: clsx((theme as TimepickerTheme)?.rangeInputWrapper) })}>
        <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class={styles.input({ class: clsx((theme as TimepickerTheme)?.rangeInput, styles.rangeInput(), inputClass) })} bind:value oninput={(e) => handleTimeChange(e)} onchange={(e) => handleTimeChange(e)} />
        <button type="button" class={styles.rangeButton({ class: clsx((theme as TimepickerTheme)?.rangeButton) })} onclick={() => document.getElementById(id)?.click()} aria-label="Open time picker">
          {#if Icon}
            <Icon class={iconClass} />
          {:else}
            <svg class={styles.icon({ class: clsx((theme as TimepickerTheme)?.icon) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          {/if}
        </button>
      </div>
      <span class={styles.rangeSeparator({ class: clsx((theme as TimepickerTheme)?.rangeSeparator) })}>-</span>
      <div class={styles.rangeInputWrapper({ class: clsx((theme as TimepickerTheme)?.rangeInputWrapper) })}>
        <Input id={endId} color={inputColor} type="time" {min} {max} {required} {disabled} class={styles.input({ class: clsx(styles.rangeInput(), (theme as TimepickerTheme)?.rangeInput, inputClass) })} bind:value={endValue} oninput={(e) => handleTimeChange(e, true)} onchange={(e) => handleTimeChange(e, true)} />
        <button type="button" class={styles.rangeButton({ class: clsx((theme as TimepickerTheme)?.rangeButton) })} onclick={() => document.getElementById(endId)?.click()} aria-label="Open end time picker">
          {#if Icon}
            <Icon class={iconClass} />
          {:else}
            <svg class={styles.icon({ class: clsx((theme as TimepickerTheme)?.icon) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          {/if}
        </button>
      </div>
    {:else if type === "timerange-dropdown"}
      <Button color={buttonColor} {size} class={styles.button({ class: clsx((theme as TimepickerTheme)?.button) })}>
        {timerangeLabel}
        <svg class={styles.buttonIcon({ class: clsx((theme as TimepickerTheme)?.buttonIcon) })} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </Button>
      <Dropdown simple class={styles.dropdownContent({ class: clsx((theme as TimepickerTheme)?.dropdownContent) })}>
        <div class={styles.dropdownInner({ class: clsx((theme as TimepickerTheme)?.dropdownInner) })}>
          <div class={styles.dropdownTimeRow({ class: clsx((theme as TimepickerTheme)?.dropdownTimeRow) })}>
            <div class={styles.dropdownTimeCol({ class: clsx((theme as TimepickerTheme)?.dropdownTimeCol) })}>
              <Label for={id}>Start time:</Label>
              <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class={styles.dropdownTimeInput({ class: clsx((theme as TimepickerTheme)?.dropdownTimeInput, inputClass) })} bind:value oninput={(e) => handleTimeChange(e)} onchange={(e) => handleTimeChange(e)} />
            </div>
            <div class={styles.dropdownTimeCol({ class: clsx((theme as TimepickerTheme)?.dropdownTimeCol) })}>
              <Label for={endId}>End time:</Label>
              <Input id={endId} color={inputColor} type="time" {min} {max} {required} {disabled} class={styles.dropdownTimeInput({ class: clsx((theme as TimepickerTheme)?.dropdownTimeInput, inputClass) })} bind:value={endValue} oninput={(e) => handleTimeChange(e, true)} onchange={(e) => handleTimeChange(e, true)} />
            </div>
          </div>
          <Button color={buttonColor} class={styles.dropdownButton({ class: clsx((theme as TimepickerTheme)?.dropdownButton) })} onclick={applyTimerange}>
            {timerangeButtonLabel}
          </Button>
        </div>
      </Dropdown>
    {:else if type === "timerange-toggle"}
      <div class={styles.toggleWrapper({ class: clsx((theme as TimepickerTheme)?.toggleWrapper) })}>
        <div class={styles.toggleRow({ class: clsx((theme as TimepickerTheme)?.toggleRow) })}>
          <Toggle id={`${id}-timerange-toggle`} checked={showTimerange} onchange={toggleTimerange} spanClass="me-0 rounded-lg" />
        </div>
        {#if showTimerange}
          <div class={styles.toggleTimeRow({ class: clsx((theme as TimepickerTheme)?.toggleTimeRow) })}>
            <div class={styles.toggleTimeCol({ class: clsx((theme as TimepickerTheme)?.toggleTimeCol) })}>
              <Label for={id}>Start time:</Label>
              <Input {id} color={inputColor} type="time" {min} {max} {required} {disabled} class={styles.toggleTimeInput({ class: clsx((theme as TimepickerTheme)?.toggleTimeInput, inputClass) })} bind:value oninput={(e) => handleTimeChange(e)} onchange={(e) => handleTimeChange(e)} />
            </div>
            <div class={styles.toggleTimeCol({ class: clsx((theme as TimepickerTheme)?.toggleTimeCol) })}>
              <Label for={endId}>End time:</Label>
              <Input id={endId} color={inputColor} type="time" {min} {max} {required} {disabled} class={styles.toggleTimeInput({ class: clsx((theme as TimepickerTheme)?.toggleTimeInput, inputClass) })} bind:value={endValue} oninput={(e) => handleTimeChange(e, true)} onchange={(e) => handleTimeChange(e, true)} />
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </ButtonGroup>
{:else}
  <div class={styles.inlineGrid({ class: clsx((theme as TimepickerTheme)?.inlineGrid) })}>
    {#each timeIntervals as time}
      <Button {size} color={value === time ? buttonColor : "light"} class={styles.inlineButton({ class: clsx((theme as TimepickerTheme)?.inlineButton) })} onclick={() => handleInlineButtonSelect(time)}>
        {time}
      </Button>
    {/each}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TimepickerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L903)
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
