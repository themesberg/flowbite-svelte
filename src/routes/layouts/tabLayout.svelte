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

		<h2 class="text-2xl w-full dark:text-white py-8">Related components</h2>

		<p class="dark:text-white text-lg w-full">
			<a href="/tabs/default-tabs" class="text-blue-600 hover:underline dark:text-blue-500"
				>Default Tab</a
			>
		</p>

		<p class="dark:text-white text-lg w-full">
			<a href="/tabs/interactive-tabs" class="text-blue-600 hover:underline dark:text-blue-500"
				>Interactive Tab</a
			>
		</p>

		<p class="dark:text-white text-lg w-full">
			<a
				href="/tabs/multiple-interactive-tabs"
				class="text-blue-600 hover:underline dark:text-blue-500">Multiple Interactive Tab</a
			>
		</p>

		<p class="dark:text-white text-lg w-full">
			<a href="/tabs/pilltabs" class="text-blue-600 hover:underline dark:text-blue-500">Pill Tab</a>
		</p>

		<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

		<p class="dark:text-white text-lg">
			<a
				href="https://flowbite.com/docs/components/tabs/"
				target="_blank"
				class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Tabs</a
			>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="shinokada/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
