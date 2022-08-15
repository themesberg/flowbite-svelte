<script lang="ts">
	import classNames from 'classnames';
	export let divClass: string = 'max-w-sm animate-pulse';
</script>

<div role="status" class={classNames(divClass, $$props.class)}>
	<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
	<span class="sr-only">Loading...</span>
</div>
