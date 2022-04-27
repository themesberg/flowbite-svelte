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
			<a href="/modals/small" class="text-blue-600 hover:underline dark:text-blue-500">Small Modal</a>
		</p>

		<p>
			<a href="/modals/medium" class="text-blue-600 hover:underline dark:text-blue-500">Medium Modal</a>
		</p>

		<p>
			<a href="/modals/large" class="text-blue-600 hover:underline dark:text-blue-500">Large Modal</a>
		</p>

		<p>
			<a href="/modals/extra-large" class="text-blue-600 hover:underline dark:text-blue-500">Extra Large Modal</a>
		</p>

		<p>
			<a href="/modals/signin" class="text-blue-600 hover:underline dark:text-blue-500">Signin Modal</a>
		</p>

		<p>
			<a href="/modals/all-modals" class="text-blue-600 hover:underline dark:text-blue-500">All Modals</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/modal/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Modal</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
