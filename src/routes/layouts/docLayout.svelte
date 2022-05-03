<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { sidebarOpen, sidebarIsInert, sidebarStayOpen } from '@codewithshin/svelte-sidebar';
	let width;
	$: if (width > 1024) {
		sidebarOpen.update((n) => (n = true));
		sidebarIsInert.update((n) => (n = false));
		sidebarStayOpen.update((n) => (n = true));
	} else {
		sidebarOpen.update((n) => (n = false));
		sidebarIsInert.update((n) => (n = true));
		sidebarStayOpen.update((n) => (n = false)); // when open a sidebar clicking outside closes it
	}
</script>

<svelte:window bind:innerWidth={width} />

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="Related topics" />

		<p>
			<a href="/pages/getting-started">Getting started</a>
		</p>

		<p>
			<a href="/pages/type-list">Type list</a>
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

		<Htwo label="References" />

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
