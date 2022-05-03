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
			<a href="/buttons/default">Default Button</a>
		</p>

		<p>
			<a href="/buttons/colored-shadow">Colored Shadow Button</a>
		</p>

		<p>
			<a href="/buttons/gradient-duotone">Gradient Duotone Button</a>
		</p>

		<p>
			<a href="/buttons/gradient-monochrome">Gradient Monochrome Button</a>
		</p>

		<p>
			<a href="/buttons/gradient-outline">Gradietn Outline Button</a>
		</p>

		<p>
			<a href="/buttons/outlined">Outlined Button</a>
		</p>

		<p>
			<a href="/buttons/rounded">Rounded Button</a>
		</p>

		<p>
			<a href="/buttons/button-loader">Button Loader</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/buttons/" target="_blank">Flowbite Buttons</a>
		</p>
	</div>
</div>
