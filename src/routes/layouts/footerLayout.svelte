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

		<p>
			<a href="/footer/default">Default Footer</a>
		</p>

		<p>
			<a href="/footer/logo">Footer with Logo</a>
		</p>

		<p>
			<a href="/footer/sitemap">Footer with Sitemap</a>
		</p>

		<p>
			<a href="/footer/socialmedia">Footer with Socialmedia</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/footer/" target="_blank">Flowbite Footer</a>
		</p>
	</div>
</div>
