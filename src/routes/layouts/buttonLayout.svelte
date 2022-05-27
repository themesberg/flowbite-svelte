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
				<a href="/buttons/default" class="link">Default Button</a>
			</p>

			<p>
				<a href="/buttons/colored-shadow" class="link">Colored Shadow Button</a>
			</p>

			<p>
				<a href="/buttons/gradient-duotone" class="link">Gradient Duotone Button</a>
			</p>

			<p>
				<a href="/buttons/gradient-monochrome" class="link">Gradient Monochrome Button</a>
			</p>

			<p>
				<a href="/buttons/gradient-outline" class="link">Gradietn Outline Button</a>
			</p>

			<p>
				<a href="/buttons/outlined" class="link">Outlined Button</a>
			</p>

			<p>
				<a href="/buttons/rounded" class="link">Rounded Button</a>
			</p>

			<p>
				<a href="/buttons/button-loader" class="link">Button Loader</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/buttons/" target="_blank" class="link"
					>Flowbite Buttons</a
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
