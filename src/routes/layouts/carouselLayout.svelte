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
			<a href="/carousels/default" class="text-blue-600 hover:underline dark:text-blue-500">Default Carousel</a>
		</p>

		<p>
			<a href="/carousels/transition" class="text-blue-600 hover:underline dark:text-blue-500">Carousel transition</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/carousel/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite carousel</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
