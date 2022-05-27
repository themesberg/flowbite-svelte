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
				<a href="/footer/default" class="link">Default Footer</a>
			</p>

			<p>
				<a href="/footer/logo" class="link">Footer with Logo</a>
			</p>

			<p>
				<a href="/footer/sitemap" class="link">Footer with Sitemap</a>
			</p>

			<p>
				<a href="/footer/socialmedia" class="link">Footer with Socialmedia</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/footer/" target="_blank" class="link"
					>Flowbite Footer</a
				>
			</p>
		</div>
	</div>
</div>

<style>
	.link {
		color: #f83c00;
	}
	.link:hover {
		color: #fc7146;
		text-decoration: underline;
	}
</style>
