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
				<a href="/modals/small">Small Modal</a>
			</p>

			<p>
				<a href="/modals/medium">Medium Modal</a>
			</p>

			<p>
				<a href="/modals/large">Large Modal</a>
			</p>

			<p>
				<a href="/modals/extra-large">Extra Large Modal</a>
			</p>

			<p>
				<a href="/modals/signin">Signin Modal</a>
			</p>

			<p>
				<a href="/modals/all-modals">All Modals</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/modal/" target="_blank">Flowbite Modal</a>
			</p>
		</div>
	</div>
</div>
