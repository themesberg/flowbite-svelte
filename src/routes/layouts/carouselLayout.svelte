<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import Responsive from '../utils/Responsive.svelte';
</script>

<Responsive />

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="Related components" />

		<p>
			<a href="/carousels/default">Default Carousel</a>
		</p>

		<p>
			<a href="/carousels/transition">Carousel transition</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/carousel/" target="_blank">Flowbite carousel</a>
		</p>
	</div>
</div>
