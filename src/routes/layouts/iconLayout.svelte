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
			<a href="/icons/heroicons" class="text-blue-600 hover:underline dark:text-blue-500">Heroicons</a>
		</p>

		<p>
			<a href="/icons/simple-icons" class="text-blue-600 hover:underline dark:text-blue-500">Simpleicons</a>
		</p>

		<p>
			<a href="/icons/feathericons" class="text-blue-600 hover:underline dark:text-blue-500">Feathericons</a>
		</p>

		<Htwo label="References" />

		<p class="w-full dark:text-white text-base">
			<a href="https://github.com/shinokada/svelte-heroicons" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Svelte-heroicons</a>
		</p>

		<p class="w-full dark:text-white text-base">
			<a href="https://github.com/shinokada/svelte-simpleicons" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Svelte-Simpleicons</a>
		</p>

		<p class="w-full dark:text-white text-base">
			<a href="https://github.com/shinokada/svelte-feathericons/tree/main/src/lib" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Svelte-Feathericons</a>
		</p>

		<p class="w-full dark:text-white text-base">
			<a href="https://heroicons.com/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Heroicons</a>
		</p>

		<p class="w-full dark:text-white text-base">
			<a href="https://simpleicons.org/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Simple-Icons</a>
		</p>

		<p class="w-full dark:text-white text-base">
			<a href="https://feathericons.com/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Feathericons</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
