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
				<a href="/badges/default" class="link">Default Badge</a>
			</p>

			<p>
				<a href="/badges/badge-icon" class="link">Badge with icon</a>
			</p>

			<p>
				<a href="/badges/badge-link" class="link">Badge with link</a>
			</p>
		</div>
		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/badge/" target="_blank" class="link">Flowbite Badge</a>
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
