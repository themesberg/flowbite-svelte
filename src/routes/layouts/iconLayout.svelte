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

		<Htwo label="Related components" />

		<p>
			<a href="/icons/heroicons">Heroicons</a>
		</p>

		<p>
			<a href="/icons/simple-icons">Simpleicons</a>
		</p>

		<p>
			<a href="/icons/feathericons">Feathericons</a>
		</p>

		<Htwo label="References" />

		<p class="w-full dark:text-white text-base">
			<a href="https://github.com/shinokada/svelte-heroicons" target="_blank">- Svelte-heroicons</a>
		</p>

		<p class="w-full dark:text-white text-base">
			<a href="https://github.com/shinokada/svelte-simpleicons" target="_blank">- Svelte-Simpleicons</a>
		</p>

		<p class="w-full dark:text-white text-base">
			<a href="https://github.com/shinokada/svelte-feathericons/tree/main/src/lib" target="_blank">- Svelte-Feathericons</a>
		</p>

		<p class="w-full dark:text-white text-base">
			<a href="https://heroicons.com/" target="_blank">- Heroicons</a>
		</p>

		<p class="w-full dark:text-white text-base">
			<a href="https://simpleicons.org/" target="_blank">- Simple-Icons</a>
		</p>

		<p class="w-full dark:text-white text-base">
			<a href="https://feathericons.com/" target="_blank">- Feathericons</a>
		</p>
	</div>
</div>
