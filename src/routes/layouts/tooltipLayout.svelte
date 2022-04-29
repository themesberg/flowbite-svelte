<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<h2 class="text-2xl w-full dark:text-white pt-16 pb-4">Related components</h2>

		<p>
			<a href="/tooltips/default">- Default Tooltip</a>
		</p>

		<p>
			<a href="/tooltips/light">- Light Tooltip</a>
		</p>

		<Htwo label="References" />

		<p>
			- Read more about <a href="/buttons">Buttons</a>
		</p>
		<p>
			<a href="https://flowbite.com/docs/components/tooltips/" target="_blank">- Flowbite Tooltip</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
