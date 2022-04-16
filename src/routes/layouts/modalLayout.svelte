<script>
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto pb-8">
	<div class="container flex flex-wrap mx-auto pt-8">
		<slot />

		<h2 class="text-2xl w-full dark:text-white pt-16 pb-8">Related components</h2>

		<p>
			<a href="/modals/small" class="text-blue-600 hover:underline dark:text-blue-500"
				>Small Modal</a
			>
		</p>

		<p>
			<a href="/modals/medium" class="text-blue-600 hover:underline dark:text-blue-500"
				>Medium Modal</a
			>
		</p>

		<p>
			<a href="/modals/large" class="text-blue-600 hover:underline dark:text-blue-500"
				>Large Modal</a
			>
		</p>

		<p>
			<a href="/modals/extra-large" class="text-blue-600 hover:underline dark:text-blue-500"
				>Extra Large Modal</a
			>
		</p>

		<p>
			<a href="/modals/signin" class="text-blue-600 hover:underline dark:text-blue-500"
				>Signin Modal</a
			>
		</p>

		<p>
			<a href="/modals/all-modals" class="text-blue-600 hover:underline dark:text-blue-500"
				>All Modals</a
			>
		</p>

		<h2 class="text-2xl w-full dark:text-white pt-8 pb-4">References</h2>

		<p class="dark:text-white text-lg">
			<a
				href="https://flowbite.com/docs/components/modal/"
				target="_blank"
				class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Modal</a
			>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="shinokada/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
