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
				<a href="/forms/floating-label" class="link">Floating label</a>
			</p>
			<p>
				<a href="/forms/radio" class="link">Radio</a>
			</p>
			<p>
				<a href="/forms/range" class="link">Range</a>
			</p>
			<p>
				<a href="/forms/toggle" class="link">Toggle</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/forms/" target="_blank" class="link"
					>Flowbite Forms</a
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
