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
				<a href="/cards/card" class="link">Default Card</a>
			</p>

			<p>
				<a href="/cards/cta" class="link">CTA Card</a>
			</p>

			<p>
				<a href="/cards/ecommerce" class="link">Ecommerce Card</a>
			</p>

			<p>
				<a href="/cards/horizontal" class="link">Horizontal Card</a>
			</p>

			<p>
				<a href="/cards/interactive" class="link">Interactive Card</a>
			</p>

			<p>
				<a href="/cards/list" class="link">List Card</a>
			</p>

			<p>
				<a href="/cards/signin" class="link">Signin Card</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/card/" target="_blank" class="link">Flowbite Card</a>
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
