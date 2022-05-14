<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Responsive } from 'svelte-sidebar-menu';
</script>

<Responsive />
<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="Related components" />
		<div class="related-components">
			<p>
				<a href="/icons/heroicons" class="link">Heroicons</a>
			</p>

			<p>
				<a href="/icons/simple-icons" class="link">Simpleicons</a>
			</p>

			<p>
				<a href="/icons/feathericons" class="link">Feathericons</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p class="w-full dark:text-white text-base">
				<a href="https://github.com/shinokada/svelte-heroicons" target="_blank" class="link">Svelte-heroicons</a>
			</p>

			<p class="w-full dark:text-white text-base">
				<a href="https://github.com/shinokada/svelte-simpleicons" target="_blank" class="link">Svelte-Simpleicons</a>
			</p>

			<p class="w-full dark:text-white text-base">
				<a href="https://github.com/shinokada/svelte-feathericons/tree/main/src/lib" target="_blank" class="link">Svelte-Feathericons</a>
			</p>

			<p class="w-full dark:text-white text-base">
				<a href="https://heroicons.com/" target="_blank" class="link">Heroicons</a>
			</p>

			<p class="w-full dark:text-white text-base">
				<a href="https://simpleicons.org/" target="_blank" class="link">Simple-Icons</a>
			</p>

			<p class="w-full dark:text-white text-base">
				<a href="https://feathericons.com/" target="_blank" class="link">Feathericons</a>
			</p>
		</div>
	</div>
</div>

<style>
	.link {
		color: #256cfa;
	}
	.link:hover {
		color: #6599ff;
		text-decoration: underline;
	}
</style>
