<script lang="ts">
	import classNames from 'classnames';
	export let divClass: string =
		'p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700';
</script>

<div role="status" class={classNames(divClass, $$props.class)}>
	<div class="flex justify-between items-center">
		<div>
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
			<div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
		</div>
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
	</div>
	<div class="flex justify-between items-center pt-4">
		<div>
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
			<div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
		</div>
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
	</div>
	<div class="flex justify-between items-center pt-4">
		<div>
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
			<div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
		</div>
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
	</div>
	<div class="flex justify-between items-center pt-4">
		<div>
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
			<div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
		</div>
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
	</div>
	<div class="flex justify-between items-center pt-4">
		<div>
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
			<div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
		</div>
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
	</div>
	<span class="sr-only">Loading...</span>
</div>
