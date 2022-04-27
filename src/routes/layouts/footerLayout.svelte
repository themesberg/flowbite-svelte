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
			<a href="/footer/default" class="text-blue-600 hover:underline dark:text-blue-500">Default Footer</a>
		</p>

		<p>
			<a href="/footer/logo" class="text-blue-600 hover:underline dark:text-blue-500">Footer with Logo</a>
		</p>

		<p>
			<a href="/footer/sitemap" class="text-blue-600 hover:underline dark:text-blue-500">Footer with Sitemap</a>
		</p>

		<p>
			<a href="/footer/socialmedia" class="text-blue-600 hover:underline dark:text-blue-500">Footer with Socialmedia</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/footer/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Footer</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
