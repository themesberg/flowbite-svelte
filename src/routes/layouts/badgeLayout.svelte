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
			<a href="/badges/default">Default Badge</a>
		</p>

		<p>
			<a href="/badges/badge-icon">Badge with icon</a>
		</p>

		<p>
			<a href="/badges/badge-link">Badge with link</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/badge/" target="_blank">Flowbite Badge</a>
		</p>
	</div>

	<div class="container my-16 mx-auto">
		<Utterances reponame="themesberg/flowbite-svelte" theme="dark-blue" />
	</div>
</div>
