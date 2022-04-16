<script>
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto pb-8">
	<div class="container flex flex-wrap mx-auto pt-8">
		<slot />

		<h2 class="text-2xl w-full dark:text-white pt-16 pb-4">Related components</h2>

		<p>
			<a href="/tooltips/default" class="text-blue-600 hover:underline dark:text-blue-500"
				>- Default Tooltip</a
			>
		</p>

		<p>
			<a href="/tooltips/light" class="text-blue-600 hover:underline dark:text-blue-500"
				>- Light Tooltip</a
			>
		</p>

		<h2 class="text-2xl w-full dark:text-white pt-8 pb-4">References</h2>

		<p>
			- Read more about <a href="/buttons" class="text-blue-600 hover:underline dark:text-blue-500"
				>Buttons</a
			>
		</p>
		<p>
			<a
				href="https://flowbite.com/docs/components/tooltips/"
				target="_blank"
				class="text-blue-600 hover:underline dark:text-blue-500">- Flowbite Tooltip</a
			>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="shinokada/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
