<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="Related components" />

		<p>
			<a href="/accordions/default" class="text-blue-600 hover:underline dark:text-blue-500">Default Accordion</a>
		</p>

		<p>
			<a href="/accordions/icon-accordion" class="text-blue-600 hover:underline dark:text-blue-500">Icon Accordion</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/accordion/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Accordion</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
