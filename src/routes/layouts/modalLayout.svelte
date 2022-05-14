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
				<a href="/modals/small" class="link">Small Modal</a>
			</p>

			<p>
				<a href="/modals/medium" class="link">Medium Modal</a>
			</p>

			<p>
				<a href="/modals/large" class="link">Large Modal</a>
			</p>

			<p>
				<a href="/modals/extra-large" class="link">Extra Large Modal</a>
			</p>

			<p>
				<a href="/modals/signin" class="link">Signin Modal</a>
			</p>

			<p>
				<a href="/modals/all-modals" class="link">All Modals</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/modal/" target="_blank" class="link">Flowbite Modal</a>
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
