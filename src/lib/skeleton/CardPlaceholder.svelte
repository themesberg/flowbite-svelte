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
	export let divClass: string =
		'p-4 rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700';
	export let size: keyof Sizes = 'sm';
	$: outDivclass = classNames(sizes[size], divClass, $$props.class)
</script>

<div role="status" class={outDivclass}>
	<div class="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
		<svg
			width=48
			height=48
			class="text-gray-200 dark:text-gray-600"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			fill="currentColor"
			viewBox="0 0 640 512"
			><path
				d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
			/></svg
		>
	</div>
	<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
	<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
	<div class="flex items-center mt-4 space-x-3">
		<svg
			class="w-14 h-14 text-gray-200 dark:text-gray-700"
			aria-hidden="true"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
				clip-rule="evenodd"
			/></svg
		>
		<div>
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
			<div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
		</div>
	</div>
	<span class="sr-only">Loading...</span>
</div>
