<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<h2 class="text-2xl w-full dark:text-white py-4">Related topics</h2>

		<p>
			<a href="/getting-started">Getting started</a>
		</p>

		<p>
			<a href="/type-list">Type list</a>
		</p>

		<p>
			<a href="/about">About</a>
		</p>
		<p>
			<a href="/cli">Flowbite-Svelte-CLI</a>
		</p>

		<h2 class="text-2xl dark:text-white w-full pt-8 py-8">References</h2>

		<p>
			<a href="https://svelte.dev/docs">Svelte</a>
		</p>

		<p>
			<a href="https://kit.svelte.dev/docs">SvelteKit</a>
		</p>

		<p>
			<a href="https://tailwindcss.com/docs/installation">TailwindCSS</a>
		</p>

		<p>
			<a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite</a>
		</p>

		<p>
			<a href="https://github.com/shinokada/svelte-sidebar">Svelte-sidebar</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
