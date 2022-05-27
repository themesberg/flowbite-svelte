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
				<a href="/accordions/default" class="link">Default Accordion</a>
			</p>

			<p>
				<a href="/accordions/icon-accordion" class="link">Icon Accordion</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/accordion/" target="_blank" class="link"
					>Flowbite Accordion</a
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
