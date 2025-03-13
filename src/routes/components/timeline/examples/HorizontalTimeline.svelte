<script lang="ts">
	import { Timeline, TimelineItem } from '$lib';
	import { CalendarWeekSolid } from 'flowbite-svelte-icons';
</script>

<Timeline order="horizontal">
	<TimelineItem title="Flowbite Library v1.0.0" date="2021-12-2">
		{#snippet orientationSlot()}
			<div class="flex items-center">
				<div
					class="bg-primary-200 dark:bg-primary-900 z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900"
				>
					<CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
				</div>
				<div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>
			</div>
		{/snippet}
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">
			Get started with dozens of web components and interactive elements.
		</p>
	</TimelineItem>
	<TimelineItem title="Flowbite Library v1.2.0" date="2021-12-23">
		{#snippet orientationSlot()}
			<div class="flex items-center">
				<div
					class="bg-primary-200 dark:bg-primary-900 z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900"
				>
					<CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
				</div>
				<div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>
			</div>
		{/snippet}
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">
			Get started with dozens of web components and interactive elements.
		</p>
	</TimelineItem>
	<TimelineItem title="Flowbite Library v1.3.0" date="2021-01-05">
		{#snippet orientationSlot()}
			<div class="flex items-center">
				<div
					class="bg-primary-200 dark:bg-primary-900 z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900"
				>
					<CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
				</div>
				<div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>
			</div>
		{/snippet}
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">
			Get started with dozens of web components and interactive elements.
		</p>
	</TimelineItem>
</Timeline>
