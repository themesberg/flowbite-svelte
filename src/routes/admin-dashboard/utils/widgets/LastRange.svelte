<script lang="ts">
	import dayjs from 'dayjs';
	import LocalizedFormat from 'dayjs/plugin/localizedFormat';
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	dayjs.extend(LocalizedFormat);

	type TimeSlot = keyof typeof timeslots;

	export let timeslot: TimeSlot = 'Last 7 days';
	export let timeslots = {
		Yesterday: -1,
		Today: 0,
		'Last 7 days': 7,
		'Last 30 days': 30,
		'Last 90 days': 90
	};

	let timeslots_keys: TimeSlot[] = Object.keys(timeslots) as TimeSlot[];

	let today = dayjs();
	$: start = today.subtract(timeslots[timeslot], 'days').format('ll');
	$: end = timeslot == 'Yesterday' ? start : today.format('ll');
</script>

<div class="font-normal">
	<button
		class="mt-0.5 inline-flex gap-1 rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
		>{timeslot} <ChevronDownOutline size="lg" /></button
	>
	<Dropdown class="min-w-48">
		<div slot="header" role="none">
			<DropdownItem class="truncate text-gray-900 dark:text-white" href="#">
				{#if start == end}
					{start}
				{:else}
					{start} - {end}
				{/if}
			</DropdownItem>
		</div>

		{#each timeslots_keys as slot}
			<DropdownItem class="font-normal" href="#" on:click={() => (timeslot = slot)}>
				{slot}
			</DropdownItem>
		{/each}

		<div slot="footer" role="none">
			<DropdownItem class="font-normal" href="#">Custom...</DropdownItem>
		</div>
	</Dropdown>
</div>
