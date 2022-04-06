<script>
	import Prism from 'prismjs';
	import 'prismjs/themes/prism.css';
	import 'prism-themes/themes/prism-holi-theme.css';
	import 'prismjs/components/prism-markdown.js';
	import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto pb-8">
	<div class="container flex flex-wrap mx-auto pt-8">
		<slot />

		<h2 class="text-2xl w-full dark:text-white pt-16 pb-8">Related components</h2>

		<p class="dark:text-white text-lg w-full">
			<a href="/spinners/default" class="text-blue-600 hover:underline dark:text-blue-500"
				>Default Spinner</a
			>
		</p>

		<p class="dark:text-white text-lg w-full">
			<a href="/spinners/button-spinner" class="text-blue-600 hover:underline dark:text-blue-500"
				>Button Spinner</a
			>
		</p>

		<h2 class="text-2xl w-full dark:text-white pt-8 pb-4">References</h2>

		<p class="dark:text-white text-lg">
			<a
				href="https://flowbite.com/docs/components/spinner/"
				target="_blank"
				class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Spinner</a
			>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="shinokada/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
