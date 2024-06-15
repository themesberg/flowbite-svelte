<script lang="ts">
	import { imagesPath } from '../../utils/variables';
	import { Button, P } from 'flowbite-svelte';
	export let title = 'Something has gone seriously wrong';
	export let description =
		"It's always time for a coffee break. We should be back by the time you finish your coffee.";
	export let image = {
		src: imagesPath('illustrations/500.svg'),
		alt: 'astronaut'
	};
	export let btnHref = '/';
	export let btnTitle = 'Go back home';
	export let mainClass = 'bg-gray-50 dark:bg-gray-900';
	export let mainDivClass =
		'flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900';
	export let h1Class =
		'mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white';
	export let imgDiv = 'block md:max-w-lg';
	export let div2Class = 'text-center xl:max-w-4xl';
</script>

<main class={mainClass}>
	<div class={mainDivClass}>
		<div class={imgDiv}>
			<img src={image.src} alt={image.alt} />
		</div>
		<div class={div2Class}>
			<h1 class={h1Class}>
				{title}
			</h1>
			<P class="mb-5 text-base font-normal text-gray-500 dark:text-gray-400 md:text-lg">
				{description}
			</P>
			<Button href={btnHref}>
				<svg
					class="-ml-1 mr-2 h-5 w-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/></svg
				>
				{btnTitle}
			</Button>
		</div>
	</div>
</main>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let title = 'Something has gone seriously wrong';
@prop export let description =
		"It's always time for a coffee break. We should be back by the time you finish your coffee.";
@prop export let image = {
		src: imagesPath('illustrations/500.svg'),
		alt: 'astronaut'
	};
@prop export let btnHref = '/';
@prop export let btnTitle = 'Go back home';
@prop export let mainClass = 'bg-gray-50 dark:bg-gray-900';
@prop export let mainDivClass =
		'flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900';
@prop export let h1Class =
		'mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white';
@prop export let imgDiv = 'block md:max-w-lg';
@prop export let div2Class = 'text-center xl:max-w-4xl';
-->
