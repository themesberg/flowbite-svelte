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
			<a href="/alerts/default-alert" class="text-blue-600 hover:underline dark:text-blue-500">Default Alert</a>
		</p>

		<p>
			<a href="/alerts/border-alert" class="text-blue-600 hover:underline dark:text-blue-500">Border Alert</a>
		</p>

		<p>
			<a href="/alerts/information-alert" class="text-blue-600 hover:underline dark:text-blue-500">Information Alert</a>
		</p>

		<p>
			<a href="/alerts/animation" class="text-blue-600 hover:underline dark:text-blue-500">Animation</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/alerts/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Alerts</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
