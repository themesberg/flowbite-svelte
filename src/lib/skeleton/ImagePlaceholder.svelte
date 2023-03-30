<script lang="ts">
	import classNames from 'classnames';
	export let divClass: string =
		'space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center';
	export let imgHeight: string = '48';
</script>

<div role="status" class={classNames(divClass, $$props.class)}>
	<div
		class="flex justify-center items-center w-full h-{imgHeight} bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
	>
		<svg
			width=48
			height=48
			class="text-gray-200"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			fill="currentColor"
			viewBox="0 0 640 512"
			><path
				d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
			/></svg
		>
	</div>
	<div class="w-full">
	<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12 mb-2.5" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12 mb-2.5" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12" />
	</div>
	<span class="sr-only">Loading...</span>
</div>
