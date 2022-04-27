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
			<a href="/timelines/default" class="text-blue-600 hover:underline dark:text-blue-500">Default timeline</a>
		</p>

		<p>
			<a href="/timelines/vertical/" class="text-blue-600 hover:underline dark:text-blue-500">Vetical timeline</a>
		</p>

		<p>
			<a href="/timelines/horizontal" class="text-blue-600 hover:underline dark:text-blue-500">Horizontal timeline</a>
		</p>

		<p>
			<a href="/timelines/activity" class="text-blue-600 hover:underline dark:text-blue-500">Activity log</a>
		</p>

		<p>
			<a href="/timelines/group" class="text-blue-600 hover:underline dark:text-blue-500">Grouped timeline</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/timeline/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite timeline</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
