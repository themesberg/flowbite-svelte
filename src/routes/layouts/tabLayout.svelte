<script>
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<h2 class="text-2xl w-full dark:text-white pt-16 pb-8">Related components</h2>

		<p>
			<a href="/tabs/default-tabs" class="text-blue-600 hover:underline dark:text-blue-500">Default Tabs</a>
		</p>

		<p>
			<a href="/tabs/underline-tabs" class="text-blue-600 hover:underline dark:text-blue-500">Underline Tabs</a>
		</p>

		<p>
			<a href="/tabs/icon-tabs" class="text-blue-600 hover:underline dark:text-blue-500">Icon Tabs</a>
		</p>

		<p>
			<a href="/tabs/full-width-tabs" class="text-blue-600 hover:underline dark:text-blue-500">Full width Tabs</a>
		</p>

		<p>
			<a href="/tabs/interactive-tabs" class="text-blue-600 hover:underline dark:text-blue-500">Interactive Tabs</a>
		</p>

		<p>
			<a href="/tabs/interactive-tabs-2" class="text-blue-600 hover:underline dark:text-blue-500">Interactive Tabs 2</a>
		</p>

		<p>
			<a href="/tabs/multiple-interactive-tabs" class="text-blue-600 hover:underline dark:text-blue-500">Multiple Interactive Tabs</a>
		</p>

		<p>
			<a href="/tabs/pilltabs" class="text-blue-600 hover:underline dark:text-blue-500">Pill Tabs</a>
		</p>

		<h2 class="text-2xl w-full dark:text-white pt-8 pb-4">References</h2>

		<p class="dark:text-white text-lg">
			<a href="https://flowbite.com/docs/components/tabs/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Tabs</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
