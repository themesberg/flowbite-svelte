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
				<a href="/tooltips/default" class="link">- Default Tooltip</a>
			</p>

			<p>
				<a href="/tooltips/light" class="link">- Light Tooltip</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p>
				- Read more about <a href="/buttons" class="link">Buttons</a>
			</p>
			<p>
				<a href="https://flowbite.com/docs/components/tooltips/" target="_blank" class="link">- Flowbite Tooltip</a>
			</p>
		</div>
	</div>
</div>

<style>
	.link:hover {
		color: #3277ff;
		text-decoration: underline;
	}
</style>
