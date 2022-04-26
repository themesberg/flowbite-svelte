<script>
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<h2 class="text-2xl w-full dark:text-white pt-16 pb-8">Related components</h2>

		<p>
			<a href="/forms/checkbox" class="text-blue-600 hover:underline dark:text-blue-500">Checkbox</a>
		</p>
		<p>
			<a href="/forms/file-input" class="text-blue-600 hover:underline dark:text-blue-500">File input</a>
		</p>
		<p>
			<a href="/forms/floating-label" class="text-blue-600 hover:underline dark:text-blue-500">Floating label</a>
		</p>
		<p>
			<a href="/forms/input" class="text-blue-600 hover:underline dark:text-blue-500">Input</a>
		</p>
		<p>
			<a href="/forms/radio" class="text-blue-600 hover:underline dark:text-blue-500">Radio</a>
		</p>
		<p>
			<a href="/forms/range" class="text-blue-600 hover:underline dark:text-blue-500">Range</a>
		</p>
		<p>
			<a href="/forms/search" class="text-blue-600 hover:underline dark:text-blue-500">Search</a>
		</p>
		<p>
			<a href="/forms/select" class="text-blue-600 hover:underline dark:text-blue-500">Select</a>
		</p>
		<p>
			<a href="/forms/textarea" class="text-blue-600 hover:underline dark:text-blue-500">Textarea</a>
		</p>
		<p>
			<a href="/forms/toggle" class="text-blue-600 hover:underline dark:text-blue-500">Toggle</a>
		</p>

		<h2 class="text-2xl w-full dark:text-white pt-8 pb-4">References</h2>

		<p>
			<a href="https://flowbite.com/docs/components/forms/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Forms</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
