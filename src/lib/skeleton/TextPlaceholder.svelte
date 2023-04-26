<script lang="ts">
	interface Sizes {
    [key: string]: string;
  }

  const sizes: Sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
		xxl: 'max-w-2xl'
  };

	import classNames from 'classnames';
	export let divClass: string = 'space-y-2.5 animate-pulse';
	export let size: keyof Sizes = 'sm';
	$: outDivclass = classNames(sizes[size], divClass, $$props.class)
</script>

<div role="status" class={outDivclass}>
	<div class="flex items-center space-x-2 w-full">
		<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
	</div>
	<div class="flex items-center space-x-2 w-11/12">
		<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
	</div>
	<div class="flex items-center space-x-2 w-9/12">
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
		<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
	</div>
	<div class="flex items-center space-x-2 w-11/12">
		<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
	</div>
	<div class="flex items-center space-x-2 w-10/12">
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
		<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
	</div>
	<div class="flex items-center space-x-2 w-8/12">
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
		<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
	</div>
	<span class="sr-only">Loading...</span>
</div>
