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
			<a href="/timelines/default" class="text-blue-600 hover:underline dark:text-blue-500"
				>Default timeline</a
			>
		</p>

		<p class="dark:text-white text-lg w-full">
			<a href="/timelines/vertical/" class="text-blue-600 hover:underline dark:text-blue-500"
				>Vetical timeline</a
			>
		</p>

		<p class="dark:text-white text-lg w-full">
			<a href="/timelines/horizontal" class="text-blue-600 hover:underline dark:text-blue-500"
				>Horizontal timeline</a
			>
		</p>

		<p class="dark:text-white text-lg w-full">
			<a href="/timelines/activity" class="text-blue-600 hover:underline dark:text-blue-500"
				>Activity log</a
			>
		</p>

		<p class="dark:text-white text-lg w-full">
			<a href="/timelines/group" class="text-blue-600 hover:underline dark:text-blue-500"
				>Grouped timeline</a
			>
		</p>

		<h2 class="text-2xl w-full dark:text-white pt-8 pb-4">References</h2>

		<p class="dark:text-white text-lg">
			<a
				href="https://flowbite.com/docs/components/timeline/"
				target="_blank"
				class="text-blue-600 hover:underline dark:text-blue-500">Flowbite timeline</a
			>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="shinokada/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
