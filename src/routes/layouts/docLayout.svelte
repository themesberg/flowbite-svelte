<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Responsive } from 'svelte-sidebar-menu';
</script>

<Responsive />

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="Related topics" />
		<div class="related-components">
			<p>
				<a href="/pages/getting-started">Getting started</a>
			</p>

			<p>
				<a href="/pages/types">Type list</a>
			</p>
			<p>
				<a href="/pages/about">About</a>
			</p>
			<p>
				<a href="/pages/how-to-contribute">How to contribute</a>
			</p>
			<p>
				<a href="/pages/cli">Flowbite-Svelte-CLI</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
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
	</div>
</div>
