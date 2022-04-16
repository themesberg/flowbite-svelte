<script>
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<h2 class="text-2xl w-full dark:text-white pt-16 pb-8">Related components</h2>

		<p>
			<a href="/button-groups/default" class="text-blue-600 hover:underline dark:text-blue-500"
				>Default Button Group</a
			>
		</p>

		<p>
			<a href="/button-groups/outline" class="text-blue-600 hover:underline dark:text-blue-500"
				>Outline Button Group</a
			>
		</p>

		<h2 class="text-2xl w-full dark:text-white pt-8 pb-4">References</h2>

		<p class="dark:text-white text-lg">
			<a
				href="https://flowbite.com/docs/components/button-group/"
				target="_blank"
				class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Button Group</a
			>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="shinokada/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
