<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button, Modal } from '$lib';
	import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';

	// Props
	export let currentDate: Date = new Date();
	export let open = false;
	export let locale: string = 'default';
	export let firstDayOfWeek: number = 0; // 0 for Sunday, 1 for Monday, etc.
	export let showToday: boolean = true;
	export let showClose: boolean = true;
	export let dateFormat: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
	export let dayLabelFormat: 'short' | 'narrow' | 'long' = 'short';
	export let customClass: string = '';
	export let primaryColor: Button['color'] = 'blue';
	export let secondaryColor: string = 'gray';

	// Internal state
	const dispatch = createEventDispatcher();
	let currentMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
	let daysInMonth: Date[] = getDaysInMonth(currentMonth);

	// Functions
	function getDaysInMonth(date: Date): Date[] {
		const year = date.getFullYear();
		const month = date.getMonth();
		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const daysArray = [];

		// Adjust the start of the week based on firstDayOfWeek
		let start = firstDay.getDay() - firstDayOfWeek;
		if (start < 0) start += 7;

		// Add days from previous month to fill the first week
		for (let i = 0; i < start; i++) {
			const prevMonthDay = new Date(year, month, -i);
			daysArray.unshift(prevMonthDay);
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

	function changeMonth(increment: number) {
		currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1);
		daysInMonth = getDaysInMonth(currentMonth);
	}

	function handleDaySelect(day: Date) {
		dispatch('selectDay', day);
		open = false;
	}

	function isCurrentMonth(day: Date): boolean {
		return day.getMonth() === currentMonth.getMonth();
	}

	function handleClose() {
		open = false;
		dispatch('close');
	}

	function goToToday() {
		const today = new Date();
		currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
		daysInMonth = getDaysInMonth(currentMonth);
		currentDate = today;
		handleDaySelect(today);
	}

	function isToday(day: Date): boolean {
		const today = new Date();
		return (
			day.getDate() === today.getDate() &&
			day.getMonth() === today.getMonth() &&
			day.getFullYear() === today.getFullYear()
		);
	}

	// Computed values
	$: weekdays = [...Array(7)].map((_, i) => {
		const day = new Date(2021, 5, i + firstDayOfWeek);
		return day.toLocaleString(locale, { weekday: dayLabelFormat });
	});

	// Exports
	export function setDate(date: Date) {
		currentDate = date;
		currentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
		daysInMonth = getDaysInMonth(currentMonth);
	}

	export function nextMonth() {
		changeMonth(1);
	}

	export function previousMonth() {
		changeMonth(-1);
	}

	export function setMonth(month: number) {
		currentMonth = new Date(currentMonth.getFullYear(), month, 1);
		daysInMonth = getDaysInMonth(currentMonth);
	}

	export function setYear(year: number) {
		currentMonth = new Date(year, currentMonth.getMonth(), 1);
		daysInMonth = getDaysInMonth(currentMonth);
	}
</script>

<Modal bind:open size="xs" autoclose={false} class={`w-full ${customClass}`}>
	<div class="w-full max-w-md rounded-lg p-6">
		<div class="mb-4 flex items-center justify-between">
			<Button size="sm" on:click={() => changeMonth(-1)} color={primaryColor}>
				<ChevronLeftOutline size="md" />
			</Button>
			<span class="text-lg font-semibold">
				{currentMonth.toLocaleString(locale, dateFormat)}
			</span>
			<Button size="sm" on:click={() => changeMonth(1)} color={primaryColor}>
				<ChevronRightOutline size="md" />
			</Button>
		</div>
		<div class="grid grid-cols-7 gap-2">
			{#each weekdays as day}
				<div class="text-center text-sm font-medium">{day}</div>
			{/each}
			{#each daysInMonth as day}
				<Button
					size="sm"
					color={currentDate.toDateString() === day.toDateString()
						? primaryColor
						: isToday(day)
							? secondaryColor
							: 'alternative'}
					class={!isCurrentMonth(day) ? 'opacity-50' : ''}
					on:click={() => handleDaySelect(day)}
				>
					{day.getDate()}
				</Button>
			{/each}
		</div>
		<div class="mt-4 flex justify-between">
			{#if showToday}
				<Button size="sm" color={primaryColor} on:click={goToToday}>Today</Button>
			{/if}
			{#if showClose}
				<Button size="sm" color={primaryColor} on:click={handleClose}>Close</Button>
			{/if}
		</div>
	</div>
</Modal>