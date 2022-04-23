<script>
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<h2 class="text-2xl w-full dark:text-white pt-16 pb-8">Related components</h2>

		<p>
			<a href="/navbars/default" class="text-blue-600 hover:underline dark:text-blue-500">Default Navbar</a>
		</p>

		<p>
			<a href="/navbars/dropdown" class="text-blue-600 hover:underline dark:text-blue-500">Dropdown Navbar</a>
		</p>

		<h2 class="text-2xl w-full dark:text-white pt-8 pb-4">References</h2>

		<p>
			<a href="https://flowbite.com/docs/components/navbar/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Navbar</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
