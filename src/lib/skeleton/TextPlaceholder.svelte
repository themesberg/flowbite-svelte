<script lang="ts">
	import classNames from 'classnames';
	export let divClass: string = 'space-y-2.5 animate-pulse max-w-lg';
</script>

<div role="status" class={classNames(divClass, $$props.class)}>
	<div class="flex items-center space-x-2 w-full">
		<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
	</div>
	<div class="flex items-center w-full space-x-2 max-w-[480px]">
		<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
	</div>
	<div class="flex items-center w-full space-x-2 max-w-[400px]">
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
		<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
	</div>
	<div class="flex items-center w-full space-x-2 max-w-[480px]">
		<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
	</div>
	<div class="flex items-center w-full space-x-2 max-w-[440px]">
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
		<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
	</div>
	<div class="flex items-center w-full space-x-2 max-w-[360px]">
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
		<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
	</div>
	<span class="sr-only">Loading...</span>
</div>
